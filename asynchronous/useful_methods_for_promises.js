// Promise.all / Promise.race / Promise.resolve / Promise.reject

function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
  // Resolve = Sucesso
  // Reject = Falha
  return new Promise((resolve, reject) => {

    if (typeof msg !== 'string') {
      reject('Estou no ERRO')
      // A função para de ser executada após o reject
      return
    }

    setTimeout(() => {
      // Resolve e Reject retornam o valor passado no parâmetro
      resolve(msg + ' /Passei na promise')
    }, time);
  })

}

const promises = [
  // 'Primeiro valor',
  wait('Eita1', rand(1, 5)),
  wait('Eita2', rand(1, 5)),
  wait('Eita3', rand(1, 5)),
  // wait(200, 1000),
  // 'Outro valor'
]
// Executa todas as promises e retorna o array com todos os valores retornados
Promise.all(promises)
  .then(value => {
    console.log(value)
  })
  .catch(err => console.log(err))

// Executa todas e não retorna as promises na ordem, a primeira que resolver ele retorna (apenas uma)
// Se descomentar a linha 29 ou 34 elas serão sempre retornadas
// No caso da linha 33 descomentada o erro sempre será retornado primeiro pois o reject está fora
// do timeout
Promise.race(promises)
  .then(res => console.log(res))

function downloadPage() {
  const inCache = true

  if (inCache) {
    // Já entrega a promise resolvida
    // O Promise.reject faz a msm coisa mas para o reject
    return Promise.resolve('Página em cache')
  } else {
    // Começa a resolver a promise para depois ser resolvida ou rejeitada
    return wait('Dowload feito', 3000)
  }

}

downloadPage().then(msg => console.log(msg))
