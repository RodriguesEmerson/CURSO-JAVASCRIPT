
/**A maior vantagem que vi até agora das class sobre as factory functions, é a questão
 * de não precisar setar o método no prototype da função (functionName.prototype.method = funtion(param){bla bla bla});
 * bantando apenas declarar como um método em um objeto mesmo.
 */

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    //Este método é criado no prototype da função. 
    //Chamado também de Método de Instância
    comprimenta(){
        console.log(`Olá, ${this.nome}`)
    }


    //Esté método 'static' é basicamente uma fução solta dentro da classe,
    //ela não tem acesso ao this instanciado no constructor, mas o this se 
    //refere a class em si, e é chamada de forma diferente.
    //Como se a Classe Pessa fosse um objeto normal.
    static soma(n1, n2){
        return n1 + n2;
    }
}

const pessoa = new Pessoa('Emerson', 'Rodrigues');

pessoa.comprimenta();

console.log(Pessoa.soma(2, 20))