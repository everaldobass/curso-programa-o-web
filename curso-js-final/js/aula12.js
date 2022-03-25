// Const pessoa
const pessoa = ["Dimitri", "Teixeira", 30, "Professor"];

// Remover o ultimo item
pessoa.pop();
console.log(pessoa);

// Adicionar um item
pessoa.push("Everaldo");
console.log(pessoa);

// Remover o primeiro item
pessoa.shift();
console.log(pessoa);

// Adicionar um item no primeiro
pessoa.unshift("Bonitão");
console.log(pessoa);

// Delete  evitar utilizar
// delete pessoa[0];
console.log(pessoa);

// Adicionar vários elementos
pessoa.splice(1,0, "Item1", "Item2")
console.log(pessoa);

// Concatenar várias listas
const lista1 = ["Carro1", "Carro2", "Carro3" ];
const lista2 = ["Carro3", "Carro4", "Carro4" ];

const superlista = lista1.concat(lista2);
console.log(superlista);

// Fatiar uma matriz
const jogadores = ["Pelé","Maradona", "Gaucho","Ronaldo", "Neymar", "CR7", "Vampeta"];
const craques = jogadores.slice(2,6);
console.log(craques);

// Mostrar em ordem 
const jogOrdem = jogadores.sort();
console.log(jogOrdem);

// Decrescente
jogadores.reverse();
console.log(jogadores);

// Array númerica
const numeros = [40,30,20,10];
numeros.sort();
console.log(numeros);


// Função
function MaiorNumero(array){
    return Math.max.apply(null, array);
}

console.log(MaiorNumero.numeros);

// Função
function MenorNumero(array){
    return Math.min.apply(null, array);
}

console.log(MenorNumero.numeros);

