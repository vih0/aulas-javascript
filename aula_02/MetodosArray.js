const cidades= ['são luis','maraba','igarape grande','maioba']

const numeros =[1,2,3,4,5]
const triplo =numeros.forEach((numero)=>{
      return numero * 3
})

const dobro = numeros.map((numero)=>{
  if(numero===5){
    return numero*5
  }
  return numero * 2
})


const livros =[
  {nome:'morreu lendo',autor:'agatha christe'},
  {nome:'assim que acaba',autor:'agatha christe'},
  {nome:'por lugares incriveis',autor:'jenifer lopes'},
  {nome:'jogo dos trono',autor:'george o curioso'},
  {nome:'who is alasca?',autor:'joao verde'}
]
const filtrando = livros.filter((livro)=>{
  if(livro.autor === 'agatha christe'){
    return console.log(livro.nome )
  } 
})

console.log(filtrando)


