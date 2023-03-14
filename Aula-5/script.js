let test = {
    nome: 'Emerson',
    sobrenome: 'Rodrigues',

    get say(){
        console.log(`Name: ${this.nome}`)
        console.log(`Lastname: ${this.sobrenome}`)
    }
}

test.say;

let array = ['Emerson', 'Rodigues']

console.log(array.join(' '))