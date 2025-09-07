class Carro {
  constructor(marca, modelo, cor) {
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
  }
  andar() {
    console.log(
      `O carro ${this.marca} ${this.modelo} ${this.cor} está em movimento.`
    )
  }
}
const myCarro = new Carro("Lamborghini", "Gallardo", "Amarelo")
myCarro.andar()
console.log()

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos
    this.cor = cor
  }

  descricao() {
    console.log(`Caminhão ${this.cor} tem ${this.eixos} eixos.`)
  }
}

const vw = new Caminhao(8, "Verde")
console.log(vw)

vw.descricao()

Caminhao.motor = 4

const vw2 = new Caminhao(6, "Rosa")

console.log(vw2)
