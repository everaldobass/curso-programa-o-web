// Aula 18 - Manipulação de Datas

// Pegar Data
let data = new Date();
console.log(data);

// Pegar o Ano
let ano = data.getFullYear();
console.log(ano);

// Pegar o més
let mes = data.getMonth();
console.log(mes);

// Mostrar o mes escrito
const mesesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"]
let mesEscrito = mesesAno[data.getMonth()];
console.log(mesEscrito);

// Pegar dia mesm
let diaMes = data.getDate();
console.log(diaMes);

//Pegar dia Semana
const diaDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado","Domingo"];
let diaSemana = diaDaSemana[data.getDay()];
console.log(diaSemana)

// Pegar Horas
let hora = data.getHours();
console.log(hora);

// Pegar Minutos
let minutos =  data.getMinutes();
console.log(minutos);

// Pegar Segundo
let segundo = data.getSeconds();
console.log(segundo);

// Pegar Segundos
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// Pegar Data Padrão Brasileiro
let brBrasil = data.toLocaleString('pt-br');
console.log(brBrasil);

// Comparar Data
let hoje = new Date();
let vencimento = new Date(2022, 6, 20);

if(hoje > vencimento){
    console.log("Sua conta está vencida!");
} else {
    console.log("Ainda não está vencida!");
}

//DIFERENÇA ENTRE DATAS
var dataInicial = new Date();
var dataFinal = new Date(2022, 3, 8);

//getTime() - PEGA TEMPO EM MILISEGUNDOS DESDE 1 JANEIRO DE 1970
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

//CEIL NUMERO ARREDONDADO PARA CIMA:
var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias);
