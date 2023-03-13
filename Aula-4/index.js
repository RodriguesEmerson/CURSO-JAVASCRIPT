let tela = document.querySelector('.cronometro');
let btn = document.querySelectorAll('.btn')
let show = document.querySelectorAll('.cronometro span')

let [telaMiliSeconds, telaSeconds, telaMinutes] = [show[2], show[1], show[0]]

let timer = {
    miliSeconds: 0,
    seconds: 0,
    minutes: 0,
}

let cronometroCount;
function startCronometro(){
    cronometroCount = setInterval(function(){
        cronometro();
    }, 10)
}


btn[0].addEventListener('click', () => {
    startCronometro();
})
btn[1].addEventListener('click', () => {
    clearInterval(cronometroCount);
})


function cronometro (){

    timer.miliSeconds++
    if(timer.miliSeconds === 99){
        timer.seconds++
        cronometro.miliSeconds = 0
    }
    if(timer.seconds === 60){
        timer.minutes++
        timer.seconds = 0
    }

    if(timer.miliSeconds > 99) timer.miliSeconds = 0

    telaMiliSeconds.textContent = timer.miliSeconds;
    if(timer.miliSeconds < 10 && timer.miliSeconds >= 0){
        telaMiliSeconds.textContent = `0${timer.miliSeconds}`
    }

    telaSeconds.textContent = timer.seconds;
    if(timer.seconds < 10 && timer.seconds >= 0){
        telaSeconds.textContent = `0${timer.seconds}`
    }

    telaMinutes.textContent = timer.minutes
    if(timer.minutes < 10 && timer.minutes >= 0){
        telaMinutes.textContent = `0${timer.minutes}`
    }
   
}
