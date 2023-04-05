class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    if (!this.currentTime) {
      return 0;
    } else {
      return Math.floor(this.currentTime / 60);
    }
  }

  getSeconds() {
    if (!this.currentTime) {
      return 0;
    } else {
    }
    return Math.floor(this.currentTime % 60);
  }

  computeTwoDigitNumber(value) {
    if (value < 15) {
      return 0 + value.toString();
    } else {
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime=0;
  }

  split() {
let formatTime= this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
return formatTime;
}
}
console.log(split(formatTime));