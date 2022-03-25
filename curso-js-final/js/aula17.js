// Classes no JavaScript
// Classes
class Carro{
    constructor(valor1, valor2, valor3){

        this.mara = valor1;
        this.modelo = valor2;
        this.ano = valor3;

    }

    buzina(){
        return this.modelo + " buzina: Biiiiiii";
    }

}

// Criando um objeto
const uno = new Carro("Fiat", "Uno", 2001);
console.log(uno.buzina());

const gol = new Carro("Volk", "Gol", 2015);
console.log(gol);