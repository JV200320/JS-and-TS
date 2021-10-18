// const request = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest()
//     // Faz requisição
//     xhr.open(obj.method, obj.url, true)
//     // No post adiciona a linha abaixo para enviar dados
//     xhr.send()

//     xhr.addEventListener('load', () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText)
//       } else {
//         reject({
//           // Status do xhr
//           code: xhr.status,
//           // Msg do status
//           msg: xhr.statusText
//         })
//       }
//     })
//   })
// }

document.addEventListener('click', e => {

  e.preventDefault()

  const element = e.target
  const tag = element.tagName.toLowerCase()

  if (tag === 'a') {
    loadPage(element)
  }
})

async function loadPage(element) {
  const href = element.getAttribute('href')

  try {
    const res = await fetch(href)
    if (res.status !== 200) throw new Error('Erro 404!!!')
    const html = await res.text()
    loadResult(html)
  } catch (err) {
    console.error(err)
  }
}

function loadResult(res) {
  const resultado = document.querySelector('.resultado')
  resultado.innerHTML = res
}



fetch('./page1.html')
  .then(res => {
    if (res.status !== 200) {
      throw new Error('Meu 404')
    }
    return res.text()
  })
  .then(res => console.log(res))
  .catch(e => console.error(e))
