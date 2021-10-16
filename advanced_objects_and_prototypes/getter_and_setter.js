function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco
  // Não precisa do value nem do writable desde que teremos métodos responsáveis por isso.
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,
    // Getter
    get: function () {
      return estoque
    },
    // Setter
    set: function (value) {
      if (typeof value !== 'number') {
        throw new TypeError('Estoque deve ser um número.')
      }
      estoque = value
    }
  })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(p1)
console.log(p1.estoque)
p1.estoque = 200
console.log(p1.estoque)