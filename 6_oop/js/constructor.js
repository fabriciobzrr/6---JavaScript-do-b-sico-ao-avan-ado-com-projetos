function makeDog(nome, raca, cor) {
  const dog = Object.create({})

  dog.nome = nome
  dog.raca = raca
  dog.cor = cor

  return dog
}

const mya = makeDog("Mya", "Shintzu", "Castanho Claro")

console.log(mya)
