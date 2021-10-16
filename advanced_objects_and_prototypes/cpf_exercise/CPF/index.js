import { formatCpf } from './cpfFormatter.js'
import { validateCpf } from './validator.js'

export function CPF(cpf) {

  Object.defineProperty(this, 'value', {
    get: function () {
      return formatCpf(cpf)
    },
    set: function (new_cpf) {
      throw new Error('O valor do cpf não pode ser alterado.')
    },
    enumerable: true,
    configurable: false
  })
}

CPF.prototype.isValid = function () {
  return validateCpf(this)
}

CPF.prototype.isSequence = function () {
  const sequencia = this.value[0].repeat(this.value.length)
  return sequencia === this.value
}
