// Valor por referência, se alterar em um também altera no outro

const numbers = [1, 2, 3]

let novo = numbers

numbers.pop()

delete numbers[1]

console.log(numbers)
console.log(novo)

// Para copiar utilizamos o ... ou o slice

novo = numbers.slice()
// novo = [...numbers]
novo.push('Teste')

console.log(numbers)
console.log(novo)
