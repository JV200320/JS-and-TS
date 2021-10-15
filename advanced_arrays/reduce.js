const Pessoa = require('./Pessoa')
// Reduce serve para reduzir todos os elementos do array para um único elemento

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const total = arr1.reduce((acumulador, valor, indice, array) => {
//   console.log(acumulador)
// }, 0) // Caso não seja passado um valor inicial para o acumulador ele assumirá o
//          valor do primeiro item do iterável.

// Soma todos os valores
// const total = arr1.reduce((acumulador, valor) => {
//   acumulador += valor
//   return acumulador // O retorno é o valor que o acumulador assumirá na próxima iteração e que
//                        será retornado após o último valor do array
// }, 0)
// console.log(total)

// Simula o filter
// const total = arr1.reduce((acumulador, valor) => {
//   if (valor % 2 === 0) {
//     acumulador.push(valor)
//   }
//   return acumulador
// }, [])
// console.log(total)

const pessoas = [
  new Pessoa('Luiz', 62),
  new Pessoa('Luiza', 52),
  new Pessoa('Arthur', 42),
  new Pessoa('Felipe', 32),
  new Pessoa('João', 22),
  new Pessoa('Maria', 12),
  new Pessoa('Fernando', 20)
]

// Retorna a pessoa mais velha
let maisVelha = pessoas.reduce((oldest, person) => {
  if (oldest.age < person.age) {
    return person
  }
  return oldest
})
console.log(maisVelha)
