// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const inputNumber = document.querySelector("#number")
const multiplicatorInput = document.querySelector("#multiplicator")
const multpOperations = document.querySelector("#multiplication-operations")

const multiNumber = document.querySelector("#multiplication-title span")

// Funções
const calculate = (number, multiplicatorNumber) => {
  multpOperations.innerHTML = ""
  for (let i = 1; i <= multiplicatorNumber; i++) {
    const result = number * i

    const template = `<div class="row">
      <div class="operations">${number} x ${i} = </div>
      <div class="result">${result}</div>
    </div>`
    // multpOperations.innerHTML += template

    const parser = new DOMParser()

    const htmlTemplate = parser.parseFromString(template, "text/html")

    const row = htmlTemplate.querySelector(".row")

    multpOperations.appendChild(row)
  }
  multiNumber.innerText = `${number}`
}

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const multiplicationNumber = Number(inputNumber.value)
  const multiplicatorNumber = Number(multiplicatorInput.value)
  if (!multiplicationNumber || !multiplicatorNumber) return
  calculate(multiplicationNumber, multiplicatorNumber)
})
