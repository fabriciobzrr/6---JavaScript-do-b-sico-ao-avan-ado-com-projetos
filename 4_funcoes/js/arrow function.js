const variavel = (a, b) => {
  let result = a + b
  return result
}
const res = variavel(5, 6)
console.log(res)

const parImpar = (a) => {
  if (a % 2 !== 0) {
    console.log("Impar")
    return
  } else {
    console.log("Par")
    return
  }
}
parImpar(0)

const raizQuad = (a) => {
  const res = Math.sqrt(a)
  return res
}

const result = raizQuad(16)
console.log(result)

const potencia = (y) => y ** 2
console.log(potencia(30))
