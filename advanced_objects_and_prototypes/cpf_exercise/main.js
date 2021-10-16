import { CPF } from './CPF/index.js'

let cpf = new CPF(window.prompt('Digite o cpf: '))

alert(cpf.isValid() ? 'O cpf é válido' : 'O cpf é inválido')

console.log(cpf)
