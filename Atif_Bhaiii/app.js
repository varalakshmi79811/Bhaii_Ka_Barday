/**
 * ==========================================================================
 * POOKIE BATMAN BIRTHDAY WEBSITE - CONFIGURATION & LOGIC (V2)
 * ==========================================================================
 * 
 * Edit your content below without touching any of the website logic!
 */

const CONFIG = {
  // Friend Details
  friendName: "Atif",
  age: 23,

  // Media Paths
  introVideo: "photos/Car_drifting.mp4",
  finalVideo: "photos/final_video.mp4",

  // Interactive Text
  finalButtonText: "maro laddu kavala nayana?",

  // EXACTLY 5 GIFTS (Letters + 3-4 Polaroid Memories each)
  // If your photo file is missing, the site gracefully displays a stylish
  // Pookie Batman gradient card with the emoji and caption!
  gifts: [
    {
      id: 1,
      title: "Gift 1: The Dark Knight Rises",
      letter: `From Phani(AKAS🌝)\n\nAppiee birthuday raa Atif….. \n\nmay god bless u with many more besties like macha, manasa, meghana and so onnnnn\n\nMacha anthaa close kadhu neeku nenu kani koncham close ee anni naa feeling bcoz we share a bond that started by meghana\n\nJust remember we all (among us) grp is there for u and will be with u weather u r on the worng side or the right side of the battle \n\nMay god bless u with 100O years of life`,
      photos: [
        {
          src: "photos/Phani1.jpg",
          caption: "Day one energy 🔥",
          placeholderEmoji: "🦇",
          placeholderGradient: "linear-gradient(135deg, #1f1c2c, #928dab)"
        },
        {
          src: "photos/Phani2.jpg",
          caption: "Cruising Gotham 🏎️💨",
          placeholderEmoji: "🏎️",
          placeholderGradient: "linear-gradient(135deg, #ff416c, #ff4b2b)"
        },
        {
          src: "photos/Phani3.jpg",
          caption: "Certified duo 🤜🤛",
          placeholderEmoji: "👑",
          placeholderGradient: "linear-gradient(135deg, #f857a6, #ff5858)"
        }
      ]
    },
    {
      id: 2,
      title: "Gift 2: Midnight Drives & Wild Vibes",
      letter: `From Nikki(Soulful😁)\n\nHappy happy birthday atifff🎂. \n\nI hope you get everything you wish for 🤗.\n\nNi gurinchi cheppali ante from the starting of our bond adanta pakkana pedithe now we became very close like a family anuko 💜 hope it stays like that forever. Nuv ni besties tho sukam ga vundu. Alane nik nachinatu sukulu padu #male version of sukoladi, pics digu vatini chustu blush avvuuu🙂‍↔️ anandam ga vundu.\n\nIk you will be always there to listen to me whenever I need 🫡 this applies for you too mowaa u can always tell anything or ask anything to us (we have you 🤗 you have us) inthakanna chepte malla bestiee star pro ayipothav le kani chaluuu 😂😂\n\nSukam ga vundu mowaa manchiga kandalu penchi inka ammailani padai 😂 maku twaraga bhabi vastadi 🌝 Heheh any ways (ur girly girl to us in some cases that's too good mowaa i appreciate 😭)\n\nonce again be happie and happy happy birthday mowaaa🎀
`,
      photos: [
        {
          src: "photos/Nikki1.jpg",
          caption: "3 AM drift squad 🌙",
          placeholderEmoji: "🌃",
          placeholderGradient: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
        },
        {
          src: "photos/Nikki2.jpg",
          caption: "Unfiltered laughter 😂",
          placeholderEmoji: "⚡",
          placeholderGradient: "linear-gradient(135deg, #fa709a, #fee140)"
        },
        {
          src: "photos/Nikki3.jpg",
          caption: "Elite poses only 📸",
          placeholderEmoji: "🕶️",
          placeholderGradient: "linear-gradient(135deg, #30cfd0, #330867)"
        }
      ]
    },
    {
      id: 3,
      title: "Gift 3: The Brains & The Brawn",
      letter: `From Deek_Shit_a🙂‍↔️\n\nwishing you all the happiness, kandalu, protein, crush and LOTSSSS of love 🫶🫶🫶\nfrom being strangers to somehow becoming one of my closest friends\ndidn’t see this friendship coming at all, but ngl, chaala happy it happened 💗\n\nwill always be there to cheer, roast, laugh, enjoy and cry with you \nwill always give you my bicep to lean on 💪🤙\n\nbe as amazing, as weird, and as dramatic as you are nowww 💗\nfall in love , make mistakes, take stupid decisions and you’ll still see us cheering you with the biggest and brightest smiles🫶🫶\n\n🌷💗🤙💪🫶🍗🏋️‍♂️🧑‍💻
`,
      photos: [
        {
          src: "photos/Deek1.jpg",
          caption: "Main character vibes 🌟",
          placeholderEmoji: "💎",
          placeholderGradient: "linear-gradient(135deg, #b224ef, #7579ff)"
        },
        {
          src: "photos/Deek2.jpg",
          caption: "Food hunts 🍕🍔",
          placeholderEmoji: "🍕",
          placeholderGradient: "linear-gradient(135deg, #f12711, #f5af19)"
        },
        {
          src: "photos/Deek3.jpg",
          caption: "Bro for life 🛡️",
          placeholderEmoji: "🎀",
          placeholderGradient: "linear-gradient(135deg, #ff758c, #ff7eb3)"
        }
      ]
    },
    {
      id: 4,
      title: "Gift 4: Unmatched Chaos",
      letter: `From Varam(Living Legend😎)\n\nYappieee yappieee barthaday ra atifuuu❤️🕺🥁💥😎\n\nNoorellu sallaga, thellaga, anandhamga, arogyamga, sukham ga, badhyathaga, nee family 1 & 2(adhi meme) tho undalani, alane nuvvu anukunnate prathi yr nee bd ki Kalisi celebrate chesukovali ani, neku nachinattugane memu celebrate cheyalani ahh shivayyaki, yesayyaki, allahki na chinna manavi 🙏🙌🤲.\n\nAla ela modalaindho telvadh kani mana prndshipuu, anandhamtho modalai, naa pichiki nuvvu bhali ayyi, tharavatha nee potti breakup lo Neku mathi chedi, appati varaku side character ayina nuvvu.. jaiiiii📈 Anukunta main focus ayyi grp lo.... Bestie star⭐ position thesukoni, firstu abbaila gundelni kajesi, next mellaga andhari gundeleni nee manchithanitho padesi, madhyalo manam ala chinna chinna tufan lu choosi, oka chinna arugula pathivrathala grp ni shrushtinchoni, ala nee anni phases lo unandhuku yappieee and proud of my self 😏😂. Ala nee anandalalo, badhalalo, godavalalo, pichilo ala gudisipotha... Inka gadusthunandhuku, inka gudustha eppatiki gadavali hai.\n\nJust ala alochistha gurthu came... the reason behind our padava is tea chukka(adhi nadhe), ala inka chala tealu manam thagukuntuu..... manam kottukuntuu... Nenu ninnu gichukuntuu..... Nee life lo jarigevi naku cheputhuu... Nee pandagalaki mammalini pilusthuu... Memu nee biryani mesthuu... Nee g ni kuncham gadhuputhuu.... Jeevitham lo nee kashtam lo profits lo panchukuntuu🌝... Nalugu mingulu eppudu nuvvu nanunchi thintuuu undali, nee wife naku nachinavi vandali, nenu bagaa thinaliii😎🙂‍↔️😁\n\nChalu ee jeevithaniki chalu. Inthakanna em kavali. Kani oka mata mathram nuvvu oppukovali, mera kandas, needhi kante ekkuva ani, final ga inka okkati cheppedhi enti ante... naku unnai kandass💪, neku nenu untanu andass🫂.\n\nDiwali ki kalustharu mathabuuu🧨.... Yappiee birthday ra saibuuu🌙`,
      photos: [
        {
          src: "photos/Varam1.jpg",
          caption: "Caught off guard 💀",
          placeholderEmoji: "🤣",
          placeholderGradient: "linear-gradient(135deg, #43e97b, #38f9d7)"
        },
        {
          src: "photos/Varam2.jpg",
          caption: "Golden hour glow ✨",
          placeholderEmoji: "🌅",
          placeholderGradient: "linear-gradient(135deg, #fa709a, #fee140)"
        },
        {
          src: "photos/Varam3.jpg",
          caption: "Secret handshake 🤙",
          placeholderEmoji: "🔥",
          placeholderGradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)"
        }
      ]
    },
    {
      id: 5,
      title: "Gift 5: The Grand Wish",
      letter: `From Anoooppuuuuu(AKAS🌝)\n\nAotifffffff\nWatermelon\nNorth nibba\n\nBestie star \nDhinithone anukunta nenu neeku name ivvadam start cheyadam jarigindhi\nAsalu ela kalisam ante time table antava maybe yes adhi kuda nee meghana vallane Okok\nTharvatha Manasa vochina\nMacha vochina\nEntha mandhi vochina \nOka chinna sthanam naaku \nIchinandhuku entho runa padi unta\n\nIppati varaku naaku thelisinanathavaraku only group lo three girls anukunna but you made it wrong you are the fourth\nAbbayilu kuda intha andham gaa untaru ani nannu choosaka thelisindhi kaani\nAbbayilu kuda alugutharu ani ninnu choosake  thelisindhi\n😂😂\nNuvvu kuda andham gaa untav le 😏\n\nAa dialogue ki apt raa nuvvu \n“Sokuladi Swapna sundhari”\n\nYou were there with me in happy moments, normal moments which turned into great moments \n, sad times and confusions \nYou held my hand when I am going wrong, when I want to make correct decisions you are there,\nAtif unnadu le ani point or dhayiram came\n\nI think you are the second person  like thelisina person vere ooriki velthunte manasulo oka feel vasthadhi miss avuthunna ani\nMaybe i said that one to you when you are going to Chennai\n\nSometimes konni points nachavu nee dheggara like cheyala ippudu, thiragala ippudu anattu\nBut anni sarlu ante chirak vasthadhi adhi okati set chesuko\nKastha biryani lu Kodhiga ekkuva pampistha unte chaala manchidhi\n\nYou are the family man\nBestie man\nInspiring man(body, grooming and hardworking)\nKastapadathav Baaga and you want instant result choosuko adhi wait chey Kodhiga\nYou will be there\n\nEppudaina naa valla you felt bad ayithe sorry aa\nInka ekkuva bad feel chestha\n\nInka Dhiniki minchi ante \nYou are a brother from another mother \n\nI am just at your call\nJust call if you feel low anytime\nMaybe I can’t be with you in happy times but I promise that I won’t leave in your tough times\n\nAt last\nJanma dhin subhakanksh hei🫂❤️\n\nPuchakaya puchakaya pedhavi thipi naaku  ichukova ichukova🕺🕺
`,
      photos: [
        {
          src: "photos/Anoop1.jpg",
          caption: "Year 23 starts now! 🎂",
          placeholderEmoji: "🎉",
          placeholderGradient: "linear-gradient(135deg, #ff0844, #ffb199)"
        },
        {
          src: "photos/Anoop2.jpg",
          caption: "Pure joy 😁",
          placeholderEmoji: "💫",
          placeholderGradient: "linear-gradient(135deg, #f6d365, #fda085)"
        },
        {
          src: "photos/Anoop3.jpg",
          caption: "To the future! 🚀",
          placeholderEmoji: "❤️",
          placeholderGradient: "linear-gradient(135deg, #f093fb, #f5576c)"
        }
      ]
    }
  ]
};

