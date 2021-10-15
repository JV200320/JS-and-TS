const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let double = []

let retorno = a1.forEach(number => {
  double.push(number * 2)
  return number * 2
})

console.log(a1)
console.log(retorno)
console.log(double)
