
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
let valoresdiv = document.getElementById("valores")



calculadora.remove();
valoresdiv.remove();



let btnComenzar = document.getElementById("btnComenzar")

btnComenzar.onclick = () => {
    Swal.fire({
        title: 'Registrarse',
        icon: 'info',
        html: `
        <input type="text" id="input1" placeholder="Ingrese su nombre" />
        <input type="text" id="input2" placeholder="Ingrese su apellido" />
        `,
        confirmButtonText: 'Enviar',
        preConfirm: () => {
            return [
            document.getElementById('input1').value,
            document.getElementById('input2').value,
            ]
        }}).then((result) => {
        if (result.isConfirmed) {
        var usuario = result.value;
        
        let usuarioDatos = {
            nombre:  usuario[0],
            apellido:  usuario[1],
        };
        let usuarioJSON = JSON.stringify(usuarioDatos)
        sessionStorage.setItem("usuarioDatos" , usuarioJSON);
        title.append("Bienvenido " + usuarioDatos.nombre);
        }
        })
    btnComenzar.remove();

    document.body.append(calculadora);
    document.body.append(valoresdiv);

    //DOM elementos
    
    let title = document.getElementById("title")
    let monto1 = document.getElementById("monto1")
    let monto2 = document.getElementById("monto2")
    

    
    let select = document.getElementById("inputGroupSelect01");
    let select2 = document.getElementById("inputGroupSelect02");

    let reset1 = document.getElementById("reset1");
    let submit1 = document.getElementById("submit1");
    
    let reset2 = document.getElementById("reset2");
    let submit2 = document.getElementById("submit2");
    
    let rtdo1 = document.getElementById("rtdo1");
    let rtdo2 = document.getElementById("rtdo2");
    
    let histcont = document.getElementById("hist")
    let historial = []

    let otrosV = document.getElementById("otrosV")
    //
    
    
    //ars-->extranjero
    
    
    submit1.onclick = () => { 
        
        var montoValor = monto1.value;
        var selectValor = select.value

        let notification = Toastify({
            text: "Calculo exitoso",
            duration: 2000,
            backgroundColor: "green",
            }).showToast();
        
        if (selectValor == "Dolar"){
            rtdo1.textContent = montoValor / monedas.dolar + "$ USD"
            historial.push(montoValor / monedas.dolar + "$ USD");
            notification
        }else if (selectValor == "Euro"){
            rtdo1.textContent =  montoValor / monedas.euro + "$ EUR";
            historial.push(montoValor / monedas.euro + "$ EUR");
            notification
        }else if(selectValor == "Real"){
            rtdo1.textContent =  montoValor / monedas.real + "$ BRL";
            historial.push(montoValor / monedas.real + "$ BRL");
            notification
        }else if (selectValor == "Uruguay peso"){
            rtdo1.textContent =  montoValor / monedas.uruguayo + "$ UYU";
            historial.push(montoValor / monedas.uruguayo + "$ UYU");
            notification
        }else if (selectValor == "Boliviano"){
            rtdo1.textContent =  montoValor / monedas.boliviano + "$ BOB";
            historial.push(montoValor / monedas.boliviano + "$ BOB");
            notification
        }else if (selectValor == "Colombia peso"){
            rtdo1.textContent =  montoValor / monedas.colombiano + "$ COP";
            historial.push(montoValor / monedas.colombiano + "$ COP");
            notification
        }else if (selectValor == "Chile peso"){
            rtdo1.textContent =  montoValor / monedas.chileno + "$ CLP";
            historial.push(montoValor / monedas.chileno + "$ CLP");
            notification
        }else if (selectValor == "Yen"){
            rtdo1.textContent =  montoValor / monedas.yen + "$ JPY";
            historial.push(montoValor / monedas.yen + "$ JPY");
            notification
        }else{
            alert("Faltan datos ")
        }
        
        histcont.textContent = " "
        
        historial.forEach(function(Actividad) {
            histcont.innerHTML += `<h3> ${Actividad} </h3> `
        }
        )
        
    }

    reset1.onclick = () => {
        monto1.value = "" ;
        select.value = "Elija" ;
        rtdo1.textContent = "Resultado" ;
        Toastify({
            text: "Reseteo exitoso",
            duration: 2000,
            backgroundColor: "red",
            }).showToast();
    }


    //

    //extranjero --> ars

    submit2.onclick = () => { 

        var montoValor = monto2.value;
        var selectValor = select2.value

        let notification2 = Toastify({
            text: "Calculo exitoso",
            duration: 2000,
            backgroundColor: "green",
            }).showToast();

        if (selectValor == "Dolar"){
            rtdo2.textContent =  montoValor * monedas.dolar + "$ ARS" ;
            historial.push(montoValor * monedas.dolar + "$ ARS");
            notification2
        }else if (selectValor == "Euro"){
            rtdo2.textContent =  montoValor * monedas.euro + "$ ARS" ;
            historial.push(montoValor * monedas.euro + "$ ARS");
            notification2
        }else if(selectValor == "Real"){
            rtdo2.textContent =  montoValor * monedas.real + "$ ARS";
            historial.push(montoValor * monedas.real + "$ ARS");
            notification2
        }else if (selectValor == "Uruguayo"){
            rtdo2.textContent =  montoValor * monedas.uruguayo + "$ ARS";
            historial.push(montoValor * monedas.uruguayo + "$ ARS");
            notification2
        }else if (selectValor == "Boliviano"){
            rtdo2.textContent =  montoValor * monedas.boliviano + "$ ARS";
            historial.push(montoValor * monedas.boliviano + "$ ARS");
            notification2
        }else if (selectValor == "Colombiano"){
            rtdo2.textContent =  montoValor * monedas.colombiano + "$ ARS";
            historial.push(montoValor * monedas.colombiano + "$ ARS");
            notification2
        }else if (selectValor == "Chileno"){
            rtdo2.textContent =  montoValor * monedas.chileno + "$ ARS";
            historial.push(montoValor * monedas.chileno + "$ ARS");
            notification2
        }else if (selectValor == "Yen"){
            rtdo2.textContent =  montoValor * monedas.yen + "$ ARS";
            historial.push(montoValor * monedas.yen + "$ ARS");
            notification2
        }else{
            alert("Faltan datos")
        }
        histcont.textContent = " "
        
        historial.forEach(function(Actividad) {
            histcont.innerHTML += `<h3> ${Actividad} </h3> `
        }
        )
    }

    reset2.onclick = () => {
        monto2.value = "" ;
        select2.value = "Elija" ;
        rtdo2.textContent = "Resultado" ;
        Toastify({
            text: "Reseteo exitoso",
            duration: 2000,
            backgroundColor: "red",
        }).showToast();
    }
//

otrosV.onclick = () => {
    fetch('js/otrosV.json')
    .then(response => response.json())
    .then(data => {
        var otrosVDatos = JSON.stringify(data)
        var otrosVDatosParse = JSON.parse(otrosVDatos)
        let {YuanesChinos, PesosDominicanos, LibrasEsterlinas, Soles, LirasTurcas, FrancosSuizos, CoronasSuecas} = otrosVDatosParse
        Swal.fire({
            position: 'top-end',
            title: 'Divisas no incluidas',
            html: `<br><h3>Yuanes chinos: ${YuanesChinos} </h3><br> 
            <h3>Pesos dominicanos: ${PesosDominicanos} </h3><br>
            <h3>Libras esterlinas: ${LibrasEsterlinas} </h3><br>
            <h3>Soles: ${Soles} </h3><br>
            <h3>Liras turcas: ${LirasTurcas} </h3><br>
            <h3>Francos suizos: ${FrancosSuizos} </h3><br>
            <h3>Coronas suecas: ${CoronasSuecas} </h3><br>`,
            showConfirmButton: true,
        })
    })
}

}

//