/**
 * ==========================================================================
 * APPLICATION CONTROLLER
 * ==========================================================================
 */

class AppController {
  constructor() {
    this.currentScene = 1; // Opens directly on Scene 1 (Intro Video)
    this.openedGifts = new Set();
    this.isCandlesBlown = false;
    this.micStream = null;
    this.audioContext = null;
    this.analyser = null;
    this.micInterval = null;
    this.isMuted = false;
    this.typewriterTimer = null;
    this.hasPlayedLadduAudio = false;

    // Scenes (1 to 5)
    this.scenes = {
      1: document.getElementById('scene-1'),
      2: document.getElementById('scene-2'),
      3: document.getElementById('scene-3'),
      4: document.getElementById('scene-4'),
      5: document.getElementById('scene-5')
    };

    this.reloadLogoBtn = document.getElementById('btn-reload-logo');

    // Scene 1 Intro Video
    this.introVideo = document.getElementById('intro-video-player');

    // Scene 2 Cake
    this.cakeBox = document.getElementById('cake-box');
    this.cakeImg = document.getElementById('cake-img');
    this.smokeLayer = document.getElementById('smoke-layer');
    this.blowBtn = document.getElementById('btn-blow-candles');
    this.micBadge = document.getElementById('mic-status-badge');
    this.cakeInstruction = document.getElementById('cake-instruction-text');

    // Scene 3 Batman
    this.batmanImg = document.getElementById('batman-character-img');
    this.batmanBubble = document.getElementById('batman-bubble');
    this.btnBatmanYes = document.getElementById('btn-batman-yes');
    this.btnBatmanNo = document.getElementById('btn-batman-no');
    this.btnTryAgain = document.getElementById('btn-try-again');
    this.lightningFlash = document.getElementById('lightning-flash');

    // Scene 4 Gifts
    this.giftGrid = document.getElementById('gift-grid');
    this.finalSurpriseWrapper = document.getElementById('final-surprise-wrapper');
    this.btnFinalSurprise = document.getElementById('btn-final-surprise');
    this.giftModal = document.getElementById('gift-modal');
    this.modalLetter = document.getElementById('modal-letter-content');
    this.modalGallery = document.getElementById('modal-memories-gallery');
    this.btnCloseModal = document.getElementById('btn-close-modal');

    // Lightbox
    this.lightboxModal = document.getElementById('lightbox-modal');
    this.lightboxImg = document.getElementById('lightbox-img');
    this.lightboxCaption = document.getElementById('lightbox-caption');
    this.lightboxFallback = document.getElementById('lightbox-fallback');
    this.btnCloseLightbox = document.getElementById('btn-close-lightbox');

    // Scene 5 Finale
    this.finalVideoContainer = document.getElementById('final-video-container');
    this.finalVideoPlayer = document.getElementById('final-video-player');
    this.finalVideoFallback = document.getElementById('final-video-fallback');
    this.btnBackToGifts = document.getElementById('btn-back-to-gifts');
  }

