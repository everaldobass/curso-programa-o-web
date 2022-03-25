// Aula 10 - Eventos
/*
 - Introdução
 - Eventos 
 - Evento onclick -  Dispara quando recebe um click
 - Evento ondblclick - Dispara quando recebe duplo click
 - onmouseover - Dispara quando o mouse está sobre
 - onmouseout - Dispara quando o mouse é movido para fora do elemento
 - onmousemove - Dispara quando o mouse é movido do elemento
 - onmousedown - Dispara quando o click do botão for precionado
 - onmouseup - Diapara quando o click do botão for liberado
 - Evento onfocus - Dispara quando o elemento recebe o foco  
 - Evento onchange - Dispara quando existe uma mudança no conteúdo
 - Evento onblur - Dispara quando o elemento perde o foco   
 - onkeydow - Dispara quando uma tecla é precionaada
 - onkeypress - Dispara quando uma tecla é precionaada e solta
 - onkeyup - Dispara quando uma tecla é solta sobre um elemento
 - Evento onload - Dispara quando uma página for carregada
 - Evento onresize - Dispara quando há um redirecionamento da Janela
 
 */
// Eventos click
function eventoClick(){
   // alert("Aciona um evento de click");
    document.body.style.backgroundColor = "Yellow";
}

// Evento double click
function eventoDBLClick(){
    document.write("Evento click duplo");
}


// onmouseover - Aciona o vira vermelho
function viraVermelho(){
    let div = document.getElementById("teste") ;
    div.style.backgroundColor = "red";
}


// ounmouseout - Aciona o vira Azul
function viraAzul(){
    let div = document.getElementById("teste") ;
    div.style.backgroundColor = "blue";
}

//
function adicionaTexto(){
    let p = document.getElementById("teste");
    p.append("Mouse Moveu!<br> ");
}

function limpaTexto(){
    document.getElementById("campoTexto").value = "";
}