function filtrar(){
    let buscaUsuario = busca_input.value.toLowerCase(); 
    let linhas = lista_contatos.getElementsByTagName('tr');

    for (let posicao in linhas) {
       if(isNaN(posicao)){ 
           continue;
       }
       let coluna1 = linhas[posicao].children[1].innerText.toLowerCase(); 
       let coluna2 = linhas[posicao].children[2].innerText.toLowerCase();
       let coluna3 = linhas[posicao].children[3].innerText
       let colunas = coluna1 + coluna2 + coluna3; // realizando pesquisa por local e nome
       if( colunas.includes(buscaUsuario)){
           linhas[posicao].style.display = '';
       } else{
           linhas[posicao].style.display = 'none';
       }

      }
}
