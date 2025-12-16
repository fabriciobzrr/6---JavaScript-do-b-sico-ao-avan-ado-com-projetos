// Selecionando os elementos
const cpfElement = document.querySelector(".cpf")
const genBtn = document.querySelector("#gen-cpf")
const copyBtn = document.querySelector("#copy-cpf")

// Função para gerar CPF aleatório
function gerarCPF() {
  let n = Math.floor(Math.random() * 999999999) + 1
  let nStr = n.toString().padStart(9, "0")
  let dv1 = calcularDV(nStr, 10)
  let dv2 = calcularDV(nStr + dv1, 11)

  cpfElement.innerText = formatarCPF(nStr + dv1 + dv2)
}

function calcularDV(numero, peso) {
  let total = 0
  for (let i = 0; i < numero.length; i++) {
    total += parseInt(numero.charAt(i)) * peso--
  }
  let resto = total % 11
  return resto < 2 ? 0 : 11 - resto
}

function formatarCPF(cpf) {
  const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/
  return cpf.replace(regex, "$1.$2.$3-$4")
}

function copyCpf() {
  const cpf = cpfElement.innerText
  navigator.clipboard.writeText(cpf).then(
    () => {
      alert(`CPF ${cpf} copiado com sucesso!`)
    },
    (err) => {
      console.log("Erro ao copiar o CPF.")
    }
  )
}

genBtn.addEventListener("click", gerarCPF)

copyBtn.addEventListener("click", copyCpf)
