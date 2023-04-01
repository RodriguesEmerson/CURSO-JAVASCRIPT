
function Pessoa(nome, sobrenome){ //<-- Função Construtora
    this.nome = nome;
    this.sobrenome = sobrenome;

    //Este método está dentro da função em si
    //Este sempre será chamado primeiro, antes do prototype.
    this.nomeCompleto = () => 'Primeiro: ' + this.nome + ' ' + this.sobrenome;
}

//Aqui é insrido o mesmo método, porém no prototype da função.
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Emerson', 'Rodrigues'); //<- Instancia
console.dir(pessoa1.nomeCompleto())