  init() {
    // 0. Ensure clean initial state
    this.currentScene = 1;
    this.introInteractionHandler = null;

    // Strictly ensure final video is paused and at 0:00 on initialization
    if (this.finalVideoPlayer) {
      this.finalVideoPlayer.pause();
      this.finalVideoPlayer.currentTime = 0;
    }
    window.soundCtrl.stopCurrentDialogue();

    // 1. Initialize FX Engine
    window.fxEngine.init('confetti-canvas', 'fireworks-canvas');

    // 2. Setup Config Texts
    if (this.btnFinalSurprise) {
      this.btnFinalSurprise.innerHTML = `${CONFIG.finalButtonText} 💖`;
    }

    // 3. Render Scene 4 Gifts
    this.renderGiftBoxes();

    // 4. Attach Event Listeners
    this.attachEvents();

    // 5. Cleanly enter Scene 1
    this.goToScene(1, 'none');
  }

  // ================= SCENE SWITCHING ================= //
  goToScene(targetIndex, transitionType = 'none') {
    if (targetIndex === this.currentScene && targetIndex !== 4) return;

    // Cleanup when leaving Scene 1 (Intro Video)
    if (this.currentScene === 1 && targetIndex !== 1) {
      if (this.introVideo) {
        this.introVideo.pause();
      }
      if (this.introInteractionHandler) {
        ['pointerdown', 'touchstart', 'click', 'keydown'].forEach(evt => {
          document.removeEventListener(evt, this.introInteractionHandler);
        });
        this.introInteractionHandler = null;
      }
    }

    // Cleanup when leaving Scene 5 (Final Video)
    if (this.currentScene === 5 && targetIndex !== 5) {
      if (this.finalVideoPlayer) {
        this.finalVideoPlayer.pause();
        this.finalVideoPlayer.currentTime = 0;
      }
    }

    // Stop voice dialogues when leaving Batman decision (except when proceeding to Scene 4 where Brahmi.mp3 finishes playing)
    if (this.currentScene === 3 && targetIndex !== 3 && targetIndex !== 4) {
      window.soundCtrl.stopCurrentDialogue();
    }

    Object.keys(this.scenes).forEach(key => {
      const s = this.scenes[key];
      if (s) {
        s.classList.remove('active');
      }
    });

    const toScene = this.scenes[targetIndex];
    if (toScene) {
      toScene.classList.add('active');
    }

    this.currentScene = targetIndex;
    this.onSceneEntered(targetIndex);
  }

