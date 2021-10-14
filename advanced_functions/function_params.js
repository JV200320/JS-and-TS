// Arguments funciona apenas em functions declaradas dessa forma
function func() {
  console.log(arguments)
}

func('Valor')

function sumAll() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento
  }

  return total
}

console.log(sumAll(1, 2, 3, 4, 5))

// Usando rest operator em parâmetros, o parâmetro rest deve ser o último

function rest(a, b, c, ...rest) {
  console.log(a, b, c, rest)
  console.log(rest)
  console.log(...rest)
}

rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
