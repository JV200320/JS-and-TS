/*
Object.entries() -> Retorna valores e chaves de um objeto, aqueles que são numeráveis
Object.assign(destino, sourceObject) -> Copia o objeto
Object.getOwnPropertyDescriptor(object, 'property') -> Pega as descrições das propriedades do Objeto
... (spread) -> Copia o objeto
Objecy.keys() -> Retorna as chaves
Objecy.values() -> Retorna os valores das chaves
Objecy.freeze() -> Congela o objeto
Object.defineProperty() -> Define uma propriedade
Object.defineProperties() -> Define várias propriedade
*/

const produto = { nome: 'Caneca', preco: 1.8 }
// const outraCoisa = produto // Faz referência ao endereço da memória, se alterar 1 altera o outro
const outraCoisa = { ...produto } // Copia o objeto, se alterar 1 não altera o outro
// const outraCoisa = Object.assign({}, produto) // Copia o objeto, se alterar 1 não altera o outro


outraCoisa.nome = 'João'
outraCoisa.preco = 2.5

console.log(outraCoisa)
console.log(produto)

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

console.log(Object.entries(produto))

Object.defineProperty(produto, 'nome', {
  writable: false,
  enumerable: false,
  configurable: false,
  value: 'Mudei'
})

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

produto.nome = 'Teste'
delete produto.nome
console.log(produto.nome)

console.log(Object.entries(produto))
