// Gentle Web Audio API ambient singing bowl chime generator
// No external audio files needed; completely self-contained and peaceful.

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

  // Play a soft singing bowl bell chime
  public playChime() {
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      // Frequencies for a calm Tibetan Singing Bowl harmonic (F# tuning ~ 369.99 Hz + harmonics)
      const frequencies = [369.99, 740, 1110, 1480];
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
        gain.gain.exponentialRampToValueAtTime(0.00001, now + 4.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 4.6);
      });
    } catch {
      // Audio playback gracefully suppressed if user hasn't interacted
    }
  }

  // Toggle soft continuous meditative drone
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

        // Peaceful 432Hz ambient chord (Root, 5th, octave) with subtle LFO shimmer
        const notes = [216, 324, 432, 648];
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
