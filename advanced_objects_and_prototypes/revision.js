// Object constructor
// Factory Functions / Constructor Functions

const pessoa1 = new Object()
pessoa1.nome = 'João'
pessoa1.sobrenome = 'Lucena'
pessoa1.idade = 21

const pessoa2 = {
  nome: 'João',
  sobrenome: 'Lucena',
  idade: 21
}

console.log(pessoa1)
console.log(pessoa2)
delete pessoa1.nome
delete pessoa2.nome
console.log(pessoa1)
console.log(pessoa2)

pessoa1.falarNome = function () {
  console.log(`${this.sobrenome} disse oi!`)
}

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade
}

pessoa1.falarNome()
console.log(pessoa1.getDataNascimento())

for (const chave in pessoa1) {
  console.log(pessoa1[chave])
}

// Object.freeze() Congela o objeto, suas propriedades passam a não poder sofrer alteração

pessoa1.sobrenome = 'ABC'
pessoa1.idade = 1092
console.log(pessoa1)
Object.freeze(pessoa1)
pessoa1.sobrenome = 'DEFG'
pessoa1.idade = 45
console.log(pessoa1)

// Também podemos fazer isso dentro da factory/constructor function com Object.freeze(this)
// Porém depois do freeze fica congelado e não muda, logo manipule tudo que deve ser manipulado
// antes dele.
