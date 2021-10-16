function Product(name, price) {
  this.name = name
  this.price = price
}

Product.prototype.raise = function (amount_to_raise) {
  this.price += amount_to_raise
}

Product.prototype.discount = function (amount_to_lower) {
  this.price -= amount_to_lower
}

function T_Shirt(name, price, color) {
  Product.call(this, name, price)
  this.color = color

}

T_Shirt.prototype = Object.create(Product.prototype)

T_Shirt.prototype.constructor = T_Shirt

T_Shirt.prototype.raise = function (percentage) {
  this.price = this.price * (1 + percentage)
}

function Cup(name, price, material, amount_available) {
  Product.call(this, name, price)
  this.material = material

  Object.defineProperty(this, 'amount_available', {
    enumerable: true,
    configurable: false,
    get: function () {
      return amount_available
    },
    set: function (new_value) {
      if (typeof new_value !== 'number') {
        throw new TypeError('Available amount can only be of type number.')
      }
      amount_available = new_value
    }
  })
}

Cup.prototype = Object.create(Product.prototype)
Cup.prototype.constructor = Cup


const t_shirt = new T_Shirt('Regata', 7.5, 'Preta')
const cup = new Cup('Xícara', 7.5, 'Alumínio', 12)
const product = new Product('Generic', 7.5)

t_shirt.raise(1)

cup.amount_available = 10

console.log(t_shirt)
console.log(cup)
console.log(cup.amount_available)
console.log(product)