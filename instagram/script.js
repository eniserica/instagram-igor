const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');

function validacaoNome (){
    if (campos[0].value === ""){
        console.log("Digite um email");
    }else{
        console.log("Email valido");
    }
}