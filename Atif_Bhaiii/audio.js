/**
 * Pookie Batman - Web Audio Synthesizer & Sound Manager
 * Pure Web Audio API: 100% zero external sound file dependencies for UI sounds!
 * Clean, realistic, and tailored sound effects.
 */

class SoundController {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.currentDialogueAudio = null;
  }

  // Initialize AudioContext
  init() {
    this.ensureCtx();
  }

  ensureCtx() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  setMute(mute) {
    this.isMuted = mute;
  }

  // ================= CUSTOM AUDIO PLAYBACK ================= //
  playAudioFile(url, volume = 1.0, isVoiceDialogue = false) {
    if (this.isMuted) return null;
    try {
      this.ensureCtx();

      // Stop previous dialogue clip if another dialogue is triggered to avoid overlap
      if (isVoiceDialogue && this.currentDialogueAudio) {
        try {
          this.currentDialogueAudio.pause();
          this.currentDialogueAudio.currentTime = 0;
        } catch (e) {}
      }

      const audio = new Audio(url);
      audio.volume = volume;
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.warn('Playback error for', url, err);
        });
      }

      if (isVoiceDialogue) {
        this.currentDialogueAudio = audio;
      }
      return audio;
    } catch (e) {
      console.warn('Failed to load audio', url, e);
      return null;
    }
  }

  stopCurrentDialogue() {
    if (this.currentDialogueAudio) {
      try {
        this.currentDialogueAudio.pause();
        this.currentDialogueAudio.currentTime = 0;
      } catch (e) {}
      this.currentDialogueAudio = null;
    }
  }

  // 1. After blowing candles: Choodalani_undhi.mp3
  playChoodalani() {
    return this.playAudioFile('audio/Choodalani_undhi.mp3', 1.0, true);
  }

  // 2. Click on NO (Angry Batman): angry_dial.mp3 (replaces thunder sound)
  playAngryDial() {
    return this.playAudioFile('audio/angry_dial.mp3', 1.0, true);
  }

  // 3. Click on YES (Happy Batman): Brahmi.mp3
  playBrahmi() {
    return this.playAudioFile('audio/Brahmi.mp3', 1.0, true);
  }

  // 4. Gift boxes 1..5: lord1.mp3 ... lord5.mp3
  playLord(index) {
    const giftNumber = (index % 5) + 1;
    return this.playAudioFile(`audio/lord${giftNumber}.mp3`, 1.0, true);
  }

  // 5. All gifts completed: laddu_kavala.mp3
  playLadduKavala() {
    return this.playAudioFile('audio/laddu_kavala.mp3', 1.0, true);
  }

  // 1. Authentic Explosive Party Popper Blast
  // Sharp friction-cap snap + acoustic cardboard cylinder pop + punchy bass thump + paper flutter expulsion
  playPartyPopper() {
    this.ensureCtx();
    if (!this.ctx) return;
    try {
      const fireCannonBlast = (delayMs, pitchMultiplier = 1.0) => {
        const now = this.ctx.currentTime + delayMs;

        // LAYER 1: The Friction Primer / Gunpowder Snap (The crisp, violent initial crack)
        const snapLen = Math.floor(this.ctx.sampleRate * 0.025);
        const snapBuf = this.ctx.createBuffer(1, snapLen, this.ctx.sampleRate);
        const snapData = snapBuf.getChannelData(0);
        for (let i = 0; i < snapLen; i++) {
          snapData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.005));
        }
        const snapSrc = this.ctx.createBufferSource();
        snapSrc.buffer = snapBuf;

        const snapBp = this.ctx.createBiquadFilter();
        snapBp.type = 'bandpass';
        snapBp.frequency.setValueAtTime(2400 * pitchMultiplier, now);
        snapBp.Q.value = 1.4;

        const snapHp = this.ctx.createBiquadFilter();
        snapHp.type = 'highpass';
        snapHp.frequency.setValueAtTime(1200, now);

        const snapGain = this.ctx.createGain();
        snapGain.gain.setValueAtTime(1.0, now);
        snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.025);

        snapSrc.connect(snapBp);
        snapBp.connect(snapHp);
        snapHp.connect(snapGain);
        snapGain.connect(this.ctx.destination);
        snapSrc.start(now);

        // LAYER 2: Acoustic Cardboard Cylinder Pop (The hollow, pressurized "THOCK-POP")
        // Rapid pitch drop in 25ms + resonant cardboard tube body filter
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320 * pitchMultiplier, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.028);

        oscGain.gain.setValueAtTime(0.95, now);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.032);

        const bodyFilter = this.ctx.createBiquadFilter();
        bodyFilter.type = 'bandpass';
        bodyFilter.frequency.setValueAtTime(380 * pitchMultiplier, now);
        bodyFilter.Q.value = 3.2;

        osc.connect(bodyFilter);
        bodyFilter.connect(oscGain);
        oscGain.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.035);

        // LAYER 3: Low-End Explosive Thump (Sub bass impact you can feel)
        const sub = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        sub.type = 'sine';
        sub.frequency.setValueAtTime(140 * pitchMultiplier, now);
        sub.frequency.exponentialRampToValueAtTime(45, now + 0.05);

        subGain.gain.setValueAtTime(0.85, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

        sub.connect(subGain);
        subGain.connect(this.ctx.destination);
        sub.start(now);
        sub.stop(now + 0.06);

        // LAYER 4: Confetti & Streamer Ejection Flutter (Paper & ribbons rushing through air)
        const flutterLen = Math.floor(this.ctx.sampleRate * 0.38);
        const flutterBuf = this.ctx.createBuffer(1, flutterLen, this.ctx.sampleRate);
        const flutterData = flutterBuf.getChannelData(0);
        for (let i = 0; i < flutterLen; i++) {
          const t = i / this.ctx.sampleRate;
          const flutterMod = 0.7 + 0.3 * Math.sin(2 * Math.PI * 26 * t);
          flutterData[i] = (Math.random() * 2 - 1) * Math.exp(-t / 0.1) * flutterMod;
        }
        const flutterSrc = this.ctx.createBufferSource();
        flutterSrc.buffer = flutterBuf;

        const flutterFilter = this.ctx.createBiquadFilter();
        flutterFilter.type = 'bandpass';
        flutterFilter.frequency.setValueAtTime(1800, now);
        flutterFilter.frequency.exponentialRampToValueAtTime(600, now + 0.38);
        flutterFilter.Q.value = 1.5;

        const flutterGain = this.ctx.createGain();
        flutterGain.gain.setValueAtTime(0.65, now);
        flutterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.38);

        flutterSrc.connect(flutterFilter);
        flutterFilter.connect(flutterGain);
        flutterGain.connect(this.ctx.destination);
        flutterSrc.start(now);
      };

      // Twin Cannon Blast: Left cannon at T=0, Right cannon at T=0.06s (60ms later)
      fireCannonBlast(0, 1.0);
      fireCannonBlast(0.06, 1.12);
    } catch (e) {}
  }

  // 2. Realistic Candle Blow / Breath Puff
  // Rich, audible, natural wind & breath exhale with flame extinction puff
  playBreathPuff() {
    this.ensureCtx();
    if (!this.ctx) return;

    const playSound = () => {
      try {
        const now = this.ctx.currentTime;
        const duration = 0.85;
        const sampleRate = this.ctx.sampleRate;
        const bufferSize = Math.floor(sampleRate * duration);
        const buffer = this.ctx.createBuffer(1, bufferSize, sampleRate);
        const data = buffer.getChannelData(0);

        // Multi-layered aerodynamic breath noise with natural turbulence
        let b0 = 0, b1 = 0, b2 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const t = i / sampleRate;
          const white = Math.random() * 2 - 1;
          b0 = 0.997 * b0 + white * 0.06;
          b1 = 0.985 * b1 + white * 0.12;
          b2 = 0.950 * b2 + white * 0.20;

          // Natural breath turbulence modulation
          const airTurbulence = 1.0 + 0.18 * Math.sin(2 * Math.PI * 14 * t);
          data[i] = (b0 + b1 + b2 + white * 0.4) * 0.45 * airTurbulence;
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        // Bandpass filter centered on human breath exhale (580Hz down to 320Hz)
        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(580, now);
        filter.frequency.exponentialRampToValueAtTime(320, now + duration);
        filter.Q.value = 1.2;

        // Lowpass filter to keep it warm and natural
        const lowpass = this.ctx.createBiquadFilter();
        lowpass.type = 'lowpass';
        lowpass.frequency.setValueAtTime(1400, now);
        lowpass.frequency.exponentialRampToValueAtTime(600, now + duration);

        // Volume envelope: smooth natural swell and exhale fade (healthy, audible gain!)
        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.85, now + 0.08);
        gain.gain.setValueAtTime(0.75, now + 0.35);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        noise.connect(filter);
        filter.connect(lowpass);
        lowpass.connect(gain);
        gain.connect(this.ctx.destination);

        // Low-end candle puff bass (the physical air rush blowing out the flame)
        const subPuff = this.ctx.createOscillator();
        const subGain = this.ctx.createGain();
        subPuff.type = 'sine';
        subPuff.frequency.setValueAtTime(160, now);
        subPuff.frequency.exponentialRampToValueAtTime(55, now + 0.25);

        subGain.gain.setValueAtTime(0.45, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        subPuff.connect(subGain);
        subGain.connect(this.ctx.destination);

        subPuff.start(now);
        subPuff.stop(now + 0.26);
        noise.start(now);
      } catch (e) {}
    };

    if (this.ctx.state === 'suspended') {
      this.ctx.resume().then(() => playSound()).catch(() => {});
    } else {
      playSound();
    }
  }

  // 3. Bat Swarm: Soft Flapping Whoosh
  playBatFlap() {
    this.ensureCtx();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const duration = 1.2;
      const bufferSize = Math.floor(this.ctx.sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        // Multi-frequency fluttering noise
        const t = i / this.ctx.sampleRate;
        const flutter = Math.sin(t * Math.PI * 18); // 9 flaps per second
        data[i] = (Math.random() * 2 - 1) * (0.4 + 0.6 * Math.max(0, flutter));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(250, now);
      filter.frequency.linearRampToValueAtTime(600, now + 0.6);
      filter.frequency.linearRampToValueAtTime(200, now + duration);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.3, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch (e) {}
  }

  // 4. Real Deep Thunder: rolling crack and rumble for Angry Batman NO
  playThunder() {
    this.ensureCtx();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const duration = 2.4;

      // Initial lightning crack snap
      const snapSize = Math.floor(this.ctx.sampleRate * 0.12);
      const snapBuf = this.ctx.createBuffer(1, snapSize, this.ctx.sampleRate);
      const snapData = snapBuf.getChannelData(0);
      for (let i = 0; i < snapSize; i++) {
        snapData[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.03));
      }
      const snapSource = this.ctx.createBufferSource();
      snapSource.buffer = snapBuf;
      const snapGain = this.ctx.createGain();
      snapGain.gain.setValueAtTime(0.65, now);
      snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      snapSource.connect(snapGain);
      snapGain.connect(this.ctx.destination);
      snapSource.start(now);

      // Deep rolling sub-bass rumble
      const rumbleSize = Math.floor(this.ctx.sampleRate * duration);
      const rumbleBuf = this.ctx.createBuffer(1, rumbleSize, this.ctx.sampleRate);
      const rumbleData = rumbleBuf.getChannelData(0);
      let last = 0;
      for (let i = 0; i < rumbleSize; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.03 * white) / 1.03;
        rumbleData[i] = last * 4.0;
      }

      const rumbleSource = this.ctx.createBufferSource();
      rumbleSource.buffer = rumbleBuf;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, now);
      filter.frequency.exponentialRampToValueAtTime(55, now + duration);

      const rumbleGain = this.ctx.createGain();
      rumbleGain.gain.setValueAtTime(0.7, now + 0.05);
      rumbleGain.gain.exponentialRampToValueAtTime(0.9, now + 0.25);
      rumbleGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      rumbleSource.connect(filter);
      filter.connect(rumbleGain);
      rumbleGain.connect(this.ctx.destination);
      rumbleSource.start(now);
    } catch (e) {}
  }

  // 5. Magical Chime / Sparkle Shimmer (YES button to Gifts transition)
  playMagicalChime() {
    this.ensureCtx();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      // Soft uplifting magical chime notes (pentatonic celestial arpeggio)
      const notes = [587.33, 659.25, 880.00, 1174.66, 1318.51, 1760.00]; // D5, E5, A5, D6, E6, A6
      notes.forEach((freq, idx) => {
        const noteTime = now + idx * 0.065;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteTime);

        gain.gain.setValueAtTime(0.12, noteTime);
        gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.45);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteTime);
        osc.stop(noteTime + 0.5);
      });
    } catch (e) {}
  }

  // 6. Soft Firework Pop (for trailing fireworks)
  playSoftFireworkPop() {
    this.ensureCtx();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const duration = 0.5;
      const bufferSize = Math.floor(this.ctx.sampleRate * duration);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.08));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(320, now);
      filter.frequency.exponentialRampToValueAtTime(80, now + duration);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch (e) {}
  }

  // Standard subtle click / UI pop for polaroids and modal
  playPop(freq = 600) {
    this.ensureCtx();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.1);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.11);
    } catch (e) {}
  }
}

// Export singleton instance
window.soundCtrl = new SoundController();
