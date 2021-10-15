function Pessoa(name, age) {
  this.name = name
  this.age = age

  this.greet = () => {
    console.log(`Olá ${this.name}!`)
  }

  this.getYearOfBirth = () => 2021 - this.age

}

module.exports = Pessoa;