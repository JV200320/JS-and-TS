class Pessoa {

  constructor(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
  }

  falar() {
    console.log(`${this.nome} está falando`)
  }

  comer() {
    console.log(`${this.nome} está comendo`)
  }

  beber() {
    console.log(`${this.nome} está bebendo`)
  }

}

// Comparação com constructor functions

function Pessoa2(nome, sobrenome) {
  this.nome = nome
  this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`)
}

Pessoa2.prototype.comer = function () {
  console.log(`${this.nome} está comendo`)
}

Pessoa2.prototype.beber = function () {
  console.log(`${this.nome} está bebendo`)
}

// Comparação com constructor functions

const p1 = new Pessoa('João', 'Lucena')
const p2 = new Pessoa2('Fernando', 'Ayrton')

console.log(p1)
console.log(p2)
p1.comer()
p1.falar()
p1.beber()
p2.comer()
p2.falar()
p2.beber()
