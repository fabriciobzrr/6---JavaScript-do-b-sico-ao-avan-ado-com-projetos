const myObject = {
  nome: "Greed",
}

console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const object2 = Object.create(myObject)

console.log(object2)

console.log(object2.nome)
console.log(Object.getPrototypeOf(object2) === myObject)

const gato = {
  cor: null,
  pata: 4,
}

const pretoBranco = Object.create(gato)
gato.cor = "preto e branco"

console.log(pretoBranco)
console.log(pretoBranco.pata)
