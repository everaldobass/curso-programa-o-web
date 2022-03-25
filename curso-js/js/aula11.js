// Lista de compras em Array

const lista = ["arroz", "feijão", "macarrão", "leite"];
// Selecionar um item
console.log("Produtos: " + lista[1]);

// Atribuir um item
lista[0] = "Carne";

// Lista os items
console.log(lista);

// Array utiliza []
// Objeto utiliza{}

// Tamanho de um array
console.log(lista.length);

// Adicionar item em um array
lista.push("Carne");

// Verificar se é um array
console.log(Array.isArray(lista));