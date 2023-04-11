let i = 13
let j = 45
let k = 3

function findIt(i, j, k){

   
    let count = 0;
    const fim = j;

    for (let start = i; start <= fim; start++){
        const number = start;
        let array = number.toString().split('').reverse();
        let newNum = array.join();
        const reverseNum = Number(newNum.replace(/\,/g, ''));
    
        const diference = (number - reverseNum);

        if(diference % k === 0) count++



    }
    console.log(count)
    
}

findIt(i, j, k)