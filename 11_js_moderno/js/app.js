// 1 - var, let e const
var a = 10
var b = 15

if (b > 10) {
  var a = 5
  // console.log(a)
}
// console.log(a)

// filter

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const highNumbers = arr.filter((i) => {
  if (i >= 4) {
    return i
  }
})

// console.log(highNumbers)

const users = [
  { name: "Deleon", active: true },
  { name: "Arya", active: true },
  { name: "John", active: false },
  { name: "Robert", active: true },
]

const activeUsers = users.filter((a) => a.active)

// console.log(activeUsers)

// map

const myProducts = [
  { name: "Teclado", price: 200.0, category: "Periféricos" },
  { name: "Mouse", price: 99.0, category: "Periféricos" },
  { name: "Mousepad", price: 59.0, category: "Periféricos" },
  { name: "Windows", price: 199.0, category: "Software" },
  { name: "Monitor", price: 899.0, category: "Hardware" },
]

const promotionProducts = myProducts.map((a) => {
  if (a.category === "Periféricos") {
    a.onSale = true
  }
})

// console.log(myProducts)

// destructuring

const usersName = ["José", "Marte", "Geneva"]

const [u1, u2, u3] = usersName

// console.log(u1, u2, u3)

const productDetails = {
  name: "mouse",
  price: 30,
  category: "periféricos",
  color: "white",
}

const { name: batata, price, category, color } = productDetails
// console.log(batata, category, color)

// spread operator

const house = ["Geladeira", "Fogão", "Microondas"]
const house1 = ["Air-Fryer", "TV", "Notebook"]
const allHouse = [...house1, ...house]

// console.log(allHouse)

const allHouseDetails = ["Cama", ...allHouse, "Máquina de Lavar"]
// console.log(allHouseDetails)

// classes

class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  productDiscount(discount) {
    return this.price - this.price * (discount / 100)
  }
}

const mouseGamer = new Product("Logitech G Pro", 899)

// console.log(mouseGamer.productDiscount(30).toFixed(2))

// herança

class ProductSecond extends Product {
  constructor(name, price, sensor, dongle) {
    super(name, price)
    this.sensor = sensor
    this.dongle = dongle
  }

  showSensor() {
    console.log("O sensor presente é: ")
    this.sensor.forEach((s) => {
      console.log(s)
    })
  }
  showDongle() {
    console.log("O dongle presente é: ")
    this.dongle.forEach((d) => {
      console.log(d)
    })
  }
}

const newMouseGamer = new ProductSecond(
  "Pulsar Xlite V4",
  999,
  ["PAW 3395", "PAW 3950"],
  ["1000hz", "8000hz"]
)

console.log(newMouseGamer)
console.log(newMouseGamer.name)
newMouseGamer.showSensor()
newMouseGamer.showDongle()
