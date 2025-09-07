const somaNum = (...nums) => {
  let result = 0
  for (num of nums) {
    result += num
  }
  return result
}

console.log(somaNum(2, 5, 10))
