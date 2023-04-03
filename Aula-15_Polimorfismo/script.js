//O Polimorfismo é a capacidade de um método se comportar de maneira
//diference, dependendo da função que o chamar.

function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.deposito = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.sacar = function(valor){
    if(valor > this.saldo){
        console.log(`Valor Insuficiente! Saldo: R$${this.saldo}, você tentou sacar: R$${valor}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function(){
    console.log(`Agencia: ${this.agencia}, Conta: ${this.conta} | Saldo: R$${this.saldo}`)
}

const conta1 = new Conta(123, 321, 500);

function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

//Seta os prototypes de 'Conta' em 'CC'
CC.prototype = Object.create(Conta.prototype);
CC.prototype.coonstructor = CC;

//Sobrescreve o método sacar de 'Conta', mas apenas no contexto de 'CC';
CC.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Valor Insuficiente! Saldo: R$${this.saldo}, você tentou sacar: R$${valor}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
}


function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

//Seta os prototypes de 'Conta' em 'CP', que permanecem inalterados,
//pois foi sobrecrito apenas em 'CC'.
CP.prototype = Object.create(Conta.prototype);
CP.prototype.coonstructor = CP;

const cc = new CC(111, 222, 0, 100);
cc.deposito(200);
cc.sacar(310)


const cp = new CP(111, 222, 0);
cp.deposito(150);
cp.sacar(160)