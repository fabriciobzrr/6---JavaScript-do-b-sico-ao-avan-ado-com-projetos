// Selecionando Elementos
const clockElement = document.querySelector(".clock")
const hoursElement = document.querySelector(".hours")
const minutesElement = document.querySelector(".minutes")
const secondsElement = document.querySelector(".seconds")
const nowDate = new Date()

function updateClock() {
  const hours = nowDate.getHours().toString().padStart(2, "0")
  const minutes = nowDate.getMinutes().toString().padStart(2, "0")
  const seconds = nowDate.getSeconds().toString().padStart(2, "0")

  hoursElement.textContent = hours
  minutesElement.textContent = minutes
  secondsElement.textContent = seconds
}

setInterval(updateClock, 1000)
