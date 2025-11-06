// Seleção de elementos
const inputQrCode = document.querySelector("#qr-form input")
const btnQrCode = document.querySelector("#qr-form button")
const containerQrCode = document.querySelector(".container")
const imgQrCode = document.querySelector("#qr-code img")

// Funções
function generateQrCode() {
  const inputQrCodeValue = inputQrCode.value

  if (!inputQrCodeValue) {
    return
  }

  btnQrCode.innerText = `Gerando código...`

  imgQrCode.setAttribute(
    "src",
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputQrCodeValue}`
  )

  imgQrCode.addEventListener("load", () => {
    containerQrCode.classList.add("active")
    btnQrCode.innerText = `Código gerado!`
  })
}
// Eventos
btnQrCode.addEventListener("click", () => {
  generateQrCode()
})

inputQrCode.addEventListener("keyup", () => {
  if (!inputQrCode.value) {
    containerQrCode.classList.remove("active")
    btnQrCode.innerText = `Gerar QR Code`
  }
})
