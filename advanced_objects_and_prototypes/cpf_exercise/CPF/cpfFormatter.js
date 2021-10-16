export function formatCpf(cpf) {
  cpf = cpf.replace(/\D+/g, '')
  return cpf
}
