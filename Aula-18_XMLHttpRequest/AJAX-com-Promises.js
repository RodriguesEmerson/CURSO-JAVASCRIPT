const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            }else{
                reject(xhr.responseText)
            }
        })
    })
}

document.addEventListener('click', event => {
    event.preventDefault();
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if(tag === 'a'){
        carregaPagina(element)
    }
})

function carregaPagina(element){
    const href = element.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    }

    request(objConfig).then(response => {
        carregaContent(response);
    }).catch(erro => console.log(erro))
};

function carregaContent(response){
    const content = document.querySelector('.content');
    content.innerHTML = response;
}