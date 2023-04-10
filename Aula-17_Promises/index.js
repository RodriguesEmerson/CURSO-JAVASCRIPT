function promise(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(new Error);
            return;
        }
        setTimeout(() => {
            resolve(msg);
        }, tempo)
    })
}

promise('Mensagem - 1', 1000)
    .then(msg => {
        console.log(msg);
        return promise('Mensagem - 2', 1000);
    })
    .then(msg => {
        console.log(msg);
        return promise(111, 1000);
    })
    .catch(erro => {
        console.log(erro)
    });


//Promise.All ====================================

const array = [
    promise('Mensagem - 1', 1000),
    promise('Mensagem - 2', 1000),
    promise('3', 1000)
]

Promise.all(array)
    .then(valor => {
        console.log(valor)
    })
    .catch(erro => {
        console.log(erro)
    })


//Promise.resolve ====================================

function baixaPage(){
    const cache = false;

    if(cache){
        return Promise.resolve('Página em cache');
    }else{
        return promise('Página baixada com sucesso', 3000)
    }
}

baixaPage()
    .then(dados => {
        console.log(dados)
    })
    .catch(erro => console.log(erro));