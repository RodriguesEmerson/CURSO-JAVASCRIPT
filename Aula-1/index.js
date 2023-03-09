
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
console.log(nome, idade, servico, rua, numero)