
/**Try and Catch */
try{
    //console.log(nome)
}catch(error){
    //console.log('Houve um erro inesperado')
}

/**Throw */
function sum(n1, n2){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw new Error('The parameters should be numbers')
    }
    return n1 + n2
}

try{
    //console.log(sum('1', 3));
}catch (error){
    //console.log(error)
}

function d (data){

    data = new Date();
    return data.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',

        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })

}
console.log(d())