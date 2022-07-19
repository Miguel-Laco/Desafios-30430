//DESAFÍO COMPLEMENTARIO DOM

//La intención es crear un sitema de login, que pueda incorporar a mi proyecto.
//Este sistema crea una tarjeta de con los datos del usuario.
//Tambien agrego un boton preferencias, que el usuario puede usar para cambiar de color su tarjeta

//Creo una funciion para customizar el color de la tarjeta de usuario, usando las clases de bootstrap
function customize() {
    let color = prompt("Seleccione un color de usuario:\n AZUL \n GRIS \n VERDE \n ROJO \n AMARILLO \n TURQUESA").toLowerCase();
    if (color === "azul") {
        let cambio = document.getElementById("tarjeta"); //selecciono el ID a modificar
        //primero me aseguro de remover cualquier clase de color existente
        cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
        cambio.classList.add('text-bg-primary'); //agrego la clase de la tarjeta de bootstrap
    } else if (color === "gris") {
        let cambio = document.getElementById("tarjeta");
        cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
        cambio.classList.add('text-bg-secondary');
    } else if (color === "verde") {
        let cambio = document.getElementById("tarjeta");
        cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
        cambio.classList.add('text-bg-success');
    } else if (color === "rojo") {
        let cambio = document.getElementById("tarjeta");
        cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
        cambio.classList.add('text-bg-danger');
    } else if (color === "amarillo") {
        let cambio = document.getElementById("tarjeta");
        cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
        cambio.classList.add('text-bg-warning');
    } else if (color === "turquesa") {
        let cambio = document.getElementById("tarjeta");
        cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
        cambio.classList.add('text-bg-info');
    } else {
        alert("Solo colores de la lista");
        customize(); //vuelvo a inicializar la función si no selecciona un color valido
    }
}

//creo una clase con la estructura deseada para los usuarios
class Usuario {
    constructor(nombre, email, clave) {
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
    }
}
const usuarios = []; // Genero un arreglo, donde almacenaré los datos de usuario

//Creo una funcion para pedirle al usuario los datos
function login() {
    let nombre = prompt("Ingrese su nombre");
    let email = prompt("Ingerese su email").toLowerCase();
    while (!email.includes("@") || (!email.includes(".com"))) { //valido muy rudimentariamente que sea un correo
        email = prompt("El correo debe ser válido").toLowerCase()
    }
    let clave = prompt("Ingrese una clave");

    const usuario = new Usuario(nombre, email, clave);

    const mensaje = document.getElementById("prueba"); // busco el ID a modificar
    mensaje.innerHTML = `<h4 class="card-header">${usuario.nombre}</h4>
                        <h6 class="card-title">Bienvenido</h6>
                        <p class="card-text">Te enviamos un correo a <b>${email}</b>, para validar tu registro</p>
                        <a id="profile" href="#" class="btn btn-light">Preferencias</a>`;
    usuarios.push(usuario) // llevos los datos de usuario al arreglo "usuarios", sin utilidad por el momento, pero los validare para mi proyecto
}

login();


console.log(usuarios); //valido que el arreglo haya recibido los datos de usuario

//Agrego algo de la clase 9, para interactuar con el boton "PREFERNCIAS"
let boton = document.getElementById("profile");

const respuestaClick = () => {
    customize();
}
boton.addEventListener("click", respuestaClick);