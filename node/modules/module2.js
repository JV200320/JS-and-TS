module.exports = class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    return `${this.nome} está falando.`
  }
}