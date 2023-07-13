let btnAdd = document.querySelector('#cadastrar')
let input = document.querySelector('#nome')
let inputEmail = document.querySelector('#email')


btnAdd.addEventListener('click',()=>{
  const info ={
    nome:input.value,
    email: inputEmail.value
  }
  localStorage.setItem('info',JSON.stringify(info))
})
let conteudo = document.querySelector('#conteudo')
let info =localStorage.getItem('info')
let infoFormat = JSON.parse(info)
conteudo.textContent = infoFormat.nome 
// 
localStorage.removeItem('info')
localStorage.clear()



