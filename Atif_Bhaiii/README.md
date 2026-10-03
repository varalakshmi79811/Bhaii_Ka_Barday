# 🦇🎀 Pookie Batman Birthday Experience

A vibrant, mobile-first, zero-backend birthday celebration website designed in the **"Pookie Batman"** theme — combining the pitch-black shadows of Gotham City (`#000000`) with glowing hot pink, soft pastel pink, and neon yellow accents.

---

## 📁 Project Folder Structure

```text
Atif_Bhaiii/
├── index.html            # Main semantic HTML5 structure with responsive viewport & meta tags
├── style.css             # Theme styles, chunky buttons, glowing animations, polaroids & modals
├── app.js                # Central CONFIG, scene switcher, mic candle detection, Batman logic
├── audio.js              # Synthesized Web Audio API sound engine (zero mp3 dependencies required!)
├── confetti.js           # Smooth GPU Canvas engine for bursts, confetti, and fireworks
│
├── Car_drifting.mp4      # Intro video (drifting car ending with tire smoke message)
├── cake.png              # 3-tier birthday cake with lit candles & bat topper
├── cake_blown.png        # Extinguished 3-tier cake with soft smoke wisps (cross-fades on blow!)
├── Happy_batman.png      # Smiling Lego Batman with cute pink bow
├── Angry_batman.png      # Angry crying Lego Batman (triggered on "NO")
├── gift_box.png          # Black 3D gift box with pink ribbon and yellow bat emblem
│
└── photos/               # Place your friendship photos here
    └── README.txt        # Helpful guide on photo naming and formats
```

---

## ⚙️ How to Customize (Without Touching Logic)

All customizable content is located at the **very top of `app.js`** inside the `CONFIG` object:

```javascript
const CONFIG = {
  friendName: "Atif",
  age: 23,
  introVideo: "Car_drifting.mp4",
  finalVideo: "final_video.mp4",        // Place your final video here
  finalButtonText: "maro laddu kavala nayana?",
  finalMessage: "Happy 23rd Birthday Atif ❤️",
  musicFile: "background_music.mp3",    // Optional background music

  gifts: [
    // Exactly 5 gifts, each with a handwritten letter and 3-4 polaroid photos
  ]
};
```

### 1. Adding Personal Photos
- Place your photo files into the `photos/` folder (e.g., `photos/memory1_1.jpg`, `photos/memory1_2.jpg`, etc.).
- Update or keep the paths in `CONFIG.gifts[...].photos`.
- *Note:* If any photo is missing, the site gracefully renders a stylish Pookie Batman gradient card with an emoji and your caption, so nothing looks broken!

### 2. Adding Final Video & Music
- **Final Video**: Save your video file as `final_video.mp4` in the project root (or change the path in `CONFIG.finalVideo`). When played, it uses full-screen playback with simple controls, followed by the fireworks finale!
- **Background Music**: Place an audio file named `background_music.mp3` in the root folder. If omitted, the site gracefully skips it while continuing to play all interactive sound effects.

### 3. Editing Letters & Messages
- Open `app.js` and modify the text under `letter` for any of the 5 gifts.
- Supports paragraphs, emojis, and line breaks (`\n`).

---

## 🚀 How to Deploy for Free

Since this is a 100% static website with no backend or build steps, you can deploy it in less than 60 seconds:

### Option 1: Netlify Drop (Easiest & Fastest — No Account Setup Needed)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop the entire `Atif_Bhaiii` folder into the upload box on the page.
3. Netlify will immediately publish your website and give you a free live URL (e.g., `https://pookie-batman-atif.netlify.app`).

### Option 2: Vercel
1. Install Vercel CLI (`npm i -g vercel`) or sign in at [vercel.com](https://vercel.com).
2. Run `vercel` inside this directory and press Enter to deploy.
3. Your live link is generated instantly.

### Option 3: GitHub Pages
1. Push this folder to a GitHub repository.
2. In the repository, go to **Settings** → **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## 🌟 Key Features Built-In
- **Seamless Pure Black Blending**: All image assets blend cleanly into `#000000` dark space with no rectangular borders.
- **Microphone Blowing Detection**: Real-time Web Audio API detection of breath into the phone/laptop mic with an instant "Tap to blow" fallback button.
- **Synthesized UI Audio**: Web Audio API generates pops, whooshes, thunder claps, sparkles, cheers, and firework booms without requiring heavy sound file downloads.
- **Mobile Responsive & Safe Areas**: Supports notched iPhones, Android navigation bars, and orientation rotation hints.
- **Reduced Motion Support**: Respects accessibility settings automatically.
