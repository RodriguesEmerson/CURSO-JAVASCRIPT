
let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    const positives = findPositives();
    const negatives = findNegatives();
    const zeros = findZeros();
    const arrLen = arr.length;
    console.log('Array length: ' + arrLen)
    
    function findPositives(){
        let cont = 0;
        arr.map(num =>{
            if(num > 0) cont++
        })
        return cont;
    }
    
    function findNegatives(){
        let cont = 0;
        arr.map(num =>{
            if(num < 0) cont++
        })
        return cont;
    }
    
    function findZeros(){
        let cont = 0;
        arr.map(num =>{
            if(num === 0) cont++
        })
        console.log('Cont: ' + cont / 6)
        return cont;
    }
    
    const basePositives = positives / arrLen;
    const baseNegatives = negatives / arrLen;
    const baseZero = zeros / arrLen;
    
    console.log(basePositives);
    console.log(baseNegatives);
    console.log(baseZero);
    
}

// plusMinus(arr)

let a = [1];
a.length = 6;
console.log(a)