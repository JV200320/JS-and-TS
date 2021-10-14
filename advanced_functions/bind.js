// Funções possuem métodos e um deles é o bind, o qual muda o this da função para
// o valor do parâmetro

// Situação sem o bind

// function criarPessoa(nome, idade) {
//   return {
//     nome,
//     idade,
//     andar() {
//       console.log(this) // Se refere ao objeto pessoa
//       return function retornarFraseDoAndar(params) {
//         console.log(this) // Se refere ao global
//       }
//     }
//   }
// }

// let p1 = criarPessoa('João', 18)
// let func = p1.andar()
// func()

// Situação com o bind

// function criarPessoa(nome, idade) {
//   return {
//     nome,
//     idade,
//     andar() {
//       console.log(this) // Se refere ao objeto pessoa
//       return function retornarFraseDoAndar(params) {
//         console.log(this) // Se refere ao global
//       }.bind(this)
//     }
//   }
// }

// let p1 = criarPessoa('João', 18)
// let func = p1.andar()
// func()

// A arrow function preserva o this

function criarPessoa(nome, idade) {
  return {
    nome,
    idade,
    andar() {
      console.log(this) // Se refere ao objeto pessoa
      return () => {
        console.log(this) // Se refere ao global
      }
    }
  }
}

let p1 = criarPessoa('João', 18)
let func = p1.andar()
func()