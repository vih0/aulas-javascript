let container = document.querySelector("#container")
let form = document.querySelector("#formulario")
let buttonEnviar = document.querySelector("#enviar")
let nome = document.querySelector("#name")
let job = document.querySelector("#job")




// fetch('https://reqres.in/api/users').then((data) => {
//   return data.json()
// }).then((response) => {
//   listUsers(response)
// }).catch((error) => {
//   console.log('erro foi:', error)
// })

// function listUsers (users) {
//   console.log(users)
//   // const { data } = users
//   // data.forEach((user) => {
//   //   console.log(user)
//   // })
// }

function saudacao() {
  console.log("oi")
}


async function listUsers() {
  const url = 'https://reqres.in/api/users'

  try {
    const data = await fetch(url)
    const response = await data.json()
    const {  } = response
  } catch (error) {
    console.log(error)
  }
}
// listUsers()

async function createUser () {
  const url = 'https://reqres.in/api/users'

  try {
    let info = {
      name: nome.value,
      job: job.value,
    }
    const data = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info),
    })

    alert('usuario criado')
    return data;
  } catch (error) {
    console.log(error)
  }


}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  createUser()
})

