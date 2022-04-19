/* JS INICIAL PARA CEP/ENDEREÇO */
const formulario = document.querySelector("form");
const inputCep = formulario.querySelector("#cep");
const inputTelefone = formulario.querySelector("#telefone");
const inputEndereco = formulario.querySelector("#endereco");
const inputBairro = formulario.querySelector("#bairro");
const inputCidade = formulario.querySelector("#cidade");
const inputEstado = formulario.querySelector("#estado");
const bStatus = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");

botaoLocalizar.addEventListener ("click", function (event) {
    event.preventDefault();
    /* Pegar o CEP digitado */

    let cep = inputCep.value; 

    /* CEP no Padrão API */
    let url = `http://viacep.com.br/ws/${cep}/json/`;

    /* Ajax comunicação assincrona com o ViaCep usando uma função 
    chamada fetch. */

    //1) Fazer a conexão com a API (ou acessa)
    fetch(url)

        // 2) E então, Recupere a resposta de acesso no formato JSON
        .then(resposta => resposta.json())

                //3) E então mostre os dados
            .then(dados =>   {
                if ("erro" in dados) {
                   bStatus.innerHTML = "CEP não encontrado";
                   inputCep.focus();
                    
                } else {
                    bStatus.innerHTML = "CEP encontrado!"
                    inputEndereco.value = dados.logradouro;
                    inputBairro.value = dados.bairro;
                    inputCidade.value = dados.localidade;
                    inputEstado.value = dados.uf;
                    
                }
            });

})

 /* Lib Vanilla Masker:
 https://github.com/vanilla-masker/vanilla-masker */

 VMasker (inputCep).maskPattern("9999-9999");
 VMasker (inputTelefone).maskPattern("(99)9999-9999");
 
 /* Programação do contador e caracteres do campo mensagem */

const spanMaximo = formulario.querySelector("#maximo");
const bCaracteres = formulario.querySelector("#caracteres");
const textMensagem = formulario.querySelector("#mensagem");

// Determinar a quantidade máxima de aracteres do campo mensagem
let quantidade = 100;

//Evento para detectar a digitação (entrada) no campo
textMensagem.addEventListener("input", function(){
    //capturando o que for digitado
    let conteudo = textMensagem.value;

    // Criando uma contagem regressiva
    let contagem = quantidade - conteudo.length;

    // Adicionando a contagem ao elemento HTML
    bCaracteres.textContent = contagem

 /* Desafio
 Se for 0 Vermelho
 Senão, preto */

 if (contagem == 0) {
     bCaracteres.style.color = "red";
     textMensagem.style.boxShadow = "red 0 0 10px";
     
    
 } else {
    bCaracteres.style.color = "black"; 
    textMensagem.style.boxShadow = "black 0 0 10px";
 }


});