// Selecionando os elementos do DOM
let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")
let secondPlayer

// Contadores de jogadas
let player1 = 0
let player2 = 0

// Funções
// Verifica de quem é a vez e retorna o elemento correspondente
function checkElement(player1, player2) {
  if (player1 === player2) {
    // é a vez do X
    element = x
  } else {
    // é a vez do O
    element = o
  }
  return element
}

function checkWinCondition() {
  let b1 = document.getElementById("block-1")
  let b2 = document.getElementById("block-2")
  let b3 = document.getElementById("block-3")
  let b4 = document.getElementById("block-4")
  let b5 = document.getElementById("block-5")
  let b6 = document.getElementById("block-6")
  let b7 = document.getElementById("block-7")
  let b8 = document.getElementById("block-8")
  let b9 = document.getElementById("block-9")

  // Checando as condições de vitória
  // Horizontal
  if (
    b1.children.length > 0 &&
    b2.children.length > 0 &&
    b3.children.length > 0
  ) {
    let b1Child = b1.children[0].className
    let b2Child = b2.children[0].className
    let b3Child = b3.children[0].className

    if (b1Child === "x" && b2Child === "x" && b3Child === "x") {
      declareWinner("x")
      return
    } else if (b1Child === "o" && b2Child === "o" && b3Child === "o") {
      declareWinner("o")
      return
    }
  }
  if (
    b4.children.length > 0 &&
    b5.children.length > 0 &&
    b6.children.length > 0
  ) {
    let b4Child = b4.children[0].className
    let b5Child = b5.children[0].className
    let b6Child = b6.children[0].className

    if (b4Child === "x" && b5Child === "x" && b6Child === "x") {
      declareWinner("x")
      return
    } else if (b4Child === "o" && b5Child === "o" && b6Child === "o") {
      declareWinner("o")
      return
    }
  }
  if (
    b7.children.length > 0 &&
    b8.children.length > 0 &&
    b9.children.length > 0
  ) {
    let b7Child = b7.children[0].className
    let b8Child = b8.children[0].className
    let b9Child = b9.children[0].className

    if (b7Child === "x" && b8Child === "x" && b9Child === "x") {
      declareWinner("x")
      return
    } else if (b7Child === "o" && b8Child === "o" && b9Child === "o") {
      declareWinner("o")
      return
    }
  }

  // Vertical
  if (
    b1.children.length > 0 &&
    b4.children.length > 0 &&
    b7.children.length > 0
  ) {
    let b1Child = b1.children[0].className
    let b4Child = b4.children[0].className
    let b7Child = b7.children[0].className

    if (b1Child === "x" && b4Child === "x" && b7Child === "x") {
      declareWinner("x")
      return
    } else if (b1Child === "o" && b4Child === "o" && b7Child === "o") {
      declareWinner("o")
      return
    }
  }
  if (
    b2.children.length > 0 &&
    b5.children.length > 0 &&
    b8.children.length > 0
  ) {
    let b2Child = b2.children[0].className
    let b5Child = b5.children[0].className
    let b8Child = b8.children[0].className

    if (b2Child === "x" && b5Child === "x" && b8Child === "x") {
      declareWinner("x")
      return
    } else if (b2Child === "o" && b5Child === "o" && b8Child === "o") {
      declareWinner("o")
      return
    }
  }
  if (
    b3.children.length > 0 &&
    b6.children.length > 0 &&
    b9.children.length > 0
  ) {
    let b3Child = b3.children[0].className
    let b6Child = b6.children[0].className
    let b9Child = b9.children[0].className

    if (b3Child === "x" && b6Child === "x" && b9Child === "x") {
      declareWinner("x")
      return
    } else if (b3Child === "o" && b6Child === "o" && b9Child === "o") {
      declareWinner("o")
      return
    }
  }

  // Diagonal
  if (
    b1.children.length > 0 &&
    b5.children.length > 0 &&
    b9.children.length > 0
  ) {
    let b1Child = b1.children[0].className
    let b5Child = b5.children[0].className
    let b9Child = b9.children[0].className

    if (b1Child === "x" && b5Child === "x" && b9Child === "x") {
      declareWinner("x")
      return
    } else if (b1Child === "o" && b5Child === "o" && b9Child === "o") {
      declareWinner("o")
      return
    }
  }
  if (
    b3.children.length > 0 &&
    b5.children.length > 0 &&
    b7.children.length > 0
  ) {
    let b3Child = b3.children[0].className
    let b5Child = b5.children[0].className
    let b7Child = b7.children[0].className

    if (b3Child === "x" && b5Child === "x" && b7Child === "x") {
      declareWinner("x")
      return
    } else if (b3Child === "o" && b5Child === "o" && b7Child === "o") {
      declareWinner("o")
      return
    }
  }

  // Deu empate
  let counter = 0
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].children[0] !== undefined) {
      counter++
    }
  }
  if (counter === 9) {
    // deu empate
    declareWinner("deu empate")
    return
  }
}

// Limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {
  let scoreOne = document.querySelector("#scoreboard-1")
  let scoreTwo = document.querySelector("#scoreboard-2")
  let msg = ""

  if (winner === "x") {
    scoreOne.textContent = parseInt(scoreOne.textContent) + 1
    msg = "O Jogador 1 Venceu"
  } else if (winner === "o") {
    scoreTwo.textContent = parseInt(scoreTwo.textContent) + 1
    msg = "O Jogador 2 Venceu"
  } else {
    msg = "Deu Empate!"
  }

  // Exibindo a mensagem na tela
  messageText.innerHTML = msg
  messageContainer.classList.remove("hide")

  // Esconder a mensagem
  setTimeout(function () {
    messageContainer.classList.add("hide")
  }, 2000)

  // Zerar as jogadas
  player1 = 0
  player2 = 0

  // Limpar as caixas
  setTimeout(function () {
    let boxesToClear = document.querySelectorAll(".box div")
    boxesToClear.forEach((box) => {
      box.parentNode.removeChild(box)
    })
  }, 1500)
}
// executar a lógica da jogada do CPU
function computerPlayer() {
  let cloneCircle = o.cloneNode(true)
  counter = 0
  filled = 0

  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5)

    // só irá preencher se o filho estiver vazio
    if (boxes[i].children[0] === undefined) {
      if (randomNumber <= 1) {
        boxes[i].appendChild(cloneCircle)
        counter++
        break
      }
      // checa quantas caixas estão preenchidas
    } else {
      filled++
    }
  }

  if (counter === 0 && filled < 9) {
    computerPlayer()
  }
}

// Eventos
// Capturando eventos de clique nas caixas
for (let i = 0; i < boxes.length; i++) {
  // quando alguém clica na caixa/espaço vazio
  boxes[i].addEventListener("click", function () {
    let element = checkElement(player1, player2)

    // verifica se já tem X ou O e adiciona o elemento de acordo com a vez
    if (this.children.length === 0) {
      let cloneElement = element.cloneNode(true)

      this.appendChild(cloneElement)

      // computando a jogada
      if (player1 === player2) {
        player1++

        if (secondPlayer === "vs-cpu") {
          // Função para executar a jogada do CPU
          computerPlayer()
          player2++
        }
      } else {
        player2++
      }

      // checar se alguém ganhou - lógica da vitória
      checkWinCondition()
    }
  })
}

// botão 2 players ou CPU
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    secondPlayer = this.getAttribute("id")

    for (let j = 0; j < buttons.length; j++) {
      buttons[j].style.display = "none"
    }
    setTimeout(function () {
      let container = document.querySelector("#container")
      container.classList.remove("hide")
    }, 500)
  })
}
