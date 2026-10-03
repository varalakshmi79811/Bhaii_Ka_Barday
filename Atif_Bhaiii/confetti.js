/**
 * Pookie Batman - Particle, Confetti, Bat Swarm & Fireworks Engine
 * Pure Canvas 2D: high performance, GPU-friendly, 60fps.
 */

class FXEngine {
  constructor() {
    this.confettiCanvas = null;
    this.confettiCtx = null;
    this.fireworksCanvas = null;
    this.fireworksCtx = null;

    this.confettiParticles = [];
    this.fireworksRockets = [];
    this.fireworkSparks = [];
    this.batSwarmParticles = [];

    this.isFireworksActive = false;
    this.isBatSwarmActive = false;
    this.batSwarmAlpha = 0;
    this.fireworkTimer = null;
    this.animFrameId = null;

    // Palette: Pink, Yellow, White, Blue
    this.colors = [
      '#FF3D9A', // hot pink
      '#FFC1DD', // soft pink
      '#FFD84D', // accent yellow
      '#FFFFFF', // pure white
      '#38bdf8'  // electric blue
    ];
  }

  init(confettiCanvasId, fireworksCanvasId) {
    this.confettiCanvas = document.getElementById(confettiCanvasId);
    if (this.confettiCanvas) {
      this.confettiCtx = this.confettiCanvas.getContext('2d');
    }

    this.fireworksCanvas = document.getElementById(fireworksCanvasId);
    if (this.fireworksCanvas) {
      this.fireworksCtx = this.fireworksCanvas.getContext('2d');
    }

    window.addEventListener('resize', () => this.resize());
    this.resize();
    this.startLoop();
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    if (this.confettiCanvas) {
      this.confettiCanvas.width = w * dpr;
      this.confettiCanvas.height = h * dpr;
      this.confettiCtx.scale(dpr, dpr);
    }
    if (this.fireworksCanvas) {
      this.fireworksCanvas.width = w * dpr;
      this.fireworksCanvas.height = h * dpr;
      this.fireworksCtx.scale(dpr, dpr);
    }
  }

  startLoop() {
    const loop = () => {
      this.renderConfetti();
      if (this.isFireworksActive || this.fireworksRockets.length > 0 || this.fireworkSparks.length > 0) {
        this.renderFireworks();
      }
      this.animFrameId = requestAnimationFrame(loop);
    };
    loop();
  }

