let repeater = (txt, repeat = 5) => {
  for (let a = 1; a < repeat; a += 1) {
    console.log(txt)
  }
}

repeater("Freed")
repeater("Freed", 20)
