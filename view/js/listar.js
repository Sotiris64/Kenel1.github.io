fazRequisicaoAjax("GET", "../controller/filmeListar.php", cbSucessoReq, cbErroReq);

function montarTabela(dados) {
    for (const i in dados) {
        let linha = dados[i];
        const $tr = document.createElement('tr');

        criarTDePendurar($tr, linha.id, false); //id
        criarTDePendurar($tr, linha.titulo, false); //título
        criarTDePendurar($tr, linha.avaliacao, false); //avaliação
        criarTDePendurar($tr, linha.id, true); //links

        document.querySelector('tbody').appendChild($tr);
    }
}

function criarTDePendurar(noPai, info, ehHTML) {
    let $td = document.createElement('td');
    if (!ehHTML) {
        $td.textContent = info;
    } else {
        $td.innerHTML = "<a href = ../controller/filmeBuscar.php?id ="+info+">[Editar]</a>";
        $td.innerHTML += "<a href = ../controller/filmeExcluir.php?id ="+info+">[Excluir]</a>";
    } 
    noPai.appendChild($td);
}

//callback
function cbErroReq(msg) {
    document.querySelector('#msgErro').textContent = msg;
    return;
}

function cbSucessoReq(resposta) {
    let dados = resposta.dados;
    montarTabela(dados);
}