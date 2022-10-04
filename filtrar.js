function filtrar(){
    let buscaUsuario = busca_input.value.toLowerCase(); 
    let linhas = lista_contatos.getElementsByTagName('tr');

    for (let posicao in linhas) {
       if(isNaN(posicao)){ 
           continue;
       }
       let colNome = linhas[posicao].children[1].innerText.toLowerCase(); 
       let colLocal = linhas[posicao].children[2].innerText.toLowerCase();
       let colTelefone = linhas[posicao].children[3].innerText
       let colDados = colNome + colLocal + colTelefone; // realizando pesquisa por local e nome
       if( colDados.includes(buscaUsuario)){
           linhas[posicao].style.display = '';
       } else{
           linhas[posicao].style.display = 'none';
       }
      }
}
