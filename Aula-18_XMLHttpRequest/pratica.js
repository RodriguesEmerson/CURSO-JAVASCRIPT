const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();
    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error(xhr.responseText)
        }
    });
}

document.addEventListener('click', e => {
    e.preventDefault()
    const element = e.target;
    const tag = element.tagName.toLowerCase();

    if(tag === 'a'){
        carregaPagina(element);
    }
})

function carregaPagina(element){
    const href = element.getAttribute('href');

    request({
        method: 'GET',
        url: href,
        success(response){
            carregaContent(response);
        },
        error(errorText){
            console.log(errorText);
        }
    })
}

function carregaContent(response){
    const content = document.querySelector('.content');

    content.innerHTML = response;
}