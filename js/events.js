import {
  buttonPlay,
  buttonStop,
  buttonIncrementMinutes,
  buttonDecrementMinutes,
  soundButtonForest,
  soundButtonRain,
  soundButtonCafe,
  soundButtonFireplace,  
} from "./elements.js";

export default function ({ sounds, timer, controls }) {
  buttonPlay.addEventListener("click", function () {
    controls.updateButtonState("buttonPlayPressed");
    sounds.pressButton();
    timer.countDown();
  });

  buttonStop.addEventListener("click", function () {
    controls.updateButtonState("buttonPlayPressed");
    sounds.pressButton();
    timer.reset();
  });

  buttonIncrementMinutes.addEventListener("click", function () {
    sounds.pressButton();
    timer.incrementMinutes(5);
    const minutesUpdated = timer.getMinutes();
    timer.updateDisplay(minutesUpdated);
  });

  buttonDecrementMinutes.addEventListener("click", function () {
    sounds.pressButton();
    timer.decrementMinutes(5);
    const minutesUpdated = timer.getMinutes();
    timer.updateDisplay(minutesUpdated);
  });

  soundButtonForest.addEventListener("click", function () {
    if (soundButtonForest.classList.contains("active")) {
      soundButtonForest.classList.remove("active");
      sounds.pause('forest');
      return;
    }
    soundButtonForest.classList.add("active");
    sounds.play('forest');
  });

  soundButtonRain.addEventListener("click", function () {
    if (soundButtonRain.classList.contains("active")) {
      soundButtonRain.classList.remove("active");
      sounds.pause('rain');
      return;
    }
    soundButtonRain.classList.add("active");
    sounds.play('rain');
  });

  soundButtonCafe.addEventListener("click", function () {
    if (soundButtonCafe.classList.contains("active")) {
      soundButtonCafe.classList.remove("active");
      sounds.pause('cafe');
      return;
    }
    soundButtonCafe.classList.add("active");
    sounds.play('cafe');
  });

  soundButtonFireplace.addEventListener("click", function () {
    if (soundButtonFireplace.classList.contains("active")) {
      soundButtonFireplace.classList.remove("active");
      sounds.pause('fireplace');
      return;
    }
    soundButtonFireplace.classList.add("active");
    sounds.play('fireplace');
  });
}
