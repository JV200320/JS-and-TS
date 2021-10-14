// Declaração de função (Function Hoisting)
// Engine do JS eleva funções declaradas dessa forma e vars para o início do arquivo.
sayMyName('João')
function sayMyName(name) {
  console.log('Seu nome é: ' + name)
}

// Functions são first-class objects, podem ser tratadas como dados
const souUmDado = function () {
  console.log('Sou um dado')
}

souUmDado()

function executaFunction(func) {
  console.log('Executando função passada como parâmetro: ')
  func()
}

executaFunction(souUmDado)

// Arrow Function
// OBS: Há uma diferença no this das funções arrow

const arrowFunc = () => {
  console.log('Arrow Function')
}

arrowFunc()

// Dentro de um objeto

const obj = {
  falar: function () {
    console.log('Falando...')
  }
}

obj.falar()

const obj2 = {
  falar() {
    console.log('Falando2...')
  }
}

obj2.falar()
