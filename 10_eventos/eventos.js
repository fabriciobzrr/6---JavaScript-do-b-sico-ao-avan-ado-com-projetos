const btn = document.getElementById("btn")
btn.addEventListener("click", clicou)

function clicou() {
  alert("Clicou")
}

const input = document.getElementById("input")
input.addEventListener("mouseenter", (e) => {
  console.log(e)
})

const remove = document.getElementById("remove")
remove.addEventListener("click", () => {
  console.log("Removeu")
  btn.removeEventListener("click", clicou)
})

const div1 = document.getElementById("div1")
const btn1 = document.getElementById("btn1")

div1.addEventListener("click", () => {
  console.log("click1")
})
btn1.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("click2")
})

function debounce(funcaoOriginal, tempoDeEspera) {
  let temporizador
  return function (...args) {
    if (temporizador) {
      clearTimeout(temporizador)
    }
    temporizador = setTimeout(() => {
      funcaoOriginal(...args)
    }, tempoDeEspera)
  }
}

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("executado")
  }, 500)
)
