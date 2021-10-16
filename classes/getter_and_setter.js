// O Symbol retorna algo diferente toda vez que é chamado,
// por exemplo Symbol() === Symbol() é false. Podemos passar no parâmetro um nome para podermos
// identificar o Symbol, daí acessamos o this[_speed] onde _speed é um Symbol sempre diferente.
const _speed = Symbol('velocidade')

class Car {
  constructor(name) {
    this.name = name
    this[_speed] = 0
  }
  // Getter
  get velocidade() {
    return this[_speed]
  }
  // Setter
  set velocidade(value) {
    if (typeof value !== 'number') return
    if (value >= 100 || valor <= 0) return

    this[_speed] = value
  }

  accelerate() {
    if (this[_speed] >= 100) {
      console.log('Velocidade máxima atingida!')
      return
    }
    this[_speed]++
  }

  break() {
    if (this[_speed] <= 0) {
      return
    }
    this[_speed]--
  }
}

const c1 = new Car('Fusca')

// for (let idx = 0; idx <= 110; idx++) {
//   c1.accelerate()
// }

c1.velocidade = 300

console.log(c1)

class Person {

  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
  }

  get fullName() {
    return `${this.name} ${this.lastName}`
  }

  set fullName(value) {
    value = value.split(' ')
    this.nome = value.shift()
    this.lastName = value.join(' ')
  }
}

const p1 = new Person('João', 'Lucena')

console.log(p1.fullName)
p1.fullName = 'João Victor de Souza Lucena'
console.log(p1.fullName)
console.log(p1.name)
console.log(p1.lastName)
