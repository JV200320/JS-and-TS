//defineProperty / defineProperties
function Produto(nome, preco, estoque) {

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // Mostra a chave ou não
    value: estoque, // Valor da propriedade
    writable: false, // Pode ou não alterar o valor
    configurable: true // Configurável ou não, a chave não pode ser reconfigurada nem apagada
  })

  Object.defineProperties(this, {
    nome: {
      enumerable: true,
      value: nome,
      writable: false,
      configurable: true
    },
    preco: {
      enumerable: true,
      value: preco,
      writable: false,
      configurable: true
    }
  })
}