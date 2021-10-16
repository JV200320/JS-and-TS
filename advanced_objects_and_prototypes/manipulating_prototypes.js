// Veja no console do navegador o __proto__ ou o [[Prototype]]

const objA = {
  chaveA: 'A'
  // __proto__: Object.prototype
}

const objB = {
  chaveB: 'B'
  // __proto__: Object.prototype
}

const objC = new Object()

objC.chaveC = 'C'

// Muda o prototype do objeto
let prototype = Object.getPrototypeOf(objB)
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)
console.dir(objB)
console.dir(objC)
console.dir(objC.chaveB)
console.dir(objC.chaveA)
console.log(prototype)


function Produto(nome, preco) {
  this.nome = nome
  this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
  this.preco *= 1 - percentual
}

Produto.prototype.aumento = function (percentual) {
  this.preco *= 1 + percentual
}

const p1 = new Produto('Camiseta', 50)

const p2 = {
  nome: 'Caneca',
  preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)

p1.desconto(0.1)
// p1.aumento(1)
console.log(p1)


p2.desconto(0.1)
// p2.aumento(1)
console.log(p2)

const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  }
})

p3.aumento(0.2)
console.log(p3)