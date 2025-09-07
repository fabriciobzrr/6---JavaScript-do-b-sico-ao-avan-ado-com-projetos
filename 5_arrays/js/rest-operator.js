const multiplyInfinita = (...num) => {
  let result = 1
  for (let a = 0; a < num.length; a++) {
    result *= num[a]
  }
  return result
}

console.log(multiplyInfinita(5, 3, 4))

const fabricio = (nome, ...linguagem) => {
  console.log(`Nome: ${nome}`)
  console.log(`Suas habilidades: ${linguagem}`)
}

fabricio("Fabricio", "JavaScript", "Python", "HTML", "CSS")
