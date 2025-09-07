class IndiceDeMassaCorporal {
  constructor(peso, altura) {
    this.peso = peso
    this.altura = altura
  }
  calcularImc() {
    return this.peso / this.altura ** 2
  }
}

const pessoa1 = new IndiceDeMassaCorporal(65, 1.81)
console.log(pessoa1.calcularImc())

const pessoa2 = new IndiceDeMassaCorporal(92, 1.6)
console.log(pessoa2.calcularImc())
