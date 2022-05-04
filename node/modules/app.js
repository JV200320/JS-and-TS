const module1 = require('./module1')
const Pessoa = require('./module2')

console.log(module1.falaNome())
console.log(module1.nome)
console.log(module1.sobrenome)

const p1 = new Pessoa('João')
console.log(p1)
console.log(p1.falar())
