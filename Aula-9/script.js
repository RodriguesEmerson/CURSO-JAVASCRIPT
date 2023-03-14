//FIZ POR CONTA PROPRIA E NÃO PELO CURSO, OU SEJA, EU JÁ SABIA. 14-03-2023: 10:20H

let numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

let filt = numeros.filter(function(value){
    return value > 10;
})

let filt2 = numeros.filter( value => value > 10);

// console.log(filt)
// console.log(filt2)

let users = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
]

let userfilt = users.filter(function(value){
    return value.nome.length > 5;
})

let userfilt2 = users.filter( value => value.nome.length > 5);

console.log(users)
console.log(userfilt2)