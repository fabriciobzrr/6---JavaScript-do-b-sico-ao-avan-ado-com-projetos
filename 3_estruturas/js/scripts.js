// if
// const username = "Fred"

// if (username === "Fred") {
//   document.body.style.backgroundColor = "black"
//   const result = document.querySelector("h1")
//   result.innerHTML = `O nome é igual a <span>${username}</span>.`
//   result.style.color = "green"
// } else {
//   document.body.style.backgroundColor = "red"
//   const result = document.querySelector("h1")
//   result.innerHTML = `O nome não é igual a <span class="notuser">${username}</span>.`
//   result.style.color = "yellow"
// }

// // while
// let n = -6

// while (n < -1) {
//   console.log(`Imprimindo ${n}`)
//   n += 1
// }

// // for
// for (let a = 1; a < 6; a++) {
//   console.log(`Imprimindo o valor de a: ${a}`)
// }

// let x = 30
// for (x; x > 14; x -= 1) {
//   console.log(`Contando ${x}`)
// }

// for (let i = 0; i < 10; i++) {
//   if (i * 2 > 10) {
//     console.log(`Maior que 10: ${i}`)
//   } else {
//     if (i / 2 === 0) {
//       console.log("Deu zero")
//     }
//   }
// }

for (let r = 10; r < 20; r += 1) {
  console.log(`o valor ${r}`)
  if (r === 15) {
    console.log(`Igual ${r}`)
    break
  }
}

for (let e = 1; e < 11; e += 1) {
  if (e % 2 !== 0) {
    console.log("Numero impar")
    // continue
  }
  console.log(e)
}
