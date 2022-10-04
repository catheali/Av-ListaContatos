const API_URL = "http://localhost:8000";

function buscarParaEditar(id) {
  form_edit_id.value = id;
  fetch(API_URL + "/contatos/" + id)
    .then((res) => res.json())
    .then((dados) => {
      edit_nome.value = dados.nome;
      edit_local.value = dados.local;
      edit_telefone.value = dados.telefone;
    });
}

function editar() {
  event.preventDefault(); // impedir de recarregar
  let dados = {
    nome: edit_nome.value,
    local: edit_local.value,
    telefone: parseInt(edit_telefone.value),
  };
  fetch(API_URL + "/contatos/" + form_edit_id.value, {
    method: "PATCH",
    body: JSON.stringify(dados),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(() => atualizarLista());

  let x = document.querySelector('[data-bs-dismiss="offcanvas"]'); // evento de fechar
  x.dispatchEvent(new Event("click")); //simula o evento que fecha o offcanvas
}

function adcContato() {
  event.preventDefault();
  let dados = {
    nome: input_nome.value,
    local: input_local.value,
    telefone: parseInt(input_telefone.value),
  };
  fetch(API_URL + "/contatos", {
    //coloca só o url base pq pode ter outras api e concatena a que vai ser usada
    method: "POST",
    body: JSON.stringify(dados), //pega os dados e transforma em uma string json
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resposta) => resposta.json())
    .then((resposta) => atualizarLista());

  form_add.reset(); // limpa os dados digitados do formulario
  let x = document.querySelector('[data-bs-dismiss="modal"]');
  x.dispatchEvent(new Event("click")); //simula o evento de fechar o modal
}

async function excluir(id) {
  let resposta = confirm("Você tem certeza?");
  if (resposta !== true) {
    return;
  }
  await fetch(API_URL + "/contatos/" + id, {
    method: "DELETE",
  });
  atualizarLista();
}

atualizarLista();
function atualizarLista() {
  fetch(API_URL + "/contatos")
    .then(function (resposta) {
      return resposta.json();
    })
    .then(function (lista) {
      lista_contatos.innerHTML = "";
      document.getElementById('numeros').innerHTML = (lista.length);

      lista.forEach(function (cadaItem) {
        lista_contatos.innerHTML += `
            <tr >
            <td>${cadaItem.id}</td>
            <td>${cadaItem.nome}</td>
            <td>${cadaItem.local}</td>
            <td>${cadaItem.telefone}</td>
            <td class="text-end">
            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="buscarParaEditar(${cadaItem.id})" class="btn btn-warning"><span class="material-symbols-outlined">
            edit_square</span></button></td>
            <td class="text-end"><button onclick="excluir(${cadaItem.id})" class="btn btn-danger"><span class="material-symbols-outlined">person_remove</span></button><td>
            </tr>
            `;
      });
    });
