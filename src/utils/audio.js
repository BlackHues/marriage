// Authentic Soothing Wedding BGM Audio Controller
class WeddingAudioPlayer {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.targetVolume = 0.8;
    this.currentVolume = 0.8;
    this.fadeInterval = null;
    this.listeners = new Set();
    this.initialized = false;
  }

  init() {
    if (this.initialized || typeof window === 'undefined') return;

    try {
      this.audio = new Audio('/wedding-bgm.mp3');
      this.audio.loop = true;
      this.audio.preload = 'auto';
      this.audio.volume = this.targetVolume;

      this.audio.addEventListener('play', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audio.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audio.addEventListener('error', (e) => {
        console.warn('Wedding audio error:', e);
        this.isPlaying = false;
        this.notify();
      });

      this.initialized = true;
    } catch (err) {
      console.warn('Could not initialize audio:', err);
    }
  }

  notify() {
    this.listeners.forEach((fn) => {
      try {
        fn({
          isPlaying: this.isPlaying,
          volume: this.currentVolume,
        });
      } catch (err) {
        console.error(err);
      }
    });
  }

  subscribe(listener) {
    this.listeners.add(listener);
    // Notify immediately with current state
    listener({
      isPlaying: this.isPlaying,
      volume: this.currentVolume,
    });
    return () => this.listeners.delete(listener);
  }

  play() {
    if (!this.initialized) {
      this.init();
    }
    if (!this.audio) return Promise.resolve(false);

    // If already playing and unpaused, keep playing
    if (this.isPlaying && !this.audio.paused) {
      return Promise.resolve(true);
    }

    clearInterval(this.fadeInterval);
    this.audio.volume = this.targetVolume;
    this.currentVolume = this.targetVolume;

    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      return playPromise
        .then(() => {
          this.isPlaying = true;
          this.notify();
          return true;
        })
        .catch((err) => {
          console.warn('Autoplay prevented or audio play error:', err);
          this.isPlaying = false;
          this.notify();
          return false;
        });
    }
    return Promise.resolve(true);
  }

  pause() {
    if (!this.audio) return;
    clearInterval(this.fadeInterval);
    this.audio.pause();
    this.isPlaying = false;
    this.notify();
  }

  toggle() {
    if (!this.initialized) {
      this.init();
    }
    if (this.isPlaying && this.audio && !this.audio.paused) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  setVolume(vol) {
    this.targetVolume = Math.max(0, Math.min(1, vol));
    if (this.audio) {
      this.audio.volume = this.targetVolume;
      this.currentVolume = this.targetVolume;
      this.notify();
    }
  }
}

export const weddingAudio = new WeddingAudioPlayer();
