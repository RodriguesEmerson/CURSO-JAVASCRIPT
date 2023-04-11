
// let arr = [-4, 3, -9, 0, 4, 1]

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
    
    // console.log(basePositives);
    // console.log(baseNegatives);
    // console.log(baseZero);
    
}

// plusMinus(arr)
// let arr = [1, 2, 3, 4, 5]
function miniMaxSum(arr) {
    const maxNumber = Math.max(...arr)
    const minNumber = Math.min(...arr)
    console.log(maxNumber)
    let originalArr = [...arr];
    
    const maxNumberIndex = arr.indexOf(maxNumber);
    console.log('Index: ' + maxNumberIndex)
    arr.splice(maxNumberIndex, 1);
    console.log(arr)
    console.log(originalArr)
    
    const maxSom = arr.reduce((acc, atu) => acc + atu, 0);
    
    
    
    const minNumberIndex = originalArr.indexOf(minNumber);
    originalArr.splice(minNumberIndex, 1);
    
    const minSum = originalArr.reduce((acc, atu) => acc + atu, 0)
    
    console.log(maxSom, minSum)
}

// miniMaxSum(arr)
let arr = [3, 2, 1, 3]
function birthdayCakeCandles(candles) {
    const tallestCalndle = Math.max(...candles);
   console.log(tallestCalndle)
    const tallestCandles = count();
   
    function count(){
        let contador = 0;
        candles.forEach(candle => {
            console.log(candle)
            if(candle === tallestCalndle) contador++;
        })
        return contador;
    }
    console.log(tallestCandles)
    return tallestCandles;
}

// birthdayCakeCandles(arr)

let hora = '06:40:03AM';

function transformaHora(hora){
    const separeteHours = hora.split(':')
    let hour = Number(separeteHours[0])
    let minutes = Number(separeteHours[1])
    let seconds = Number(separeteHours[2].slice(0, 2))
    const partDay = separeteHours[2].slice(2, 4);

    let hourNewFormat = hour;
    if( (hour >= 12 && partDay === 'AM') || (partDay === 'PM' && hour < 12) ){
        hourNewFormat = hour + 12;
        if(hourNewFormat >= 24 && minutes >= 0 && seconds >= 0){
            hourNewFormat = hourNewFormat - 24;
        }
    }
    
    if(hourNewFormat < 10) hourNewFormat = `0${hourNewFormat}`
    if(minutes < 10) minutes = `0${minutes}`
    if(seconds < 10) seconds = `0${seconds}`

    return(hourNewFormat + ':' + minutes + ':' + seconds)
}

// transformaHora(hora);