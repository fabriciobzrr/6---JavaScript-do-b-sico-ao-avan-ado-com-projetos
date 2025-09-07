function testEscopo() {
  let a = 5
  if (true) {
    let a = 4
    if (true) {
      let a = 3
      if (true) {
        let a = 2
        if (true) {
          let a = 1
          console.log(a)
        }
        console.log(a)
      }
      console.log(a)
    }
    console.log(a)
  }
  console.log(a)
}
let a = 6
testEscopo()
console.log(a)
