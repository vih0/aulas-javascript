// let titulo = document.querySelector('.cabecalho')
let buttonCadastro = document.querySelector('#cadastrar')
let header = document.querySelector('header')

// buttonCadastro.setAttribute('disabled', 'true')

// let link = document.querySelector('a')
// link.setAttribute('href', 'https://youtube.com')
// buttonCadastro.removeAttribute('disabled')

  // buttonCadastro.addEventListener('mouseover', ()=>{
  //   console.log('manel é lindo e foi clicado')
  // })

  const paragrafo = document.createElement('p')
  const titulo = document.createElement('h1')
  titulo.textContent = 'oi'
  paragrafo.textContent = 'manel é feio'
  header.append(paragrafo, titulo)

  console.log(paragrafo)
