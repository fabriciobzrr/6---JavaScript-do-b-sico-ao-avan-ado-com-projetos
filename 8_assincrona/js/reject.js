function anyThing(a) {
  return new Promise((resolve, reject) => {
    if (a > 15) {
      resolve(`O número é maior que 15`)
    } else {
      reject(new Error(`O número está baixo`))
    }
  })
}

const y = anyThing(15)

const x = anyThing(21)

y.then((n) => console.log(`O resultado é: ${n}`)).catch((err) =>
  console.log(`Ocorreu um erro: ${err}`)
)
x.then((n) => console.log(`O resultado é ${n}`)).catch((err) =>
  console.log(`Ocorreu um erro: ${err}`)
)
