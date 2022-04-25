
// carne - 400gr por pessoa + 6h = 650 por pessoal
//cerveja - 1200ml por pessoa + 6h = 2000ml por pessoal
//refrigerante/agua - 1000ml por pessoa + 6h = 1500ml por pessoal

//crianças valem por 0,5





let inputAdultos = document.getElementById("Adultos");
let inputCriancas = document.getElementById("Crianças");
let inputDuracao = document.getElementById("Adultos");

let resultado = document.getElementById("resultado");

function calcular(){
     
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.Value;
    

    let qdtTotalCarne = 400 * adultos + (400 /2 * criancas);
    console.log(qdtTotalCarne);

}