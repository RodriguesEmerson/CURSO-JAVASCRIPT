
/**Copiando um array para que cada um seja independete */
// let a = [ 1, 3, 4, 6]
// let b = [...a];
// b[0] = 'Teste';
// console.log(b)
 
/**Atribuição via Desestruturação Arrays */
// let arr = ['foi', 'teste', 'ola'];
// let [a, b, c] = arr;
// console.log(b)

/**Atribuição via Desestruturação Objects */
const user = {
    nome: 'Emerson',
    idade: 24,
    job: 'Developer',
    edereco: {
        rua: 'Exemple Street',
        numero: 321
    }
}
const {nome = 'Vazio', idade, job: servico, edereco: {rua, numero}} = user
// console.log(nome, idade, servico, rua, numero)

let arr = [ [1, 2, 3],
            [4, 5, 6],
            [7, 8, 13]
        ]


function diagonalDifference(arr) {
    const vert1 = [0, 1, 2];
    
    const result1 = somArr1();
    const result2 = somArr2();
    
    function somArr1(){
        let som = 0;
        let cont = 0;
        vert1.forEach(num => {
            const atualNumber = (arr[num][cont])
            som += atualNumber
            cont++
        })
        return som;
    }
    
    function somArr2(){
        let som = 0;
        let cont = 2;
        vert1.forEach(num => {
            const atualNumber = (arr[num][cont])
            som += atualNumber
            cont--
        })
        return som;
    }
    console.log('aqui: ' + result1, result2)
    console.log(result1 - result2);
}

diagonalDifference(arr)