// selecionando elementos
const calcBtn = document.querySelector("#calculate-btn")
const billAmount = document.querySelector("#billAmount")
const serviceQuality = document.querySelector("#serviceQuality")

function calcTip() {
  const amountValue = Number(billAmount.value)
  const servQualityValue = Number(serviceQuality.value)

  if (!amountValue) {
    alert("Digite o valor da conta!")
    return
  }

  const tip = amountValue * servQualityValue
  const total = amountValue + tip
  const tipAmount = document.querySelector("#tipAmount")
  const totalAmount = document.querySelector("#totalAmount")
  tipAmount.value = tip.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
  totalAmount.value = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}

calcBtn.addEventListener("click", calcTip)
