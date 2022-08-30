setInterval(setClock, 1000);

const hoursHandle = document.querySelector(".clock_large_pin");
const minutesHandle = document.querySelector(".clock_medium_pin");
const secondsHandle = document.querySelector(".clock_small_pin");

function setClock() {
  let date = new Date();
  let secondsRatio = date.getSeconds() / 60;
  let minutesRatio = (secondsRatio + date.getMinutes()) / 60;
  let hoursRatio = (minutesRatio + date.getHours()) / 12;

  setRotation(secondsHandle, secondsRatio);
  setRotation(minutesHandle, minutesRatio);
  setRotation(hoursHandle, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
