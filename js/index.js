import Sounds from "./sounds.js";
import Events from "./events.js";
import Timer from "./timer.js";
import Controls from "./controls.js";

import {
  buttonPlay,
  buttonStop,
  buttonDecrementMinutes,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js";

const controls = Controls({
  buttonPlay,
  buttonStop,
  buttonDecrementMinutes,
});

const timer = new Timer({ minutesDisplay, secondsDisplay, controls });

const sounds = Sounds();

Events({ sounds, timer, controls });
