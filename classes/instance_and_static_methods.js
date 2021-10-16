class RemoteControl {

  constructor(tv) {
    this.tv = tv
    this.volume = 0
  }

  // Método de instância
  volumeUp() {
    this.volume += 2
  }

  // Método de instância
  volumeDown() {
    this.volume -= 2
  }

  // Não tem acesso aos métodos ou propriedades das instâncias
  // Método estático
  static changeBattery() {
    console.log('Trocando')
  }

}

const c1 = new RemoteControl('Samsung')
const c2 = new RemoteControl('LG')

c1.volumeUp()
c1.volumeUp()
c2.volumeUp()
c2.volumeUp()

console.log(c1)
console.log(c2)
// Não utilizamos o new pois não vamos instanciar a classe.
RemoteControl.changeBattery() // Funciona
// c1.changeBattery() // Dá erro

// Math é uma classe com métodos estáticos, por exemplo o random

let randomNumber = Math.random()

console.log(randomNumber)
