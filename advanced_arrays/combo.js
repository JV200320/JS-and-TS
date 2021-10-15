// Retorna a soma do dobro de todos os pares
// Filter para filtrar pares
// Map para dobrar pares
// Reduce para somar tudo

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const evenNumbers = numbers.filter(number => number % 2 === 0)

const doubleEvenNumbers = evenNumbers.map(evenNumber => evenNumber * 2)

const result = doubleEvenNumbers.reduce((total, number) => total += number)

console.log(result)
