export function validateCpf(cpf) {
  if (cpf.value.length !== 11) return false
  if (!cpf.value.length) return false
  if (cpf.isSequence()) return false


  cpf = Array.from(cpf.value)

  let firstVerifierDigit = Number(cpf[cpf.length - 2])
  let secondVerifierDigit = Number(cpf[cpf.length - 1])

  let NineFirstDigits = cpf.slice(0, 9)
  let TenFirstDigits = cpf.slice(0, 10)

  let num = 10
  let total
  let result

  total = NineFirstDigits.reduce((total, digit) => {
    total += digit * num
    num--
    return total
  }, 0)

  result = 11 - (total % 11)

  if (result > 9) {
    result = 0
  }

  if (result !== firstVerifierDigit) {
    return false
  }

  num = 11

  total = TenFirstDigits.reduce((total, digit) => {
    total += digit * num
    num--
    return total
  }, 0)

  result = 11 - (total % 11)

  if (result > 9) {
    result = 0
  }

  if (result !== secondVerifierDigit) {
    return false
  }

  return true
}
