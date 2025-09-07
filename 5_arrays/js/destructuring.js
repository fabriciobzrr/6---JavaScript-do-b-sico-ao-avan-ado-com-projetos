const char = {
  charName: "voXXeR",
  charGender: "masculino",
  charClass: "cavaleiro",
  charAge: "jovem",
  charItem: "fogueira de abnegação",
}

const { charName, charGender, charClass, charAge, charItem } = char

console.log(
  `Seu ${charAge} personagem se chama ${charName} do sexo ${charGender} com a classe de ${charClass} e está possuindo o item ${charItem}.`
)

const frutas = ["uva", "laranja", "maçã"]
const [primeiraFruta, segundaFruta, terceiraFruta] = frutas

console.log(terceiraFruta)
