// Selecionando elementos

const passInput = document.querySelector("#password-input")

const strenghtIndicator = document.querySelector("#password-strength-indicator")
const strenghtText = document.querySelector("#password-strength-text")

// Declarando objeto de exibição da mensagem
const strenghts = {
  1: "Muito Fraca",
  2: "Fraca",
  3: "Moderada",
  4: "Forte",
  5: "Muito Forte",
}

// Evento
passInput.addEventListener("input", (e) => {
  const password = e.target.value
  console.log(password)

  let score = 0

  // Requisitos
  if (password.length >= 8) score++
  if (password.match(/[a-z]/)) score++
  if (password.match(/[A-Z]/)) score++
  if (password.match(/[0-9]/)) score++
  if (password.match(/[^a-zA-Z0-9]/)) score++

  // Calculo da largura em %
  const width = (score / 5) * 100

  strenghtIndicator.style.width = `${width}%`

  switch (score) {
    case 1:
      strenghtIndicator.style.backgroundColor = "red"
      break
    case 2:
      strenghtIndicator.style.backgroundColor = "orange"
      break
    case 3:
      strenghtIndicator.style.backgroundColor = "yellow"
      break
    case 4:
      strenghtIndicator.style.backgroundColor = "green"
      break
    case 5:
      strenghtIndicator.style.backgroundColor = "blue"
      break
    default:
      strenghtIndicator.style.backgroundColor = "transparent"
      break
  }

  if (password.length > 0) {
    strenghtText.innerHTML = `Força: ${strenghts[score]}`
  } else {
    strenghtText.innerHTML = ``
  }
})
