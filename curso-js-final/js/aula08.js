// Aula 08 - Funções
function soma(valor1, valor2){
    return valor1 + valor2;
}
 //console.log(soma(10,2));
 document.getElementById("soma").innerHTML = soma(10,20);


 // Função cotação do Dolar
 function realDolar(real, cotacaoDolar){

    return real * cotacaoDolar;
 }

let real = 10;
let dolar = 5.10

total = realDolar(real, dolar);
console.log("Valor atual da cotação: " + total);


// Função de aleta
function alertaHello(){

    alert("Função alerta");
}

function paraCelsius(valorFah){
    return (5 / 9) * (valorFah - 32);
}

let x = paraCelsius(77);
console.log("Temperatura: " + x + "graus celsius: ");


//
function minhaFuncao(){
    
}