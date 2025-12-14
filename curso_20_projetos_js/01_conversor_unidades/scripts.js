// Selecionar os elementos
const inputElement = document.querySelector("#input")
const fromElement = document.querySelector("#from")
const toElement = document.querySelector("#to")
const buttonElement = document.querySelector("#convert-btn")
const outputElement = document.querySelector("#output")
const messageElement = document.querySelector("#message")

// Função que converte as unidades

function convertUnit() {
  const fromValue = fromElement.value
  const toValue = toElement.value

  if (fromValue === toValue) {
    outputElement.value = inputElement.value
    messageElement.textContent = ""
    return
  }

  // Converter a unidade de entrada para Gramas
  let grams
  switch (fromValue) {
    case "g":
      grams = inputElement.value
      break
    case "kg":
      grams = inputElement.value * 1000
      break
    case "hg":
      grams = inputElement.value * 100
      break
    case "dag":
      grams = inputElement.value * 10
      break
    case "dg":
      grams = inputElement.value / 10
      break
    case "cg":
      grams = inputElement.value / 100
      break
    case "mg":
      grams = inputElement.value / 1000
      break
  }

  // Converter Gramas para unidade de saida
  let result
  switch (toValue) {
    case "g":
      result = grams
      break
    case "kg":
      result = grams / 1000
      break
    case "hg":
      result = grams / 100
      break
    case "dag":
      result = grams / 10
      break
    case "dg":
      result = grams * 10
      break
    case "cg":
      result = grams * 100
      break
    case "mg":
      result = grams * 1000
      break
  }
  // Exibe o resultado no input

  // Exibe o resultado na mensagem
  const fromLabel = fromElement.options[fromElement.selectedIndex].text
  const toLabel = toElement.options[toElement.selectedIndex].text
  const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`
  messageElement.textContent = message
  outputElement.value = `${result} ${toElement.value}`
  return
}

buttonElement.addEventListener("click", convertUnit)
