// 1 - instalação
// console.log(axios)

// 2 - primeiro request

const getData = async () => {
  try {
    const response = await postsFetch.get(
      "/users",
      // 4 - definindo headers
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
getData()

// 3 - imprimindo dados na tela
const divUsers = document.querySelector("#users-content")

const printData = async () => {
  const data = await getData()

  data.forEach((user) => {
    const div = document.createElement("div")

    const nameElement = document.createElement("h3")
    const emailElement = document.createElement("p")
    const userElement = document.createElement("p")

    emailElement.classList.add("email")
    div.classList.add("user-card")
    userElement.classList.add("username")

    nameElement.textContent = user.name
    emailElement.textContent = `Email: ${user.email}`
    userElement.textContent = `Nome de usuário: ${user.username}`

    div.appendChild(nameElement)
    div.appendChild(emailElement)
    div.appendChild(userElement)

    divUsers.appendChild(div)
  })
}

printData()

// 4 - requisição POST
const form = document.querySelector("#post-form")
const inputTitle = document.querySelector("#title")
const textBody = document.querySelector("#body")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  postsFetch.post("/posts", {
    title: inputTitle.value,
    body: textBody.value,
    userId: 1,
  })
})
