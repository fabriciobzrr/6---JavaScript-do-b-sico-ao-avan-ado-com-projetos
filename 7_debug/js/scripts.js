//  1 - use scrict
"use scrict"

// não permite declarar variaveis sem var let ou const

function myList(arr) {
  if (arr.length === 0) {
    console.log("O array precisa ter pelo menos um elemento.")
  } else {
    if (arr.length === 1) {
      console.log(`O array tem ${arr.length} elemento.`)
    } else {
      console.log(`O array tem ${arr.length} elementos.`)
    }
  }
}

myList([1])
