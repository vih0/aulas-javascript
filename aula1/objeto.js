const pessoa = {
    nome: 'Pedro',
    idade: 10,
    falando: () => {
        console.log('asdasd')
    }
}

pessoa.nome = 'manel'
pessoa.altura = 1.84
delete pessoa.altura
console.log(pessoa.falando())