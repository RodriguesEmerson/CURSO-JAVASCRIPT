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

async function carregaPagina(element){
    try{
        const href = element.getAttribute('href');
        const response = await fetch(href);

        if(response.status !== 200) throw new Error('ERRO 404');

        const html = await response.text();
        carregaContent(html)
    }catch(erro) {console.log(erro)}
};

function carregaContent(response){
    const content = document.querySelector('.content');
    content.innerHTML = response;
}