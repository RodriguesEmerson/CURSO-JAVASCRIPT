
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

// let arr = [ [1, 2, 3],
//             [4, 5, 6],
//             [7, 8, -13]
//         ]
let arr =[
    [6 ,6, 7, -10, 9, -3, 8, 9, -1],
    [9, 7, -10, 6, 4, 1, 6, 1, 1],
    [-1, -2, 4, -6, 1, -4, -6, 3, 9],
    [-8, 7, 6, -1, -6, -6, 6, -7, 2],
    [-10, -4, 9, 1, -7, 8, -5, 3, -5],
    [-8, -3, -4, 2, -3, 7, -5, 1, -5],
    [-2, -7, -4, 8, 3, -1, 8, 2, 3],
    [-3, 4, 6, -7, -7, -8, -3, 9, -6],
    [-2, 0, 5, 4, 4, 4, -3, 3, 0],
]

function diagonalDifference(arr) {

    let arLen = arr.length - 1;
    console.log('arrrr' + arr.length)
    const result0 = somArr1();
    const result = somArr2();

    function somArr1(){
        let som = 0;
        for(let i = 0; i <= arLen; i++){
            const atualNumber = arr[i][i];
            console.log(atualNumber)
            if (atualNumber < 0) {
                const absAtualNumber = Math.abs(atualNumber)
                som -= absAtualNumber
            }else{
                som += atualNumber
            }
        }
        return som;
        
    }


    function somArr2(){
        let som = 0;
        let cont = 0;
        for(let i = arLen; i >= 0; i--){
            const atualNumber = arr[cont][i];
            //console.log(atualNumber)
            if (atualNumber < 0) {
                const absAtualNumber = Math.abs(atualNumber)
                som -= absAtualNumber
            }else{
                som += atualNumber
            }
            cont++
        }
        //console.log('========================' + som)
        return som;
    }

    //console.log(Math.abs(result0 - result))
}
diagonalDifference(arr);