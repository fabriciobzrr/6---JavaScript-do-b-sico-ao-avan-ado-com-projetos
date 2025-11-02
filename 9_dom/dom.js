// insertBefore
const newTitle = document.createElement("h2")
newTitle.textContent = "Novo titulo em ação"
const divContainer = document.getElementById("container")
const body = document.getElementsByTagName("body")[0]
body.insertBefore(newTitle, divContainer)
newTitle.style.fontSize = "32px"

// appendChild
const p2 = document.createElement("p")
p2.textContent = "Mais um paragrafo added"
p2.style.color = "yellow"
p2.style.backgroundColor = "black"
divContainer.appendChild(p2)

// replaceChild
const p1 = document.getElementById("paragrafo2")
const divCont = document.getElementById("container")
const p22 = document.createElement("p")
p22.textContent = "Este não é o segundo parágrafo."
p22.style.color = "red"
p22.style.fontSize = "12px"
divCont.replaceChild(p22, p1)

// createTextNode
const div2 = document.getElementById("container")
const div = document.createElement("div")
const p3 = document.createTextNode("Novo texto nessa linha.")
div.appendChild(p3)
div2.appendChild(div)
console.log(div)
