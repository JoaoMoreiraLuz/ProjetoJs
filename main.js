const form = document.getElementById('form-telefone');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
})


function adicionarLinha() {
    const inputNome = document.getElementById('nomeForm');
    const inputTelefone = document.getElementById('telefoneForm');

    let linha = `<tr>`;
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizarTabela () {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}
