function formatCpf(cpf) {
  cpf = cpf.replace(/\D+/g, '')
  return cpf
}

export default class CPF {

  constructor(cpf) {
    Object.defineProperty(this, 'value', {
      writable: false,
      configurable: false,
      value: formatCpf(cpf)
    })
  }

  isValid() {

    let notValidCpfLength = this.value.length !== 11

    if (!this.value) return false
    if (notValidCpfLength) return false
    if (this.isSequence()) return false

    let cpf = Array.from(this.value)

    let NineFirstDigits = cpf.slice(0, 9)
    let TenFirstDigits = cpf.slice(0, 10)

    let originalFirstVerifierDigit = Number(cpf[cpf.length - 2])
    let originalSecondVerifierDigit = Number(cpf[cpf.length - 1])

    let firstVerifierDigit = this.calculateVerifierDigit(NineFirstDigits)
    if (firstVerifierDigit !== originalFirstVerifierDigit) return false

    let secondVerifierDigit = this.calculateVerifierDigit(TenFirstDigits)
    if (secondVerifierDigit !== originalSecondVerifierDigit) return false

    return true
  }

  // Private method
  isSequence() {
    const sequencia = this.value[0].repeat(this.value.length)
    return sequencia === this.value
  }

  // Private method
  calculateVerifierDigit(digits) {

    let num = digits.length + 1
    let total
    let result

    total = digits.reduce((total, digit) => {
      total += digit * num
      num--
      return total
    }, 0)

    result = 11 - (total % 11)

    if (result > 9) {
      result = 0
    }

    return result
  }

}
