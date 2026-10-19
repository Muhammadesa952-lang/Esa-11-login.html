class Stopwatch {
  constructor() {
    this.startTime = 0;
    this.elapsedTime = 0;
    this.timerInterval = null;
    this.isRunning = false;
    this.laps = [];
  }

  start() {
    if (!this.isRunning) {
      this.startTime = Date.now() - this.elapsedTime;
      this.isRunning = true;
      console.log("Stopwatch started.");
    }
  }

  pause() {
    if (this.isRunning) {
      this.elapsedTime = Date.now() - this.startTime;
      this.isRunning = false;
      console.log("Stopwatch paused.");
    }
  }

  reset() {
    this.startTime = 0;
    this.elapsedTime = 0;
    this.isRunning = false;
    this.laps = [];
    console.log("Stopwatch reset.");
  }

  lap() {
    if (this.isRunning) {
      const currentElapsed = Date.now() - this.startTime;
      this.laps.push(currentElapsed);
      return currentElapsed;
    }
    return null;
  }

  getFormattedTime() {
    const time = this.isRunning
      ? Date.now() - this.startTime
      : this.elapsedTime;
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(milliseconds).padStart(2, "0")}`;
  }
}
