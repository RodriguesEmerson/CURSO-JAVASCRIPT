const user = ['Emerson', 'Erika', 'Rodrigues', 'Cordeiro'];

/**For In */
for(let i in user){
    //console.log(user[i])
}

/**For Of com 'continue' */
for (let value of user){
    if (value == 'Cordeiro') continue;
    //console.log(value)
}

/**For Of com 'break' */
for (let value of user){
    console.log(value)
    if(value === 'Erika') break;
}