// Selecionando elementos
const colorsElement = document.querySelector(".colors")
const genBtn = document.querySelector("#gen-btn")

function genColors() {
  colorsElement.innerHTML = ""
  for (let i = 0; i < 6; i++) {
    const color = genRandomColor()
    const colorDiv = document.createElement("div")
    colorDiv.style.backgroundColor = color
    const colorHex = document.createElement("p")
    colorHex.textContent = color
    colorHex.style.color = color
    colorDiv.appendChild(colorHex)
    colorsElement.appendChild(colorDiv)
  }
}

function genRandomColor() {
  const letters = "0123456789ABCDEF"
  let color = "#"
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

genBtn.addEventListener("click", genColors)
