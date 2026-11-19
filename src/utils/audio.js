// Authentic Soothing Wedding BGM Audio Controller
class WeddingAudioPlayer {
  constructor() {
    this.audio = null;
    this.isPlaying = false;
    this.targetVolume = 0.65;
    this.currentVolume = 0.65;
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

    // Smooth volume fade-in
    this.audio.volume = 0.05;
    const playPromise = this.audio.play();

    if (playPromise !== undefined) {
      return playPromise
        .then(() => {
          this.isPlaying = true;
          this.fadeIn(this.targetVolume, 1200);
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
    this.fadeOut(400, () => {
      if (this.audio) {
        this.audio.pause();
        this.isPlaying = false;
        this.notify();
      }
    });
  }

  toggle() {
    if (!this.initialized) {
      this.init();
    }
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  fadeIn(target = 0.65, duration = 1000) {
    if (!this.audio) return;
    clearInterval(this.fadeInterval);
    const stepTime = 50;
    const steps = duration / stepTime;
    const increment = (target - this.audio.volume) / steps;

    this.fadeInterval = setInterval(() => {
      if (!this.audio) {
        clearInterval(this.fadeInterval);
        return;
      }
      if (this.audio.volume + increment >= target) {
        this.audio.volume = target;
        this.currentVolume = target;
        clearInterval(this.fadeInterval);
      } else {
        this.audio.volume = Math.max(0, Math.min(1, this.audio.volume + increment));
        this.currentVolume = this.audio.volume;
      }
    }, stepTime);
  }

  fadeOut(duration = 400, onComplete) {
    if (!this.audio) {
      if (onComplete) onComplete();
      return;
    }
    clearInterval(this.fadeInterval);
    const stepTime = 40;
    const steps = duration / stepTime;
    const decrement = this.audio.volume / steps;

    this.fadeInterval = setInterval(() => {
      if (!this.audio) {
        clearInterval(this.fadeInterval);
        if (onComplete) onComplete();
        return;
      }
      if (this.audio.volume - decrement <= 0.05) {
        this.audio.volume = 0;
        this.currentVolume = 0;
        clearInterval(this.fadeInterval);
        if (onComplete) onComplete();
      } else {
        this.audio.volume = Math.max(0, this.audio.volume - decrement);
        this.currentVolume = this.audio.volume;
      }
    }, stepTime);
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
