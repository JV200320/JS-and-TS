// Função construtora é similar à função fábrica.
// Função construtora retorna objetos automaticamente.
// Na função construtora é necessário iniciar o nome dela com letra maiúscula. (Pessoa)
// É obrigatório utilizar a palavra new nas funções construtoras.
// O corpo da função construtora já representa o objeto em si.

function Pessoa(nome, sobrenome) {
  // Sem o this nossos métodos e variáveis se tornam privadas.
  const privado = 'Não posso ser acessado através do objeto.'


  this.nome = nome;
  this.sobrenome = sobrenome;

  this.falar = function () {
    console.log(`${this.nome} disse oi.`)
  }

}

let joao = new Pessoa('João', 'Lucena')
joao.falar()
