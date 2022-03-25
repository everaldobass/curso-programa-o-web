// JASON  Aula 19 - JSON
const carro = {

    marca: "Fiat",
    modelo: "Uno",
    ano: 2022,
    motor: ["1.6"]
}

let texto =  JSON.stringify(carro);
document.getElementById('area').innerHTML = texto;
let obj =  JASON.parse(text);

console.log(obj.motor[0]);

