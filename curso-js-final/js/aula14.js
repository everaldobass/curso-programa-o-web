// Switch

function verificar(){
    let cor  = document.getElementById("cor").value;
    //cor = cor.toLowerCase();

    switch(cor){
        
        case "Azul":
        document.body.style.backgroundColor = "blue";
        break;

        case "Verde":
        document.body.style.backgroundColor = "green";
        break;

        case "Amarelo":
        document.body.style.backgroundColor = "yellow";
        break;

        case "Laranja":
        document.body.style.backgroundColor = "orange";
        break;

        default:
             document.body.style.backgroundColor = "black";

    }
}