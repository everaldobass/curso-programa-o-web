// Aula 16 - SetTimeout e SetInterval

// Eventos de tempo
function ativarContagem(){
    document.getElementById('tempo').innerHTML = "Começou a contar";
    // Ativa a função apenas uma vez quando o tempo for especificado
    tempo = setTimeout(function(){
        document.getElementById('tempo').innerHTML = "Executou o setTimeout";
        document.body.style.backgroundColor = "green";
    }, 5000);
}


function pararContagem(){
    //clearTimeout(tempo);
    clearInterval(tempo);
    document.getElementById('tempo').innerHTML = "Parar a contagem! ";
    document.body.style.backgroundColor = "gray";
}


// SetIntervarl

function cronomentro(){

    tempo = setInterval(function(){

        let cronomentro =  document.getElementById('tempo').innerHTML;
        let soma = parseInt(cronomentro) + 1;
        document.getElementById('tempo').innerHTML = soma;
    }, 1000);

    
}

