// Seleção de elementos
let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")
let secondPlayer

// contador de jogadas
let player1 = 0
let player2 = 0

// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {
  // quando alguém clica na caixa
  boxes[i].addEventListener("click", function () {
    // armazena o elemento que foi clicado e verifica de quem é a vez
    let element = checkElement(player1, player2)

    // verifica se já tem x ou o
    if (this.childNodes.length === 0) {
      // clona o elemento para não remover da tela principal
      let cloneElement = element.cloneNode(true)
      this.appendChild(cloneElement)

      // computando a jogada
      if (player1 === player2) {
        player1++
      } else {
        player2++
      }
    }
  })
}

// função para checar a vez do jogador - se igual, x joga, se diferente, o joga - retornando o element
function checkElement(player1, player2) {
  if (player1 === player2) {
    // x joga
    element = x
  } else {
    // o joga
    element = o
  }
  return element
}

// boxes.forEach((box) => {
//   box.addEventListener("click", function () {})
// })
