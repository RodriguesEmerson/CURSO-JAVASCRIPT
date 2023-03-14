function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    const nomeCompleto = this.nome + this.sobrenome; //Inacessível do escopo "Atributo Privado"

    this.fullName = nomeCompleto; //Acessível fora do escopo "Atributo Público"
}

let user1 = new Pessoa('Emerson', 'Rodrigues');
let user2 = new Pessoa('Erika', 'Rodrigues')

console.log(user2.nomeCompleto)