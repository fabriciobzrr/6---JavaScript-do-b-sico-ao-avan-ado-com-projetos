const persons = [
  { nome: "Rosa", sobrenome: "Santos", idade: 20 },
  { nome: "Maria", sobrenome: "Silva", idade: 25 },
  { nome: "Ray", sobrenome: "Sales", idade: 30 },
  { nome: "Rui", sobrenome: "Menezes", idade: 22 },
]
const newHeader = []

const head = Object.keys(persons[0])

// console.log(head)

newHeader.push(head)

newHeader.join(",")

for (const person of persons) {
  // console.log(person)
  const values = head.map((h) => {
    let value = person[h]

    if (value === null || value === undefined) {
      value = ""
    } else if (typeof value === "object") {
      value = JSON.stringify(value)
    }

    return value
  })
  return newHeader.push(values.join(","))
}
