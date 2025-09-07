const boasVindas = (username) => {
  if (!username) {
    console.log("Seja bem vindo, usuário!")
    return
  } else {
    console.log(`Seja bem vindo, ${username}!`)
  }
}

boasVindas("")
boasVindas("Fred")
