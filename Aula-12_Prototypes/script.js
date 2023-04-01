
//Inserindo um objeto dentro do Prototype de outro objeto
const objA = {
    keyA: 'A',
}
const objB = {
    keyB: 'B',
}

Object.setPrototypeOf(objB, objA)
// console.log(objA.keyA);



function Calcula(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
}

Calcula.prototype.somar = function(n1, n2){
    this.num2 = n2 + n2;
}
const p1 = new Calcula(10, 30);
p1.somar(20, 30);

// console.log(p1)