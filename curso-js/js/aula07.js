// Aula 07 - Operadores

//  + - * / = ++ -- -= && || etc..
/**
 * 1 - Operadores aritméticos
 * 2 - Operadores de atribuição
 * 3 - operadores sequência
 * 4 - operadores de comparação
 * 5 - operadores condicionais
 * 6 - operadores lógicos
 */

let valor1, valor2, total;
valor1 = 5;
valor2 = 2;

soma = valor1 + valor2;
sub = valor1 - valor2;
mult = valor1 * valor2;
div = valor1 / valor2;
mod = valor1 % valor2;

soma = ++valor1 // Incremento
sub = --valor1  // Decremento

valor1 += valor2; // Mais igual
valor1 = valor1 + valor2;

// Concatenação
let nome, sobrenome, nomeCompleto;
nome = "Everaldo";
sobrenome = "Nascimento";
nomeCompleto = nome + "" + sobrenome;
console.log(nomeCompleto);

// operadores de comparação
let num1, num2, res;
num1 = 8;
num2 = 10;

res = (num1 === num2); // valor é o mesmo e se é Igual
res = (num1 !== num2); // Diferente ou não igual
res = (num1 < num2);// Menor
res = (num1 > num2);// Maior
res = (num1 <= num2);// Menor igual
res = (num1 >= num2);// Maior igual

// Operador ternário
let idade, eleitor, resultado;
idade = 18;
eleitor = (idade <18 ) ? "Não, Eleitor": "Sim, eleitor";
console.log("Resposta: " + eleitor);


// Operadores lógicos
resultado = (idade > 60 && idade < 70); // True
resultado = (idade === 65 || idade === 72); // True
resultado = !(idade === 65); // True
