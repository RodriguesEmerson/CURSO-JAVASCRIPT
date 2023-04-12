const request = function(obj){
    console.log(obj)
    const xhr = new XMLHttpRequest; //Instancia um novo objeto XMLHttpRequest
    xhr.open(obj.method, obj.url, true)//'open' é um método que está dentro de xhr
                                       //Os parâmetros, são os dados necessários para esse
                                       //método ser executado. o 'true', informa que deve 
                                       //ser executado de forma assíncrona.

    xhr.send();//Se fosse enviar dados de um fomulário ou qualquer outra coisa, os dados
               //seriam passados por aqui. 
               //Este método é obrigatório, mesmo sendo vazio.

    //Verifica se a requisição foi bem sucedida
    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error(xhr.responseText)
        }
    })
}

document.addEventListener('click', (e) => {
    e.preventDefault();
    const element = e.target;
    const tag = element.tagName.toLowerCase();

    if(tag === 'a'){
        carregaPagina(element);
    }
})

function carregaPagina(element){
    const href = element.getAttribute('href');

    //chama a const (função) 'request' e passa o objeto como parâmetro.
    request(
        //parâmetro
        {method: 'GET',
         url: href,
         success(response){
            carregaContent(response);
         },
         error(errorText){
            console.log(errorText)
         }
        }
    )
}

function carregaContent(response){
    const content = document.querySelector('.content');
    content.innerHTML = response;
}

/** */