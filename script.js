
// carne - 400gr por pessoa + 6h = 650 por pessoal
//cerveja - 1200ml por pessoa + 6h = 2000ml por pessoal
//refrigerante/agua - 1000ml por pessoa + 6h = 1500ml por pessoal

//crianças valem por 0,5



let inputAdultos = document.getElementById("Adultos");
let inputCriancas = document.getElementById("Criancas");
let inputDuracao = document.getElementById("Duracao");
let resultado = document.getElementById("resultado");


function calcular(){

    

     let adultos = inputAdultos.value;
     let criancas = inputCriancas.value;
     let duracao = inputDuracao.value;

     let qdtTotalCarne = carnePP(duracao)* adultos + (carnePP(duracao) / 2 * criancas);

     let qdtTotalCerveja = cervejaPP(duracao)* adultos;

     let qdtTotalBebidas= bebidasPP(duracao)* adultos + (bebidasPP(duracao) / 2 * criancas);


    resultado.innerHTML = `<p> ${qdtTotalCarne / 1000} kg de carne</p>`
    resultado.innerHTML += `<p> ${qdtTotalBebidas}ml de refrigerante </p>`
    resultado.innerHTML += `<p> ${qdtTotalCerveja/355} latasde cerveja</p>`
     

}

function carnePP(duracao){

    if (duracao >= 6){
        return 650;
        
    }else {
        return 400;
    }

}

function cervejaPP(duracao){

    if (duracao >= 6){
        return 2000;
        
    }else {
        return 1200;
    }

}

function bebidasPP(duracao){

    if (duracao >= 6){
        return 1500;
        
    }else {
        return 1000;
    }

}