function Produto(nome, preco, estoque, estoquesafe){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
   
    Object.defineProperty(this, 'estoquesafe', {
        enumerable: true,     //Mostra a chave
        value: estoquesafe,   //A que se refere
        writable: false,      //O pode ou não ser alterado
        configurable: true    //Pode ou não apagar alguma propriedade deste objeto
    })


    Object.freeze(this)       //Impede que qualquer propriedade seja manipulada
                              //mesmo se a writable seja true.
}
let produto1 = new Produto('Chave', 15, 25, 5)
produto1.estoquesafe = 'Faca'
console.log(produto1)

console.log(Object.getOwnPropertyDescriptor(produto1, 'nome')) //Mostra as configurações
                                                               //do objeto

function Produto2(nome, preco, estoque, estoquesafe){
   
    Object.defineProperties(this, {
        nome:{
            enumerable: true,     
            value: nome,   
            writable: false,      
            configurable: false   
        },
        preco:{
            enumerable: true,     
            value: preco,   
            writable: false,      
            configurable: false   
        },
        estoque:{
            enumerable: true,     
            value: estoque,   
            writable: false,      
            configurable: true   
        },
        estoquesafe:{
            enumerable: true,     
            value: estoquesafe,   
            writable: true,      
            configurable: true   
        }, 
    })

}

let produto2 = new Produto('Chave', 15, 25, 5)