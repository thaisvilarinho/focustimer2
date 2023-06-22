export default function Controls({ buttonPlay, buttonStop, buttonDecrementMinutes }) {

  function toggleButtonStates() {
    buttonPlay.disabled = !buttonPlay.disabled;
    buttonStop.disabled = !buttonStop.disabled;
  }

  function updateButtonState(action) {
    switch (action) {
      case "buttonPlayPressed":
      case "buttonStopPressed":
        buttonDecrementMinutes.disabled = false;
        toggleButtonStates();
        break;
      case "decrementMinutesReachedLimit":
        buttonDecrementMinutes.disabled = true;
        buttonPlay.disabled = false;
        buttonStop.disabled = true;
        break;
      case "reset":
        buttonDecrementMinutes.disabled = false;
        buttonPlay.disabled = false;
        buttonStop.disabled = true;
        break;
      default:
        break;
    }
  }

  return {
    updateButtonState,
  };
}