  onSceneEntered(sceneIndex) {
    if (sceneIndex === 1) {
      this.playIntroVideo();
    } else if (sceneIndex === 2) {
      this.startMicBlowDetection();
    } else if (sceneIndex === 3) {
      this.stopMicBlowDetection();
      // Play Choodalani_undhi.mp3 when the Batman page is displayed!
      window.soundCtrl.playChoodalani();
    } else if (sceneIndex === 4) {
      this.triggerGiftsEntrance();
    } else if (sceneIndex === 5) {
      this.playFinalVideoDirectly();
    }
  }

  // ================= SCENE 1: INTRO VIDEO ================= //
  playIntroVideo() {
    if (!this.introVideo) return;
    if (this.currentScene !== 1) return; // Strict guard: only play if in Scene 1!

    window.soundCtrl.init();

    // 1. Configure video to be 100% unmuted with full volume
    this.introVideo.muted = false;
    this.introVideo.defaultMuted = false;
    this.introVideo.volume = 1.0;
    this.introVideo.playsInline = true;

    const playWithAudio = () => {
      if (!this.introVideo || this.currentScene !== 1) return;
      this.introVideo.muted = false;
      this.introVideo.defaultMuted = false;
      this.introVideo.volume = 1.0;
      this.introVideo.currentTime = 0;
      this.introVideo.play().catch(e => console.warn('Playback error:', e));
    };

    // Clean up any existing interaction listener
    if (this.introInteractionHandler) {
      ['pointerdown', 'touchstart', 'click', 'keydown'].forEach(evt => {
        document.removeEventListener(evt, this.introInteractionHandler);
      });
      this.introInteractionHandler = null;
    }

    // 2. Attempt unmuted playback directly on page load
    const playPromise = this.introVideo.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log('Intro video playing with audio automatically!');
        })
        .catch((err) => {
          console.warn('Browser autoplay policy blocked unmuted sound:', err);
          if (this.currentScene !== 1) return;

          // Never play muted in background! Pause at 0:00.
          this.introVideo.pause();
          this.introVideo.currentTime = 0;
          this.introVideo.muted = false;
          this.introVideo.defaultMuted = false;

          // Start with audio on first interaction, ONLY IF STILL IN SCENE 1
          this.introInteractionHandler = () => {
            if (this.introInteractionHandler) {
              ['pointerdown', 'touchstart', 'click', 'keydown'].forEach(evt => {
                document.removeEventListener(evt, this.introInteractionHandler);
              });
              this.introInteractionHandler = null;
            }
            window.soundCtrl.init();
            if (this.currentScene === 1) {
              playWithAudio();
            }
          };

          ['pointerdown', 'touchstart', 'click', 'keydown'].forEach(evt => {
            document.addEventListener(evt, this.introInteractionHandler, { once: true, passive: true });
          });
        });
    }
  }

  transitionVideoToCake() {
    if (this.introVideo) this.introVideo.pause();

    // Item 3: Party Popper cannon wipe from both bottom corners
    window.fxEngine.fireDualPartyPoppers(() => {
      // Wipes video away and reveals cake scene
      this.goToScene(2, 'none');
    });
  }

  // ================= SCENE 2: CAKE & BLOW ================= //
  startMicBlowDetection() {
    // Disabled to prevent automatic false-triggers from ambient room noise or mic sensitivity.
    // Candles now blow strictly upon tapping the "Tap to blow 🕯️" button.
  }

  stopMicBlowDetection() {
    if (this.micInterval) {
      cancelAnimationFrame(this.micInterval);
      this.micInterval = null;
    }
    if (this.micStream) {
      this.micStream.getTracks().forEach(track => track.stop());
      this.micStream = null;
    }
    if (this.audioContext && this.audioContext.state !== 'closed') {
      this.audioContext.close().catch(() => { });
      this.audioContext = null;
    }
  }

  triggerBlowCandles() {
    if (this.isCandlesBlown) return;
    this.isCandlesBlown = true;
    this.stopMicBlowDetection();

    // Natural breath puff sound
    window.soundCtrl.playBreathPuff();

    // Smoke Layer & Cross-fade to cake_blown
    if (this.smokeLayer) this.smokeLayer.classList.add('active');
    if (this.cakeBox) this.cakeBox.classList.add('is-blown');

    if (this.cakeInstruction) {
      this.cakeInstruction.innerHTML = "✨ Wish Made! 🌟";
    }
    if (this.blowBtn) {
      this.blowBtn.style.display = 'none';
    }
    if (this.micBadge) {
      this.micBadge.style.display = 'none';
    }

    // Transition to Batman page after smoke rises (1.4s)
    setTimeout(() => {
      window.fxEngine.launchBatSwarm(
        () => {
          this.goToScene(3, 'none');
        },
        () => { }
      );
    }, 1400);
  }

  // ================= SCENE 3: BATMAN DECISION ================= //
  handleAngryBatman() {
    // 2) When click on NO, play "angry_dial.mp3" instead of thunder sound
    window.soundCtrl.playAngryDial();

    if (this.lightningFlash) {
      this.lightningFlash.classList.remove('lightning-strike');
      void this.lightningFlash.offsetWidth;
      this.lightningFlash.classList.add('lightning-strike');
    }

    const scene3 = this.scenes[3];
    if (scene3) {
      scene3.classList.remove('shake-screen');
      void scene3.offsetWidth;
      scene3.classList.add('shake-screen');
      setTimeout(() => scene3.classList.remove('shake-screen'), 600);
    }

    if (this.batmanImg) {
      this.batmanImg.src = 'photos/Angry_batman.png';
      this.batmanImg.classList.remove('batman-happy');
      this.batmanImg.classList.add('batman-angry');
    }

    if (this.batmanBubble) {
      this.batmanBubble.textContent = "Excuse me?! 😠💥 How dare you!";
      this.batmanBubble.classList.add('angry');
    }

    if (this.btnBatmanYes) this.btnBatmanYes.style.display = 'none';
    if (this.btnBatmanNo) this.btnBatmanNo.style.display = 'none';
    if (this.btnTryAgain) this.btnTryAgain.style.display = 'inline-flex';
  }

  resetHappyBatman() {
    window.soundCtrl.stopCurrentDialogue();
    if (this.batmanImg) {
      this.batmanImg.src = 'photos/Happy_batman.png';
      this.batmanImg.classList.remove('batman-angry');
      this.batmanImg.classList.add('batman-happy');
    }

    if (this.batmanBubble) {
      this.batmanBubble.textContent = "Want to see what's next? 🦇🎀";
      this.batmanBubble.classList.remove('angry');
    }

    if (this.btnBatmanYes) this.btnBatmanYes.style.display = 'inline-flex';
    if (this.btnBatmanNo) this.btnBatmanNo.style.display = 'inline-flex';
    if (this.btnTryAgain) this.btnTryAgain.style.display = 'none';
  }

  handleYesToGifts() {
    // 3) If clicked on YES, play "Brahmi.mp3"
    window.soundCtrl.playBrahmi();

    // Happy Batman does a happy hop
    if (this.batmanImg) {
      this.batmanImg.classList.add('batman-hopping');
    }

    // Burst of golden-pink sparkles expanding from him
    const rect = this.batmanImg ? this.batmanImg.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0, height: 0 };
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    window.fxEngine.burstMagicalSparkles(cx, cy);

    // Switch to Scene 4 and float up boxes
    setTimeout(() => {
      this.goToScene(4, 'none');
    }, 600);
  }

  // ================= SCENE 4: GIFTS ================= //
  renderGiftBoxes() {
    if (!this.giftGrid) return;
    this.giftGrid.innerHTML = '';

    CONFIG.gifts.forEach((gift, index) => {
      const card = document.createElement('div');
      card.className = 'gift-card';
      card.dataset.index = index;

      card.innerHTML = `
        <div class="sparkle-dot" style="top: 10%; left: 15%; animation-delay: ${index * 0.4}s;"></div>
        <div class="sparkle-dot" style="top: 25%; right: 12%; animation-delay: ${index * 0.6}s;"></div>
        <img src="photos/gift_box.png" alt="Gift ${index + 1}" class="gift-box-img blend-pure-black">
        <div class="opened-badge">✔ Opened</div>
      `;

      card.addEventListener('click', (e) => {
        this.openGiftBox(index, card, e);
      });

      this.giftGrid.appendChild(card);
    });
  }

  triggerGiftsEntrance() {
    // Item 9: Five gift boxes float up from the bottom one after another
    if (!this.giftGrid) return;
    const cards = this.giftGrid.querySelectorAll('.gift-card');
    cards.forEach((card, idx) => {
      card.classList.remove('entering');
      card.style.animationDelay = `${idx * 0.14}s`;
      void card.offsetWidth;
      card.classList.add('entering');
    });
  }

  openGiftBox(index, cardEl) {
    const giftData = CONFIG.gifts[index];
    if (!giftData) return;

    // 4) For each gift box, play "lord1.mp3", "lord2.mp3" ... "lord5.mp3"
    window.soundCtrl.playLord(index);

    cardEl.classList.add('box-bursting');
    const rect = cardEl.getBoundingClientRect();
    window.fxEngine.burstBoxSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);

    setTimeout(() => {
      cardEl.classList.remove('box-bursting');
    }, 500);

    this.openedGifts.add(index);
    cardEl.classList.add('opened');

    // Populate 90% wide landscape modal
    if (this.modalLetter) {
      this.revealLetter(giftData.letter, this.modalLetter);
    }

    if (this.modalGallery) {
      this.modalGallery.innerHTML = '';
      giftData.photos.forEach((photo, pIdx) => {
        const polaroid = document.createElement('div');
        polaroid.className = 'polaroid-card';
        polaroid.style.animationDelay = `${pIdx * 0.12 + 0.08}s`;

        polaroid.innerHTML = `
          <div class="washi-tape"></div>
          <div class="polaroid-img-box" style="background: ${photo.placeholderGradient}">
            <div class="polaroid-fallback-graphic">${photo.placeholderEmoji}</div>
            <img class="polaroid-img" src="${photo.src}" alt="${photo.caption}" 
                 onerror="this.style.display='none';" 
                 onload="this.previousElementSibling.style.display='none';">
          </div>
          <div class="polaroid-caption">${photo.caption}</div>
        `;

        polaroid.addEventListener('click', () => {
          this.openLightbox(photo);
        });

        this.modalGallery.appendChild(polaroid);
      });
    }

    if (this.giftModal) {
      this.giftModal.classList.add('active');
      const scrollWrapper = this.giftModal.querySelector('.letter-scroll-wrapper');
      if (scrollWrapper) {
        scrollWrapper.scrollTop = 0;
      }
    }

    // 5) Check if ALL 5 boxes opened to reveal 'maro laddu kavala nayana' button
    if (this.openedGifts.size === CONFIG.gifts.length) {
      if (this.finalSurpriseWrapper) {
        this.finalSurpriseWrapper.classList.add('revealed');
      }
      if (!this.giftModal || !this.giftModal.classList.contains('active')) {
        if (!this.hasPlayedLadduAudio) {
          this.hasPlayedLadduAudio = true;
          setTimeout(() => {
            window.soundCtrl.playLadduKavala();
          }, 350);
        }
      }
    }
  }

  revealLetter(text, element) {
    if (this.typewriterTimer) {
      clearInterval(this.typewriterTimer);
      this.typewriterTimer = null;
    }

    element.textContent = '';
    let charIndex = 0;
    const length = text.length;
    const stepTime = Math.max(10, Math.floor(1600 / length));

    this.typewriterTimer = setInterval(() => {
      if (charIndex < length) {
        element.textContent += text.substr(charIndex, 3);
        charIndex += 3;
      } else {
        element.textContent = text;
        clearInterval(this.typewriterTimer);
        this.typewriterTimer = null;
      }
    }, stepTime);

    element.onclick = () => {
      if (this.typewriterTimer) {
        clearInterval(this.typewriterTimer);
        this.typewriterTimer = null;
        element.textContent = text;
      }
    };
  }

  closeGiftModal() {
    if (this.typewriterTimer) {
      clearInterval(this.typewriterTimer);
      this.typewriterTimer = null;
    }
    if (this.giftModal) {
      this.giftModal.classList.remove('active');
    }

    // 5) When all gifts are completed and modal closes to reveal 'maro laddu kavala nayana', play laddu_kavala.mp3!
    if (this.openedGifts.size === CONFIG.gifts.length && !this.hasPlayedLadduAudio) {
      this.hasPlayedLadduAudio = true;
      setTimeout(() => {
        window.soundCtrl.playLadduKavala();
      }, 350);
    }
  }

  openLightbox(photo) {
    if (!this.lightboxModal) return;

    this.lightboxCaption.textContent = photo.caption;

    if (this.lightboxFallback) {
      this.lightboxFallback.style.display = 'none';
      this.lightboxFallback.style.background = photo.placeholderGradient;
      this.lightboxFallback.textContent = photo.placeholderEmoji;
    }

    if (this.lightboxImg) {
      this.lightboxImg.style.display = 'block';
      this.lightboxImg.src = photo.src;

      this.lightboxImg.onerror = () => {
        this.lightboxImg.style.display = 'none';
        if (this.lightboxFallback) this.lightboxFallback.style.display = 'flex';
      };

      this.lightboxImg.onload = () => {
        this.lightboxImg.style.display = 'block';
        if (this.lightboxFallback) this.lightboxFallback.style.display = 'none';
      };
    }

    this.lightboxModal.classList.add('active');
  }

  closeLightbox() {
    if (this.lightboxModal) {
      this.lightboxModal.classList.remove('active');
    }
  }

  // ================= SCENE 5: FINAL VIDEO (DIRECT PLAY) ================= //
  playFinalVideoDirectly() {
    window.soundCtrl.stopCurrentDialogue();

    if (this.finalVideoContainer) {
      this.finalVideoContainer.style.display = 'flex';
      this.finalVideoContainer.style.opacity = '1';
    }

    if (this.finalVideoPlayer) {
      this.finalVideoPlayer.style.display = 'block';
      if (this.finalVideoFallback) this.finalVideoFallback.style.display = 'none';

      const videoSrc = CONFIG.finalVideo || 'photos/final_video.mp4';
      if (!this.finalVideoPlayer.src || !this.finalVideoPlayer.src.includes('final_video.mp4')) {
        this.finalVideoPlayer.src = videoSrc;
      }
      this.finalVideoPlayer.currentTime = 0;
      this.finalVideoPlayer.muted = false;
      this.finalVideoPlayer.defaultMuted = false;
      this.finalVideoPlayer.volume = 1.0;

      const playPromise = this.finalVideoPlayer.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          console.warn('Playback error on final video:', e);
        });
      }

      this.finalVideoPlayer.onended = () => {
        if (document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
      };
    }
  }

  // ================= EVENT HANDLERS ================= //
  attachEvents() {
    // Batman Cowl Face Logo: full reload to restart mission from the very beginning
    if (this.reloadLogoBtn) {
      this.reloadLogoBtn.addEventListener('click', () => {
        if (this.introVideo) {
          this.introVideo.pause();
          this.introVideo.currentTime = 0;
        }
        if (this.finalVideoPlayer) {
          this.finalVideoPlayer.pause();
          this.finalVideoPlayer.currentTime = 0;
        }
        window.soundCtrl.stopCurrentDialogue();
        window.location.reload();
      });
    }

    // Scene 1: Video Ended
    if (this.introVideo) {
      this.introVideo.addEventListener('ended', () => {
        this.transitionVideoToCake();
      });
    }

    // Scene 2: Cake Blow Button
    if (this.blowBtn) {
      this.blowBtn.addEventListener('click', () => {
        window.soundCtrl.ensureCtx();
        this.triggerBlowCandles();
      });
    }
    if (this.cakeBox) {
      this.cakeBox.style.cursor = 'pointer';
      this.cakeBox.addEventListener('click', () => {
        window.soundCtrl.ensureCtx();
        this.triggerBlowCandles();
      });
    }

    // Scene 3: Batman Decision
    if (this.btnBatmanYes) {
      this.btnBatmanYes.addEventListener('click', () => {
        this.handleYesToGifts();
      });
    }

    if (this.btnBatmanNo) {
      this.btnBatmanNo.addEventListener('click', () => {
        this.handleAngryBatman();
      });
    }

    if (this.btnTryAgain) {
      this.btnTryAgain.addEventListener('click', () => {
        this.resetHappyBatman();
      });
    }

    // Scene 4: Final Button -> Direct to Final Video
    if (this.btnFinalSurprise) {
      this.btnFinalSurprise.addEventListener('click', () => {
        this.goToScene(5, 'none');
      });
    }

    // Scene 4 Modal: Close
    if (this.btnCloseModal) {
      this.btnCloseModal.addEventListener('click', () => {
        this.closeGiftModal();
      });
    }

    // Lightbox Close
    if (this.btnCloseLightbox) {
      this.btnCloseLightbox.addEventListener('click', () => {
        this.closeLightbox();
      });
    }
    if (this.lightboxModal) {
      this.lightboxModal.addEventListener('click', (e) => {
        if (e.target === this.lightboxModal) {
          this.closeLightbox();
        }
      });
    }

    // Scene 5: Back to Gifts button (Always available)
    if (this.btnBackToGifts) {
      this.btnBackToGifts.addEventListener('click', () => {
        if (this.finalVideoPlayer) {
          this.finalVideoPlayer.pause();
          this.finalVideoPlayer.currentTime = 0;
        }
        this.goToScene(4, 'none');
      });
    }

    const btnFallbackBack = document.getElementById('btn-fallback-back-to-gifts');
    if (btnFallbackBack) {
      btnFallbackBack.addEventListener('click', () => {
        this.goToScene(4, 'none');
      });
    }
  }
}

// Start application immediately
window.app = new AppController();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.app.init();
  });
} else {
  window.app.init();
}
