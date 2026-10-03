#!/usr/bin/env python3
"""
Simple HTTP server supporting byte-range requests (HTTP 206 Partial Content).
This ensures MP4 videos (like Car_drifting.mp4) stream and decode flawlessly in Safari, Chrome, and mobile browsers.
"""

import os
import sys
import mimetypes
from http.server import HTTPServer, SimpleHTTPRequestHandler

class RangeRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Accept-Ranges', 'bytes')
        # Prevent browser caching of code assets so edits reflect immediately
        clean_path = self.path.split('?', 1)[0]
        if clean_path.endswith(('.html', '.js', '.css', '/')) or clean_path == '':
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Pragma', 'no-cache')
            self.send_header('Expires', '0')
        super().end_headers()

    def translate_path(self, path):
        orig_path = super().translate_path(path)
        if os.path.exists(orig_path):
            return orig_path

        # If missing, check photos/ directory
        clean_path = path.split('?', 1)[0].split('#', 1)[0]
        filename = os.path.basename(clean_path)
        if filename:
            photos_path = os.path.join(os.getcwd(), 'photos', filename)
            if os.path.exists(photos_path):
                return photos_path

            name_no_ext, _ = os.path.splitext(filename)
            for cand_ext in ['.jpeg', '.jpg', '.png', '.mp4']:
                cand = os.path.join(os.getcwd(), 'photos', name_no_ext + cand_ext)
                if os.path.exists(cand):
                    return cand

            audio_path = os.path.join(os.getcwd(), 'audio', filename)
            if os.path.exists(audio_path):
                return audio_path

        return orig_path

    def do_GET(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path) or os.path.isdir(path):
            return super().do_GET()

        range_header = self.headers.get('Range')
        if not range_header or not range_header.startswith('bytes='):
            return super().do_GET()

        file_size = os.path.getsize(path)
        ranges = range_header[6:].split('-')
        start = int(ranges[0]) if ranges[0] else 0
        end = int(ranges[1]) if ranges[1] else file_size - 1

        if start >= file_size:
            self.send_error(416, "Requested Range Not Satisfiable")
            return

        end = min(end, file_size - 1)
        length = end - start + 1

        self.send_response(206)
        ctype, _ = mimetypes.guess_type(path)
        self.send_header('Content-Type', ctype or 'application/octet-stream')
        self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
        self.send_header('Content-Length', str(length))
        self.end_headers()

        with open(path, 'rb') as f:
            f.seek(start)
            bytes_to_send = length
            while bytes_to_send > 0:
                chunk = f.read(min(bytes_to_send, 64 * 1024))
                if not chunk:
                    break
                try:
                    self.wfile.write(chunk)
                except (BrokenPipeError, ConnectionResetError):
                    break
                bytes_to_send -= len(chunk)

def run():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server_address = ('', port)
    httpd = HTTPServer(server_address, RangeRequestHandler)
    print(f"🎬 Pookie Batman server running at http://localhost:{port}/")
    print(f"👉 Open in browser: http://localhost:{port}")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == '__main__':
    run()
