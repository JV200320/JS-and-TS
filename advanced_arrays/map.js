const Pessoa = require('./Pessoa')

// Map altera valores do array
// Não altera o array original, mas retorna um array modificado
// O valor do array recebe o valor retornado pelo map

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr2 = arr1.map(value => value * 2)

console.log(arr2)

const pessoas = [
  new Pessoa('Luiz', 62),
  new Pessoa('Luiza', 52),
  new Pessoa('Arthur', 42),
  new Pessoa('Felipe', 32),
  new Pessoa('João', 22),
  new Pessoa('Maria', 12),
  new Pessoa('Fernando', 20)
]

let pessoasAte5Letras = pessoas.map(pessoa => {
  if (pessoa.name.length > 5) {
    return pessoa.name.slice(0, 5)
  }
  return pessoa.name
})

console.log(pessoasAte5Letras)

let pessoasComID = pessoas.map((pessoa, index) => {
  pessoaCopiada = { ...pessoa }
  pessoaCopiada['ID'] = index + 1
  return pessoaCopiada
})

console.log(pessoasComID)
console.log(pessoas)