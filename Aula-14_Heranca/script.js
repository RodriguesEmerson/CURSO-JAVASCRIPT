function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

//Cria um novo método no prototype de Produto.
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

//Cria um novo método no prototype de Produto.
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

//Função Construtora 'Camiseta'.
//Essa função esta linkada na função construtora 'Produto' através
//do Produto.call.
//O primeiro agurmento é o próprio elemento que a chamou, no caso, This,
//os outros agurmentos são os mesmos agumentos que Produto recebe,
//neste caso, 'nome' e 'preco'.
//Mas se for feito apenas dessa mandeira, o construtor, em vez de Camiseta
//Passa a ser 'Produto'.
function Camiseta(nome, preco){
    Produto.call(this, nome, preco);
}

//Seta o mesmo prototype da função construtora Produto, na função
//construtora Camiseta. Mas qualquer alteração de método ou adição
//de um novo método em Camiseta, não afeta o prototype de Produto.
Camiseta.prototype =  Object.create(Produto.prototype);

//Corrige o construtor da função. Agora, o construtor volta a ser 'Camiseta'.
//Deve estar abaixo do código acima;
Camiseta.prototype.constructor = Camiseta;

//Agora, este método, sobrecreve o método 'aumento' do prototype de 'Produto',
//porém apenas para a função construtora 'Camiseta', em 'Produto', os prototypes
//permanecem sem alterações.
Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
}

//Istancia um novo objeto com os dados dos argumentos.
const camiseta = new Camiseta('Regata', 80);

//Usa o método 'aumento' que está no prototype.
camiseta.aumento (10)
// console.log(camiseta)


function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);

Caneca.prototype.constructor = Caneca;

const primeiraCaneca = new Caneca('Caneca1', 25, 'Plástico');
primeiraCaneca.aumento(100);

console.log(primeiraCaneca)