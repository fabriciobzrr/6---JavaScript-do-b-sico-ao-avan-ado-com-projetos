const myPerson = {
  nome: "Fabricio",
  idade: 32,
  cargo: "programador",
}

console.log(myPerson.nome.length)
console.log(typeof myPerson.idade)
console.log(myPerson.cargo)
console.log(typeof myPerson)

let car = {
  brand: "Nissan",
  model: "350z",
  color: "red",
  engine: 3.5,
}

car.wheels = "BBS"
console.log(car)
delete car.color
console.log(car)
car.color = "gray"
console.log(car)

console.log(car instanceof Object)

Object.assign(myPerson, car)
console.log(myPerson)
