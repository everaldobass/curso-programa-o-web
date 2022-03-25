// Laços For
/*
for(cont = 0; cont <= 10; cont++){
   // console.log("Resultado de contador: " + cont);
    document.getElementById("teste").innerHTML += cont + "<br>";
}


// Selecione o Ano

let ano = new Date().getFullYear();

for( let i = ano; i  >= 1900;  i-- ){

    document.getElementById("ano").innerHTML += "<option value='  " + i + " '>" + i + "</option>";
}
*/
//  Carros
const carros = ["Gol", "Fusca", "Brasilia", "Del Rey", "Chevette"];
let tamanho = carros.length;

for(let i = 0; i < tamanho; i++){
    document.getElementById("teste").innerHTML += carros[i] + " - ";
}