const Pessoa = require('./Pessoa')
// Filter sempre retorna o array com a mesma quantidade de elementos ou menos.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arrFiltered = arr1.filter((element, index, array) => {
  // console.log(element, index, array)
  return element > 5
})

let arrFiltered2 = arr1.filter(element => element <= 5)

// console.log(arr1)
// console.log(arrFiltered)
// console.log(arrFiltered2)

const pessoas = [
  new Pessoa('Luiz', 62),
  new Pessoa('Luiza', 52),
  new Pessoa('Arthur', 42),
  new Pessoa('Felipe', 32),
  new Pessoa('João', 22),
  new Pessoa('Maria', 12),
  new Pessoa('Fernando', 20)
]

let pessoasFiltered = pessoas.filter(pessoa => pessoa.age > 40)

console.log(pessoasFiltered)
pessoasFiltered.forEach(pessoa => pessoa.greet())
pessoasFiltered.forEach(pessoa => console.log(pessoa.getYearOfBirth()))