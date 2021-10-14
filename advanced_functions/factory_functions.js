// Factory Function
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ')
    },
    fala(assunto) {
      return `${this.nome} está falando ${assunto}`
    },
    altura: a,
    peso: p,
    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2)
      return indice.toFixed(2)
    }
  }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 82)
p1.nomeCompleto = 'João Souza Lucena'
console.log(p1.nomeCompleto)
console.log(p1.nome)
console.log(p1.sobrenome)
