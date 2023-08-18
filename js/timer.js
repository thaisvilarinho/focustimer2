import Sounds from "./sounds.js";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
}) {
  let idTimerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  //falsy : 0 , ""
  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
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
        resetControls();
        updateDisplay();
        Sounds().timeEnd();
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

  function setMinutes(newMinutes) {
    minutes = newMinutes;
  }

  function getMinutes() {
    let newMinutes = prompt("Quantos minutos?");
    if (!newMinutes) {
      return false;
    }
    return newMinutes;
  }

  function hold() {
    clearTimeout(idTimerTimeOut);
  }

  return {
    countDown,
    reset,
    updateDisplay,
    setMinutes,
    getMinutes,
    hold,
  };
}
