# Av-ListaContatos

## Para Instalar o NODEJS:

 - https://nodejs.org/
 Baixe e instale no seu computador. Para a execução do CRUD de Contatos, só será necessária a instalação uma vez. 
  

## Para Instalar o JSON-server:

 - Abra o Terminal do seu computador e execute:
-  `npm install -g json-server` 

O json-server é uma biblioteca que simula um banco de dados com API REST.

  

## Para executar o Projeto:

- No terminal, certifique-se de estar na pasta do CRUD de contatos :
  execute `npx json-server db.json --port 8000`

  -  Caso a porta 8000 não esteja disponível, também é possivel modificar a porta:  `--port`  
exemplo:
    `$ json-server --watch db.json --port 3004`´

- Se todos os passos forem executados corretamente, aparecerá a seguinte mensagem no terminal:
 

    ` \{^_^}/ hi!    
      Loading db.json
      Done`
    
      Resources
      http://localhost:8000/contatos
    
      Home
      http://localhost:8000 ´ 

- Com isso você terá acesso a uma API REST no endereço http://localhost:8000

  

## Pronto, agora basta abrir o arquivo `index.html` com seu navegador e pronto !