  // ================= 1. DUAL PARTY POPPER TRANSITION (VIDEO -> CAKE) ================= //
  // Massive, explosive party popper blast blanketing 100% of the entire webpage from edge to edge
  fireDualPartyPoppers(onWipe) {
    if (window.soundCtrl) {
      window.soundCtrl.playPartyPopper();
    }

    const w = window.innerWidth;
    const h = window.innerHeight;
    const popperColors = [
      '#FF3D9A', // Hot Pink
      '#FFD84D', // Gotham Yellow Accent
      '#FFFFFF', // Pure White
      '#FFC1DD', // Soft Pink
      '#ff6bb5', // Vibrant Rose Pink
      '#ffe680', // Golden Glow
      '#ff1493', // Deep Pink
      '#38bdf8'  // Electric Sky Blue
    ];

    // Helper to spawn a high-impact particle
    const spawnParticle = (cfg) => {
      const isStreamer = cfg.isStreamer !== undefined ? cfg.isStreamer : (Math.random() > 0.52);
      this.confettiParticles.push({
        x: cfg.x,
        y: cfg.y,
        vx: cfg.vx,
        vy: cfg.vy,
        // Giant sizes: 140px - 300px for streamers, 26px - 48px for chunky confetti
        size: isStreamer ? (Math.random() * 160 + 140) : (Math.random() * 22 + 26),
        width: isStreamer ? (Math.random() * 8 + 14) : (Math.random() * 20 + 24),
        color: popperColors[Math.floor(Math.random() * popperColors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.22,
        flipY: Math.random() * Math.PI,
        flipYSpeed: Math.random() * 0.16 + 0.06,
        flipX: Math.random() * Math.PI,
        flipXSpeed: Math.random() * 0.14 + 0.05,
        shape: isStreamer ? 'streamer' : (Math.random() > 0.35 ? 'rect' : (Math.random() > 0.5 ? 'circle' : 'star')),
        ribbonWave: Math.random() * Math.PI * 2,
        ribbonWaveSpeed: Math.random() * 0.14 + 0.08,
        swayPhase: Math.random() * Math.PI * 2,
        swaySpeed: Math.random() * 0.06 + 0.03,
        swayAmp: Math.random() * 2.2 + 1.0,
        alpha: 1,
        fadeDelay: cfg.fadeDelay !== undefined ? cfg.fadeDelay : (Math.floor(Math.random() * 60) + 120), // 2 to 3 seconds before fading
        fadeRate: 0.005, // Smooth slow fade (total life ~5.5s)
        gravity: isStreamer ? 0.22 : 0.30,
        drag: cfg.drag !== undefined ? cfg.drag : 0.975
      });
    };

    // 1. LEFT BOTTOM CORNER CANNON (Shoots violently upwards & diagonally right across screen)
    for (let i = 0; i < 220; i++) {
      const angle = -Math.PI * 0.49 + Math.random() * (Math.PI * 0.42); // -88° to -13°
      const speed = Math.random() * 34 + 24; // 24 to 58 px/frame
      spawnParticle({
        x: 0,
        y: h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        drag: 0.976
      });
    }

    // 2. RIGHT BOTTOM CORNER CANNON (Shoots violently upwards & diagonally left across screen)
    for (let i = 0; i < 220; i++) {
      const angle = -Math.PI * 0.93 + Math.random() * (Math.PI * 0.42); // -167° to -92°
      const speed = Math.random() * 34 + 24; // 24 to 58 px/frame
      spawnParticle({
        x: w,
        y: h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        drag: 0.976
      });
    }

    // 3. MID-SIDE LATERAL CANNONS (Left & Right mid-height sweeping the center and upper screen)
    for (let i = 0; i < 70; i++) {
      const angle = -Math.PI * 0.25 + (Math.random() - 0.5) * 0.7; // inward to center-right
      const speed = Math.random() * 24 + 18;
      spawnParticle({
        x: 0,
        y: h * 0.38,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed
      });
    }
    for (let i = 0; i < 70; i++) {
      const angle = -Math.PI * 0.75 + (Math.random() - 0.5) * 0.7; // inward to center-left
      const speed = Math.random() * 24 + 18;
      spawnParticle({
        x: w,
        y: h * 0.38,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed
      });
    }

    // 4. OVERHEAD FULL-WEBPAGE CEILING CASCADE (Guarantees 100% of top & center webpage is covered)
    for (let i = 0; i < 200; i++) {
      const px = Math.random() * w;
      const py = Math.random() * (h * 0.25) - 30;
      spawnParticle({
        x: px,
        y: py,
        vx: (Math.random() - 0.5) * 12,
        vy: Math.random() * 10 + 3,
        fadeDelay: Math.floor(Math.random() * 80) + 140
      });
    }

    // Wipe video away at 420ms when screen is 100% blanketed in massive streamers and confetti
    setTimeout(() => {
      if (typeof onWipe === 'function') {
        onWipe();
      }
    }, 420);
  }

  // ================= 2. CINEMATIC WIPE TRANSITION (CAKE -> BATMAN) ================= //
  // Smooth, clean cinematic fade wipe to reveal Batman (zero black line artifacts)
  launchBatSwarm(onCoverScreen, onDone) {
    if (window.soundCtrl) {
      window.soundCtrl.playBatFlap();
    }

    const overlay = document.getElementById('bat-swarm-overlay');
    if (overlay) {
      overlay.style.transition = 'opacity 0.4s ease-in-out';
      overlay.style.opacity = '1';
    }

    setTimeout(() => {
      if (typeof onCoverScreen === 'function') {
        onCoverScreen();
      }
      if (overlay) {
        overlay.style.transition = 'opacity 0.5s ease-out';
        overlay.style.opacity = '0';
      }
    }, 450);

    setTimeout(() => {
      if (typeof onDone === 'function') {
        onDone();
      }
    }, 950);
  }

  // ================= 3. MAGICAL SPARKLES (YES -> GIFTS) ================= //
  burstMagicalSparkles(originX, originY) {
    const sparkleColors = ['#FFD84D', '#FF3D9A', '#FFFFFF', '#FFC1DD'];
    for (let i = 0; i < 90; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 12 + 3;
      this.confettiParticles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: Math.random() * 7 + 4,
        color: sparkleColors[Math.floor(Math.random() * sparkleColors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: 0.1,
        shape: Math.random() > 0.35 ? 'star' : 'circle',
        alpha: 1,
        gravity: 0.1,
        drag: 0.94
      });
    }
  }

  // Box Open Sparkles
  burstBoxSparkles(originX, originY) {
    const boxColors = ['#FF3D9A', '#FFD84D', '#FFFFFF'];
    for (let i = 0; i < 45; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 7 + 2;
      this.confettiParticles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        size: Math.random() * 5 + 3,
        color: boxColors[Math.floor(Math.random() * boxColors.length)],
        rotation: 0,
        rotSpeed: 0.1,
        shape: 'star',
        alpha: 1,
        gravity: 0.1,
        drag: 0.94
      });
    }
  }

