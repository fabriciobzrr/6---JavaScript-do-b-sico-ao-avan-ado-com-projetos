// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTable = document.querySelector("#multiplication-operations")
const multiplicationTitle = document.querySelector("#multiplication-title span")

// Funções
const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = ""
  for (let i = 1; i <= multiplicatorNumber; i++) {
    const total = number * i

    const template = `<div class="row">
    <div class="operation">${number} x ${i} = </div>
    <div class="result">${total}</div>
    </div>`

    multiplicationTable.innerHTML += template
  }
  multiplicationTitle.innerText = `${number}`
}

// Eventos
multiplicationForm.addEventListener("submit", (ev) => {
  ev.preventDefault()
  const multiplicationNumber = Number(numberInput.value)
  const multiplicatorNumber = Number(multiplicationInput.value)
  if (!multiplicationNumber || !multiplicatorNumber) {
    return
  }
  createTable(multiplicationNumber, multiplicatorNumber)
})
