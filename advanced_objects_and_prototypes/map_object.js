const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' }
]

// Dessa forma o nosso objeto ordena as chaves pelos números
// const novasPessoas = {}

// for (const { id, nome } of pessoas) {
//   novasPessoas[id] = { id, nome }
// }

// Dessa forma a ordenação não ocorre e recuperamos os valores através do get pegamos
// através do set
const novasPessoas = new Map()

for (const { id, nome } of pessoas) {
  novasPessoas.set(id, { id, nome })
}

// Retorna arrays [chave, valor] quando iteramos em um Map
for (const [identifier, { id, nome }] of novasPessoas) {
  console.log(identifier)
  console.log(id)
  console.log(nome)
}

for (const identifier of novasPessoas.keys()) {
  console.log(identifier)
}

for (const { id, nome } of novasPessoas.values()) {
  console.log(id)
  console.log(nome)
}

novasPessoas.delete(2)

console.log(novasPessoas)
