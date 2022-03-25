// Condições
/** if - else */

let interruptor = "off";

if(interruptor == "on"){
    console.log("Lampada ligada ")
} else{
    console.log("Lampara não está ligada! ")
}


// ElseIf
let hora = new Date().getHours();

if(hora < 12){
    console.log("Bom dia! " + hora + " Horas")

} else if(hora > 12 && hora <= 18){
    console.log("Boa tarde! " + hora  + " Horas")
} else{

    console.log("Boa noite! " + hora  + " Horas");

}
