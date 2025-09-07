function fatorial(y) {
  if (y === 0) {
    return 1
  } else {
    return y * fatorial(y - 1)
  }
}

const numero = 0
const resultado = fatorial(numero)

console.log(`Resultado: ${resultado}`)
