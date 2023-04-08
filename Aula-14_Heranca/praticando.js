function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

const bolsa = new Produto('Bolsa', 100);
bolsa.desconto(25);
// console.log(bolsa);

function Caneca(nome, preco, tamanho){
    Produto.call(this, nome, preco);
    this.tamanho = tamanho;
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca1 = new Caneca('Caneca1', 50, '10cm');


caneca1.desconto(10)

// console.log(caneca1)

function Calculadora(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
}

Calculadora.prototype.adicao = function(num1, num2){
    this.resultado = this.num1 + this.num2
}

function Add(num1, num1){
    Calculadora.call(this, num1, num1);
    this.resultado;
}
Add.prototype = Object.create(Calculadora.prototype);
Add.prototype.constructor = Add;

const conta1 = new Add(12, 12);
conta1.adicao();
console.log(conta1)



/**OBS: Na minha opinião, acho que este .call faz a mesma função do 'super' em classes quando estão herdando 
 * outra classe através do 'extends', com a diferença que é preciso passar o 'this' como primeiro argumento.
 */