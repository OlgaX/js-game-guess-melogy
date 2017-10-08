import AbstractView from '../abstract.view';

export default class GameTimer extends AbstractView {
  constructor(startTime) {
    super();
    if (startTime >= 0) {
      this.formatTime(startTime);
      GameTimer.time = this.startTimer(startTime);
      this.templateToggle(`.main-timer`);
    }
  }

  get template() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
      cx="390" cy="390" r="370"
      class="timer-line"
      style="filter: url("../view#blur"); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
      <span class="timer-value-mins">${this.minutes}</span><!--
      --><span class="timer-value-dots">:</span><!--
      --><span class="timer-value-secs">${this.seconds}</span>
      </div>
    </svg>
  `;
  }

  startTimer(time) {
    let timerFunc = () => {
      if (time) {
        time--;
        new GameTimer(time);
      }
    };
    GameTimer.timer = setTimeout(timerFunc, 1000);
    return time;
  }

  formatTime(time) {
    const secNum = parseInt(time, 10);
    let hours = Math.floor(secNum / 3600);
    let minutes = Math.floor((secNum - (hours * 3600)) / 60);
    let seconds = secNum - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    this.minutes = minutes;
    this.seconds = seconds;
  }
}
