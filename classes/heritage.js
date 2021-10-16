class EletronicDevice {

  constructor(name) {
    this.name = name
    this.turnedOn = false
  }

  turnOn() {
    if (this.turnedOn) {
      console.log(`O ${this.name} já está ligado.`)
      return
    }
    this.turnedOn = true
  }

  turnOff() {
    if (this.turnedOn) {
      this.turnedOn = false
      return
    }
    console.log(`O ${this.name} já está desligado.`)
  }
}

class Smartphone extends EletronicDevice {

  constructor(name, color, operational_system) {
    // Faz tudo que foi feito no método da classe mãe, no constructor ele é obrigatório.
    super(name)
    this.color = color
    this.operational_system = operational_system
  }

}

class Tablet extends EletronicDevice {
  constructor(name, hasWifi) {
    super(name)
    this.hasWifi = hasWifi
  }

  turnOn() {
    super.turnOn()
    console.log('Método ligar diferente.')
  }
}

const s1 = new Smartphone('Samsung', 'Vermelho', 'Android')
s1.turnOn()
s1.turnOn()
s1.turnOff()
s1.turnOff()
console.log(s1)
console.log('************************************')
const t1 = new Tablet('Ipad', true)
t1.turnOn()
t1.turnOn()
t1.turnOff()
t1.turnOff()
console.log(t1)

