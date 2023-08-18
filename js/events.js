import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
} from "./elements.js";

export default function ({ controls, timer, sounds }) {
  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countDown();
    sounds.pressButton();
  });

  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
    sounds.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sounds.pressButton();
  });

  buttonSoundOff.addEventListener("click", function () {
    buttonSoundOn.classList.remove("hide");
    buttonSoundOff.classList.add("hide");
    sounds.bgAudio.play();
    
  });

  buttonSoundOn.addEventListener("click", function () {
    buttonSoundOff.classList.remove("hide");
    buttonSoundOn.classList.add("hide");
    sounds.bgAudio.pause();
  });

  buttonSet.addEventListener("click", function () {
    let newMinutes = timer.getMinutes();
    if (!newMinutes) {
      timer.reset();
      return;
    }
    timer.updateDisplay(newMinutes, 0);
    timer.setMinutes(newMinutes);
  });
}
