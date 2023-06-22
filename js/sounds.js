export default function () {

  const backgroundSounds = [
    {
      name: "forest",
      audio: new Audio('https://github.com/thaisvilarinho/focustimer2/blob/main/sounds/forest.wav?raw=true')
    },
    {
      name: "rain",
      audio: new Audio('https://github.com/thaisvilarinho/focustimer2/blob/main/sounds/rain.wav?raw=true')
    },
    {
      name: "cafe",
      audio: new Audio('https://github.com/thaisvilarinho/focustimer2/blob/main/sounds/cafe.wav?raw=true')
    },
    {
      name: "fireplace",
      audio: new Audio('https://github.com/thaisvilarinho/focustimer2/blob/main/sounds/fireplace.wav?raw=true')
    },
  ]
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );


  function pressButton() {
    buttonPressAudio.play();
  }

  function timeOut() {
    kitchenTimer.play();
  }

  function play(name) {
    const sound = backgroundSounds.find((sound) => sound.name === name);
    if (sound) {
      sound.audio.play();
      sound.audio.loop = true;
    }
  }

  function pause(name) {
    const sound = backgroundSounds.find((sound) => sound.name === name);
    if (sound && sound.audio) {
      sound.audio.pause();
    }
  }
  

  return {
    pressButton,
    timeOut,
    play,
    pause
  };
}
