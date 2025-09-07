function Cat(nome, cor) {
  this.nome = nome
  this.cor = cor
}
const scottishCat = new Cat("Ronald", "Preto")
console.log(scottishCat)
console.log(Object.getPrototypeOf(scottishCat))

Cat.prototype.miar = function () {
  console.log("Miaaaaaaaaaaaaaaaaaaaaaau!")
}
scottishCat.miar()
console.log(Cat.prototype)
