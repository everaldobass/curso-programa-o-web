// Aula 06 - Var Let Const
/**
 * var
 * let
 * const
 */

// local na memória para Armazenar informações
// Declarando variaveis
var a,b,c;
// atribuir valores
a = 1;
b = 2;
c = 3;

// Atribuir valores
var nome, sobrenome, nomeCompleto;

nome = "Everaldo";
sobrenome = "Nascimento";
nomeCompleto = nome + " " + sobrenome;

document.getElementById("nome").innerHTML = nomeCompleto;

// Diferênças
// Let Não pode ser redeclarado, let é mais seguro
let pessoa;
// Var pode ser redeclarado, pode ser acessado
var idade;
// Constante e nunca pode mudar
const x = 10;

