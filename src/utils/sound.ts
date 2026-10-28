// Gentle Web Audio API 528 Hz Solfeggio Meditation Tone & Singing Bowl Chime Generator
// Tuned precisely to 528 Hz (The Solfeggio "Miracle / Love Frequency")
// Completely self-contained, peaceful, and runs smoothly on all browsers.

class SanctuaryAudio {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a soft singing bowl bell chime tuned to 528 Hz Solfeggio frequency
  public playChime() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // 528 Hz Solfeggio miracle frequency and its acoustic harmonics
      const frequencies = [528, 1056, 1584, 2112];
      const gains = [0.12, 0.04, 0.02, 0.01];

      frequencies.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        // Gentle envelope: soft attack, long decaying release
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(gains[idx], now + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + 4.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 4.9);
      });
    } catch {
      // Audio playback gracefully suppressed if user hasn't interacted
    }
  }

  // Toggle soft continuous 528 Hz Solfeggio meditative drone
  public toggleAmbient(onStateChange?: (playing: boolean) => void): boolean {
    try {
      this.initContext();
      if (!this.ctx) return false;

      if (this.isPlaying) {
        // Fade out
        if (this.masterGain) {
          const now = this.ctx.currentTime;
          this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
          setTimeout(() => {
            this.oscillators.forEach(osc => osc.stop());
            this.oscillators = [];
            this.isPlaying = false;
            if (onStateChange) onStateChange(false);
          }, 1200);
        }
        return false;
      } else {
        const now = this.ctx.currentTime;
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.0001, now);
        this.masterGain.gain.exponentialRampToValueAtTime(0.035, now + 2.0);
        this.masterGain.connect(this.ctx.destination);

        // Peaceful 528 Hz Solfeggio harmonic chord:
        // 132 Hz (deep grounding sub-bass)
        // 264 Hz (lower octave warmth)
        // 528 Hz (fundamental Solfeggio Miracle Frequency)
        // 792 Hz (harmonic 5th)
        // 1056 Hz (gentle shimmering upper octave)
        const notes = [132, 264, 528, 792, 1056];
        this.oscillators = notes.map((freq) => {
          const osc = this.ctx!.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);
          osc.connect(this.masterGain!);
          osc.start(now);
          return osc;
        });

        this.isPlaying = true;
        if (onStateChange) onStateChange(true);
        return true;
      }
    } catch {
      return false;
    }
  }

  public getStatus() {
    return this.isPlaying;
  }
}

export const sanctuaryAudio = new SanctuaryAudio();