  renderConfetti() {
    if (!this.confettiCtx) return;
    const ctx = this.confettiCtx;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    if (this.confettiParticles.length === 0) return;

    for (let i = this.confettiParticles.length - 1; i >= 0; i--) {
      const p = this.confettiParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.vy *= p.drag;
      p.rotation += p.rotSpeed;

      // Wind sway for fluttering paper & ribbons
      if (p.swaySpeed) {
        p.swayPhase = (p.swayPhase || 0) + p.swaySpeed;
        p.x += Math.sin(p.swayPhase) * (p.swayAmp || 1.2);
      }

      // Smooth delayed fading so poppers blanket the entire webpage
      if (p.fadeDelay !== undefined && p.fadeDelay > 0) {
        p.fadeDelay--;
      } else {
        p.alpha -= (p.fadeRate || 0.012);
      }

      if (p.alpha <= 0 || p.y > window.innerHeight + 150) {
        this.confettiParticles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillStyle = p.color;

      if (p.shape === 'streamer') {
        p.ribbonWave = (p.ribbonWave || 0) + (p.ribbonWaveSpeed || 0.1);
        const segments = 10;
        const segLen = p.size / segments;
        ctx.beginPath();
        ctx.lineWidth = p.width || 16;
        ctx.strokeStyle = p.color;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.moveTo(-p.size / 2, 0);
        for (let s = 1; s <= segments; s++) {
          const sx = -p.size / 2 + s * segLen;
          const sy = Math.sin(p.ribbonWave + s * 0.75) * (p.width * 1.5);
          ctx.lineTo(sx, sy);
        }
        ctx.stroke();
      } else if (p.shape === 'rect') {
        p.flipY = (p.flipY || 0) + (p.flipYSpeed || 0.1);
        p.flipX = (p.flipX || 0) + (p.flipXSpeed || 0.08);
        ctx.scale(Math.cos(p.flipX), Math.cos(p.flipY));
        const h = p.width || p.size * 0.75;
        ctx.fillRect(-p.size / 2, -h / 2, p.size, h);
      } else if (p.shape === 'circle') {
        p.flipY = (p.flipY || 0) + (p.flipYSpeed || 0.1);
        ctx.scale(Math.cos(p.flipY), 1);
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'star') {
        this.drawStar(ctx, 0, 0, 5, p.size, p.size / 2);
      }
      ctx.restore();
    }
  }

  drawStar(ctx, cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  }

  // ================= 4. FIREWORKS (10 SECONDS DURATION) ================= //
  startFireworks(durationMs = 10000, onDone = null) {
    this.isFireworksActive = true;
    const startTime = Date.now();

    const launchRandom = () => {
      if (!this.isFireworksActive) return;
      const elapsed = Date.now() - startTime;

      if (elapsed > durationMs) {
        this.stopFireworks();
        if (typeof onDone === 'function') {
          onDone();
        }
        return;
      }

      const startX = Math.random() * (window.innerWidth * 0.8) + window.innerWidth * 0.1;
      const targetX = startX + (Math.random() - 0.5) * 160;
      const targetY = Math.random() * (window.innerHeight * 0.42) + window.innerHeight * 0.1;
      this.launchRocket(startX, window.innerHeight, targetX, targetY);

      this.fireworkTimer = setTimeout(launchRandom, Math.random() * 350 + 250);
    };

    launchRandom();
    // Launch an immediate pair
    setTimeout(() => {
      this.launchRocket(window.innerWidth * 0.35, window.innerHeight, window.innerWidth * 0.38, window.innerHeight * 0.22);
      this.launchRocket(window.innerWidth * 0.65, window.innerHeight, window.innerWidth * 0.62, window.innerHeight * 0.25);
    }, 100);
  }

  stopFireworks() {
    this.isFireworksActive = false;
    clearTimeout(this.fireworkTimer);
  }

  launchRocket(startX, startY, targetX, targetY) {
    const distance = Math.hypot(targetX - startX, targetY - startY);
    const speed = 14;
    const totalFrames = Math.max(18, Math.floor(distance / speed));

    this.fireworksRockets.push({
      x: startX,
      y: startY,
      targetX,
      targetY,
      vx: (targetX - startX) / totalFrames,
      vy: (targetY - startY) / totalFrames,
      currentFrame: 0,
      totalFrames,
      trail: [],
      color: this.colors[Math.floor(Math.random() * this.colors.length)]
    });
  }

  explodeRocket(x, y, color) {
    if (window.soundCtrl) {
      window.soundCtrl.playSoftFireworkPop();
    }
    const sparkCount = Math.floor(Math.random() * 30) + 65;
    const burstColor = color || this.colors[Math.floor(Math.random() * this.colors.length)];

    for (let i = 0; i < sparkCount; i++) {
      const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.25;
      const speed = Math.random() * 6.5 + 1.5;

      this.fireworkSparks.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: Math.random() > 0.25 ? burstColor : '#FFD84D',
        alpha: 1,
        fade: Math.random() * 0.016 + 0.013,
        gravity: 0.08,
        friction: 0.97,
        size: Math.random() * 2.2 + 1.2,
        twinkle: Math.random() > 0.4
      });
    }
  }

  renderFireworks() {
    if (!this.fireworksCtx) return;
    const ctx = this.fireworksCtx;

    // Motion blur trails on pure black
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.restore();

    ctx.save();
    ctx.globalCompositeOperation = 'lighter';

    // 1. Rockets
    for (let i = this.fireworksRockets.length - 1; i >= 0; i--) {
      const r = this.fireworksRockets[i];
      r.x += r.vx;
      r.y += r.vy;
      r.currentFrame++;

      r.trail.push({ x: r.x, y: r.y });
      if (r.trail.length > 5) r.trail.shift();

      ctx.beginPath();
      ctx.moveTo(r.x, r.y);
      for (let t = r.trail.length - 1; t >= 0; t--) {
        ctx.lineTo(r.trail[t].x, r.trail[t].y);
      }
      ctx.strokeStyle = '#FFD84D';
      ctx.lineWidth = 2;
      ctx.stroke();

      if (r.currentFrame >= r.totalFrames) {
        this.explodeRocket(r.targetX, r.targetY, r.color);
        this.fireworksRockets.splice(i, 1);
      }
    }

    // 2. Sparks
    for (let i = this.fireworkSparks.length - 1; i >= 0; i--) {
      const s = this.fireworkSparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vy += s.gravity;
      s.vx *= s.friction;
      s.vy *= s.friction;
      s.alpha -= s.fade;

      if (s.alpha <= 0) {
        this.fireworkSparks.splice(i, 1);
        continue;
      }

      ctx.save();
      let sparkAlpha = s.alpha;
      if (s.twinkle && Math.random() > 0.4) {
        sparkAlpha *= 0.35;
      }
      ctx.globalAlpha = Math.max(0, sparkAlpha);
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    ctx.restore();
  }
}

window.fxEngine = new FXEngine();
