function rand(min = 0, max = 3) {
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

async function main() {
  // Executa até encontrar erro, daí vai pro catch
  try {
    const eita1 = await wait('Eita 1', rand())
    const eita2 = await wait('Eita 2', rand())
    const eita3 = await wait('Eita 3', rand())
    const err = await wait(234, rand())
    console.log(eita1)
    console.log(eita2)
    console.log(eita3)
    console.log(err)
  } catch (error) {
    console.log(error, ' I\'m inside the catch in main function')
  }
}
main()