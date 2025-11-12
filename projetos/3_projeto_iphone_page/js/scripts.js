// Usando forEach
const buttons = document.querySelectorAll("#image-picker li")
const image = document.querySelector("#product-image")

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      const newBtn = btn.querySelector(".color")
      newBtn.classList.remove("selected")
    })

    const button = e.target

    const myId = button.getAttribute("id")

    const newButton = button.querySelector(".color")
    newButton.classList.add("selected")

    image.classList.add("changing")
    image.setAttribute("src", `img/iphone_${myId}.jpg`)

    setTimeout(() => {
      image.classList.remove("changing")
    }, 180)
  })
})

// // Usando If...Else
// const buttons = document.querySelectorAll("#image-picker li")
// const image = document.querySelector("#product-image")

// buttons.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const colorSelected = document.querySelector(".color.selected")
//     if (colorSelected) {
//       colorSelected.classList.remove("selected")
//     }

//     const button = e.target

//     const myId = button.getAttribute("id")

//     const newButton = button.querySelector(".color")
//     newButton.classList.add("selected")

//     image.classList.toggle("changing")
//     image.setAttribute("src", `img/iphone_${myId}.jpg`)

//     setTimeout(() => {
//       image.classList.toggle("changing")
//     }, 180)
//   })
// })

// // Usando elementos separadamente

// const green = document.querySelector("#green")
// const silver = document.querySelector("#silver")
// const golden = document.querySelector("#golden")
// const grafite = document.querySelector("#grafite")
// const blue = document.querySelector("#blue")
// const imge = document.querySelector("#product-image")

// green.addEventListener("click", (e) => {
//   const button = e.target
//   const id = button.getAttribute("id")
//   green.querySelector(".color").classList.add("selected")

//   silver.querySelector(".color").classList.remove("selected")
//   golden.querySelector(".color").classList.remove("selected")
//   grafite.querySelector(".color").classList.remove("selected")
//   blue.querySelector(".color").classList.remove("selected")

//   imge.classList.add("changing")
//   imge.setAttribute("src", `img/iphone_${id}.jpg`)
//   setTimeout(() => {
//     imge.classList.remove("changing")
//   }, 200)
// })

// silver.addEventListener("click", (e) => {
//   const button = e.target
//   const id = button.getAttribute("id")
//   silver.querySelector(".color").classList.add("selected")

//   green.querySelector(".color").classList.remove("selected")
//   golden.querySelector(".color").classList.remove("selected")
//   grafite.querySelector(".color").classList.remove("selected")
//   blue.querySelector(".color").classList.remove("selected")

//   imge.classList.add("changing")
//   imge.setAttribute("src", `img/iphone_${id}.jpg`)
//   setTimeout(() => {
//     imge.classList.remove("changing")
//   }, 200)
// })

// golden.addEventListener("click", (e) => {
//   const button = e.target
//   const id = button.getAttribute("id")
//   golden.querySelector(".color").classList.add("selected")

//   green.querySelector(".color").classList.remove("selected")
//   silver.querySelector(".color").classList.remove("selected")
//   grafite.querySelector(".color").classList.remove("selected")
//   blue.querySelector(".color").classList.remove("selected")

//   imge.classList.add("changing")
//   imge.setAttribute("src", `img/iphone_${id}.jpg`)
//   setTimeout(() => {
//     imge.classList.remove("changing")
//   }, 200)
// })

// grafite.addEventListener("click", (e) => {
//   const button = e.target
//   const id = button.getAttribute("id")
//   grafite.querySelector(".color").classList.add("selected")

//   green.querySelector(".color").classList.remove("selected")
//   silver.querySelector(".color").classList.remove("selected")
//   golden.querySelector(".color").classList.remove("selected")
//   blue.querySelector(".color").classList.remove("selected")

//   imge.classList.add("changing")
//   imge.setAttribute("src", `img/iphone_${id}.jpg`)
//   setTimeout(() => {
//     imge.classList.remove("changing")
//   }, 200)
// })

// blue.addEventListener("click", (e) => {
//   const button = e.target
//   const id = button.getAttribute("id")
//   blue.querySelector(".color").classList.add("selected")

//   green.querySelector(".color").classList.remove("selected")
//   silver.querySelector(".color").classList.remove("selected")
//   golden.querySelector(".color").classList.remove("selected")
//   grafite.querySelector(".color").classList.remove("selected")

//   imge.classList.add("changing")
//   imge.setAttribute("src", `img/iphone_${id}.jpg`)
//   setTimeout(() => {
//     imge.classList.remove("changing")
//   }, 200)
// })

// // Usando funções
// const buttons = document.querySelectorAll("#image-picker li")
// const image = document.querySelector("#product-image")

// function removeClass() {
//   const removeSelect = document.querySelectorAll("#image-picker li")
//   removeSelect.forEach((button) => {
//     button.querySelector(".color").classList.remove("selected")
//   })
// }

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     removeClass()

//     const btn = event.target

//     const myId = btn.getAttribute("id")

//     btn.querySelector(".color").classList.add("selected")

//     image.classList.add("changing")
//     image.setAttribute("src", `img/iphone_${myId}.jpg`)
//     setTimeout(() => {
//       image.classList.remove("changing")
//     }, 200)
//   })
// })
