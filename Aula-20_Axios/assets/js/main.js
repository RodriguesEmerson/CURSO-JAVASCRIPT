
// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => loadDados(json))

        //A mesma coisa que
axios('pessoas.json')
    .then(response => loadDados(response.data))


function loadDados(json){
    const table = document.createElement('table')
    for (let pessoa of json){
        const tr = document.createElement('tr')
        
        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        table.appendChild(tr);
    }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}