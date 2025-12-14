// Selecionando elementos
const progressBar = document.querySelector(".progress")
const previousBtn = document.querySelector("#previous-btn")
const nextBtn = document.querySelector("#next-btn")
let progress = 0

function updateProgress() {
  progressBar.style.width = progress + "%"
}

function nextStep() {
  progress += 20
  if (progress > 100) progress = 100
  updateProgress()
}

function previousStep() {
  progress -= 20
  if (progress < 0) progress = 0
  updateProgress()
}

nextBtn.addEventListener("click", nextStep)
previousBtn.addEventListener("click", previousStep)
