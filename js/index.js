import Controls from "./controls.js";
import Sounds from './sounds.js';
import Timer from "./timer.js";
import Events from "./events.js";
import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  minutesDisplay,
  secondsDisplay
 } from "./elements.js";


const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sounds = Sounds();

Events({controls, timer, sounds});
