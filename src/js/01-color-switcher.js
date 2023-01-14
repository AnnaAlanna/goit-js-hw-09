const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const CHANGE_DELAY = 1000;
let intervalId = null;

startButton.addEventListener('click', onStartBtnClick);
stopButton.addEventListener('click', onStopBtnClick);

function onStartBtnClick(evt) {
    stopButton.removeAttribute('disabled');
    startButton.setAttribute('disabled', 'disabled');
    onBgcolorChange();
};

function onStopBtnClick(evt) {
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', 'disabled');
    clearInterval(intervalId);
};

function onBgcolorChange() {
    return intervalId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, CHANGE_DELAY);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
