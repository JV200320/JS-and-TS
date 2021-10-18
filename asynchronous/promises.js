function wait(msg, time) {
  // Resolve = Sucesso
  // Reject = Falha
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Resolve e Reject retornam o valor passado no parâmetro
      if (time > 3) {
        reject(msg + 'rejeitada')
      }
      resolve(msg)
    }, time);
  })

}

function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

wait('Eita1', rand(1, 3))
  .then(msg => {
    console.log(msg, 'then')
    return wait('Eita2', rand(1, 3))
  })
  .then(msg => {
    console.log(msg, 'then')
    return wait('Eita3', rand(1, 3))
  })
  .then(msg => console.log(msg))
  .catch(msg => console.log(msg, 'catch'))
