// Selecionando os elementos
const form = document.querySelector("form")
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const assunto = document.querySelector("#assunto")
const mensagem = document.querySelector("#mensagem")
const errorMessages = document.querySelectorAll(".error-message")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  resetError()
  validateInputs()
})

function setError(input, errorMessage) {
  const erroMensagemElement = input.nextElementSibling
  erroMensagemElement.textContent = errorMessage
  input.parentElement.classList.add("error")
}

function resetError() {
  errorMessages.forEach((erro) => {
    erro.textContent = ""
  })
  nome.parentElement.classList.remove("error")
  email.parentElement.classList.remove("error")
  assunto.parentElement.classList.remove("error")
  mensagem.parentElement.classList.remove("error")
}

function validateInputs() {
  const nomeValue = nome.value.trim()
  const emailValue = email.value.trim()
  const assuntoValue = assunto.value.trim()
  const mensagemValue = mensagem.value.trim()
  if (nomeValue === "") {
    setError(nome, "Nome não pode ficar vazio")
  }
  if (emailValue === "") {
    setError(email, "E-mail não pode ficar vazio")
  } else if (!isValidEmail(emailValue)) {
    setError(email, "E-mail inválido")
  }
  if (assuntoValue === "") {
    setError(assunto, "Assunto não pode ficar vazio")
  }
  if (mensagemValue === "") {
    setError(mensagem, "Mensagem não pode ficar vazio")
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
