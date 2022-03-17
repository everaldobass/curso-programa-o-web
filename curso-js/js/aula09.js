// Aula 09 - Objetos
let carro = {
    marca: "Ford",
    modelo: "ka", 
    ano: 2015, 
    placa: "ABC-1234",

    buzina:function(){
        alert("biiiiiiiiiiii");
    },

    // outro método
    completo: function(){
        return "Marca: "+this.marca+ "Modelo: "+this.modelo;
    }
};

// pegando um item do objeto
console.log(carro[0]);

// Chamando o método do objeto
carro.buzina();

// metodo completo
console.log(carro.completo());

