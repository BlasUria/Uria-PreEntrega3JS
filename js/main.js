class Servicio {
    constructor(nombre, apellido, email, ubicacion, vehiculo, distancia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.ubicacion = ubicacion;
        this.vehiculo = vehiculo;
        this.distancia = distancia;
        
    }
}

//Variables
let storageCliente;
let miformulario = document.querySelector("#formulario");

//Listeners

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem("nombre")) {
        cargarTabla();
    }
} )

miformulario.addEventListener("submit", validarFormulario,);
$('#submit').on('click', guardar);
$('#submit').on('click', historial);


function guardar() {
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let email = document.querySelector("#email").value;

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("email", email); 
}

//Solcitamos el tipo de vehiculo
function tipoVehiculo() {
    let vehiculo = document.querySelector("#vehiculo").value;
        switch(vehiculo){
            case "moto":
                return 2000;
            case "auto":
                return 4000;
            case "camioneta":
                return 5000;
            default : 2000; 
        }
}

//Solicitamos la distacia a la que lo va a trasladar

function distanciaDeTraslado() {
    let distancia = document.querySelector("#distancia").value;;
        for (let i = 1; i >=15; i++);{
            return resultado = distancia * 20;
        }
}

//Solicitamos su ubicacion aproximada para calcular el tiempo de espera.

function demoraDelServicio() {
    let ubicacion = document.querySelector("#ubicacion").value;
    switch(ubicacion){
        case "Caba":
            return "menor a 2hs";
        case "Mas lejos":
            return "menor a 4hs";
    }
}

//validamos el formulario

function validarFormulario(e) {
    //cancelamos el comportamiento del evento
    e.preventDefault();
    //obtenemos el elemento desde el cual se disparo el evento
    let miformulario = e.target

    const nombre = document.querySelector("#nombre").value; 
    const apellido = document.querySelector("#apellido").value;
    const email = document.querySelector("#email").value;
    const costoDelTraslado = tipoVehiculo() + distanciaDeTraslado();
    const tiempoDeEspera = demoraDelServicio();


    const servicio = new Servicio(nombre, apellido, email, costoDelTraslado, tiempoDeEspera);

    localStorage.setItem('historial', JSON.stringify(servicio));

    imprimir(servicio);

    miformulario.reset();

}


//Guardamos la informacion del servicio en el storage
function historial() {

    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let costoDelTraslado = tipoVehiculo() + distanciaDeTraslado();
    let tiempoDeEspera = demoraDelServicio();


    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("costoDelTraslado", costoDelTraslado);
    localStorage.setItem("tiempoDeEspera", tiempoDeEspera);

    cargarTabla();
    
}



//Se modifica el dom arrojando resultado y mostrando ultimos servicios
function cargarTabla() {

    //Inserto los datos en la tabla

    let tr1 = document.createElement("tr");
    table.appendChild(tr1);

    let th4 = document.createElement("th");
    th4.textContent = `${localStorage.getItem("nombre")}`;
    tr1.appendChild(th4);

    let td1 = document.createElement("td");
    td1.textContent = `${localStorage.getItem("apellido")}`;
    tr1.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = `${localStorage.getItem("costoDelTraslado")}`;
    tr1.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = `${localStorage.getItem("tiempoDeEspera")}`;
    tr1.appendChild(td3);

    let base1 = document.querySelector("#table").style.border="none";
    $(base1).hide()
}
