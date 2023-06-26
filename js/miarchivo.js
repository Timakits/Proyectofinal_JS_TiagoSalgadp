
//Cotizaciones de monedas

    const monedas = {
    dolar : 471,
    euro : 505,
    real : 6,
    uruguayo : 5.90,
    boliviano : 8,
    colombiano : 0.050,
    chileno : 0.29,
    yen : 1.70
};
const valores = [
    "Dolar : 471$","Euro : 505$","Real : 6$","Uruguayo : 5.90$","Boliviano : 8$","Colombiano : 0.050$","Chileno : 0.29$","Yen : 1.70$"];
let ars = "$Ars";


//boton de comenzar

let calculadora = document.getElementById("calculadora");

calculadora.remove()

let btnComenzar = document.getElementById("btnComenzar")

btnComenzar.onclick = () => {
    btnComenzar.remove();
    document.body.append(calculadora)
}

//

//DOM elementos

let monto1 = document.getElementById("monto1")
let monto2 = document.getElementById("monto2")

let options = {
    dolar: document.getElementsByClassName("1"),
    euro: document.getElementsByClassName("2"),
    real: document.getElementsByClassName("3"),
    uruguayo: document.getElementsByClassName("4"),
    boliviano: document.getElementsByClassName("5"),
    colombiano: document.getElementsByClassName("6"),
    chileno: document.getElementsByClassName("7"),
    yen: document.getElementsByClassName("8"),
};

let reset1 = document.getElementById("reset1");
let submit1 = document.getElementById("submit1");

let reset2 = document.getElementById("reset2");
let submit2 = document.getElementById("submit2");

let rtdo1 = document.getElementById("rtdo1");
let rtdo2 = document.getElementById("rtdo2");

//

let $ = {
    dolar: options.dolar = monedas.dolar,
    euro: options.euro = monedas.euro,
    real: options.real = monedas.real,
    uruguayo: options.uruguayo = monedas.uruguayo,
    boliviano: options.boliviano = monedas.boliviano,
    colombiano: options.colombiano = monedas.colombiano,
    chileno: options.chileno = monedas.chileno,
    yen: options.yen = monedas.yen
}


//ars-->extranjero

if (btnComenzar === null){
    console.log("nulo")
}else{
    console.log("no es nulo")
}