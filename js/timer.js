import Sounds from "./sounds.js";

export default function Timer({ minutesDisplay, secondsDisplay, controls }) {
  let idTimerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset(isFinished) {
    if(isFinished){
      minutes = 25;
    }
    updateDisplay(minutes, 0);
    clearTimeout(idTimerTimeOut);
  }

  function countDown() {
    idTimerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        reset(isFinished);
        Sounds().timeOut();
        controls.updateButtonState('reset');
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, seconds - 1);
      countDown();
    }, 1000);
  }

  function incrementMinutes(increment) {
    minutes += increment;
  }

  function decrementMinutes(decrement) {
    if (minutes <= 0) {
      controls.updateButtonState('decrementMinutesReachedLimit');
      return;
    }
    minutes -= decrement;
  }

  function getMinutes() {
    return minutes;
  }

  return {
    countDown,
    reset,
    updateDisplay,
    getMinutes,
    incrementMinutes,
    decrementMinutes
  };
}
