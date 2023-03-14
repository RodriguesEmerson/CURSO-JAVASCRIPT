function* generator(){
    yield function(){
        console.log('Teste1')
    };
    yield 'Emerson'
}

let g1 = generator();

let func1 = g1.next().value;
let func2 = g1.next().value;

func1();
console.log(func2);