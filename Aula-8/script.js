//          -4       -3        -2        -1 
//           1        2         3         4
let arr = ['João', 'Maria', 'Joseph', 'Michael']

let removidos = arr.splice(2, 1, 'Luiz')
//              arr.splice(index, delete, add)
//console.log(arr, removidos)



/**Concatenando Arrays */
let arr2 = [1, 3, 5]
let arr3 = [2, 4, 6]

let a = arr2.concat(arr3);
let b = arr.concat([7, 8, 9], arr3, 'Emerson')

let c = [...arr2, ...[7, 8, 9], 'Emerson']


// console.log(a)
// console.log(b)
console.log(c)