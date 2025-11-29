// Selecionando os elementos
const question = document.querySelector("#question")
const answersBox = document.querySelector("#answers-box")
const containerQuizz = document.querySelector("#quizz-container")
const scoreQuizz = document.querySelector("#score-container")
const letters = ["a", "b", "c", "d"]
let points = 0
let actualQuestion = 0

// Perguntas
const questions = [
  {
    question:
      "Qual objeto usado para instanciar novos objetos do tipo data em JavaScript?",
    answers: [
      {
        answer: "Data()",
        correct: false,
      },
      {
        answer: ".instanceOf",
        correct: false,
      },
      {
        answer: ".getDate()",
        correct: false,
      },
      {
        answer: "Date()",
        correct: true,
      },
    ],
  },
  {
    question:
      "Qual o estrutura de lopp é ideal para percorrer objetos em JavaScript?",
    answers: [
      {
        answer: "for convencional",
        correct: false,
      },
      {
        answer: "while",
        correct: false,
      },
      {
        answer: "for of",
        correct: false,
      },
      {
        answer: "for in",
        correct: true,
      },
    ],
  },
  {
    question: "Uma forma de declarar variável em JavaScript:",
    answers: [
      {
        answer: "$var",
        correct: false,
      },
      {
        answer: "var",
        correct: true,
      },
      {
        answer: "@var",
        correct: false,
      },
      {
        answer: "#let",
        correct: false,
      },
    ],
  },
  {
    question: "Qual o seletor de id no CSS?",
    answers: [
      {
        answer: "#",
        correct: true,
      },
      {
        answer: ".",
        correct: false,
      },
      {
        answer: "@",
        correct: false,
      },
      {
        answer: "/",
        correct: false,
      },
    ],
  },
  {
    question:
      "Qual palavra reservada é usada para sair de um bloco de código imediatamente?",
    answers: [
      {
        answer: "use",
        correct: false,
      },
      {
        answer: "escape",
        correct: false,
      },
      {
        answer: "return",
        correct: true,
      },
      {
        answer: "else",
        correct: false,
      },
    ],
  },
]

// Substitui o quizz pela primeira pergunta
function init() {
  // Cria a primeira pergunta
  createQuestion(actualQuestion)
}

// Criando a pergunta
function createQuestion(i) {
  // Limpar a questão anterior
  const oldButton = answersBox.querySelectorAll("button")

  oldButton.forEach(function (btn) {
    btn.remove()
  })

  // Alterar o texto da pergunta
  const questionText = question.querySelector("#question-text")
  questionText.textContent = questions[i].question

  // Inserindo alternativas
  questions[i].answers.forEach(function (answer, i) {
    // Cria um template do botão do quizz
    const answerTemplate = document
      .querySelector(".answer-template")
      .cloneNode(true)

    const btnLetter = answerTemplate.querySelector(".btn-letter")
    const btnText = answerTemplate.querySelector(".question-answer")
    btnLetter.textContent = letters[i]
    btnText.textContent = answer["answer"]
    answerTemplate.setAttribute("correct-answer", answer["correct"])

    // Remover hide e a classe do template
    answerTemplate.classList.remove("hide")
    answerTemplate.classList.remove("answer-template")

    // Inserindo alternativas na tela
    answersBox.appendChild(answerTemplate)

    // Inserir um evento de click no botão
    answerTemplate.addEventListener("click", function () {
      checkAnswer(this)
    })
  })

  // Incrementando o número da questão
  actualQuestion++
}

// Verificando resposta de usuário
function checkAnswer(button) {
  // Seleciona todos os botões
  const buttons = answersBox.querySelectorAll("button")
  // Verifica se a resposta está correta e adiciona classes de estilo
  buttons.forEach(function (btn) {
    if (btn.getAttribute("correct-answer") === "true") {
      btn.classList.add("correct-answer")
      // Checando se o usuário acertou a pergunta
      if (button === btn) {
        // Incremento dos pontos
        points++
      }
    } else {
      btn.classList.add("wrong-answer")
    }
  })

  // Exibir a próxima pergunta
  nextQuestion()
}

function nextQuestion() {
  // Timer para o usuário ver as respostas
  setTimeout(function () {
    // Verifica se ainda tem Perguntas
    if (actualQuestion >= questions.length) {
      // Apresenta a mensagem de sucesso
      showSuccessMessage()
      return
    }
    createQuestion(actualQuestion)
  }, 100)
}

// Exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz()

  // Alterando os valores de acertos
  // Calculando Score
  const score = ((points / questions.length) * 100).toFixed(1)

  // Altera a porcentagem de acertos
  const displayScore = scoreQuizz.querySelector("#display-score span")
  displayScore.textContent = score

  // Alterando o Número de acertos
  const correctAnswers = scoreQuizz.querySelector("#correct-answers")
  correctAnswers.textContent = points

  // Alterando o Total de perguntas
  const questionsQty = scoreQuizz.querySelector("#questions-qty")
  questionsQty.textContent = questions.length
}

// Mostra ou esconde o score
function hideOrShowQuizz() {
  containerQuizz.classList.toggle("hide")
  scoreQuizz.classList.toggle("hide")
}

// Reiniciar o Quizz
const restartBtn = scoreQuizz.querySelector("#restart")

restartBtn.addEventListener("click", function () {
  setTimeout(function () {
    hideOrShowQuizz()
    restartQuizz()
    init()
  }, 300)
})

function restartQuizz() {
  points = 0
  actualQuestion = 0
}

// Inicia o quizz ao recarregar a página
init()
