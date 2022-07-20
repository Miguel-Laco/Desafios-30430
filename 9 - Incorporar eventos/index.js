// Desafío: Incorporar eventos
//En esta oportunidad, sigo trabajando el login de mi página. Capturo los input desde formularios
//Los valido entre ellos y genero una targeta utilizando DOM, en la que el usuario puede cambiarle el color

//Creo una funciion para customizar el color de la tarjeta de usuario, segun el color del boton que pulse
function customize() {
    let prueba = document.getElementById("perfiles");
    const elegirColor = (e) => {
        if (e.target.id == "botonAzul") { //con e.target.id, puedo escuchar el ID del boton que se haya pulsado
            let cambio = document.getElementById("tarjeta"); //selecciono el ID a modificar
            //primero me aseguro de remover cualquier clase de color existente
            cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
            cambio.classList.add('text-bg-primary'); //agrego la clase de la tarjeta de bootstrap
        } else if (e.target.id == "botonGris") {
            let cambio = document.getElementById("tarjeta");
            cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
            cambio.classList.add('text-bg-secondary');
        } else if (e.target.id == "botonVerde") {
            let cambio = document.getElementById("tarjeta");
            cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
            cambio.classList.add('text-bg-success');
        } else if (e.target.id == "botonRojo") {
            let cambio = document.getElementById("tarjeta");
            cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
            cambio.classList.add('text-bg-danger');
        } else if (e.target.id == "botonAmarillo") {
            let cambio = document.getElementById("tarjeta");
            cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
            cambio.classList.add('text-bg-warning');
        } else if (e.target.id == "botonTurquesa") {
            let cambio = document.getElementById("tarjeta");
            cambio.classList.remove('text-bg-light', 'text-bg-primary', 'text-bg-secondary', 'text-bg-success', 'text-bg-danger', 'text-bg-warning', 'text-bg-info')
            cambio.classList.add('text-bg-info');
        } else {
            customize(); //vuelvo a inicializar la función si no selecciona un color valido
        }
    }
    prueba.addEventListener("click", elegirColor); //agrego un evento, que espera un click 
}

//creo una clase con la estructura deseada
class Usuario {
    constructor(nombre, email, clave) {
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
    }
}
const usuarios = []; // Genero un arreglo, donde almacenaré los datos de usuario

//Funcion para esconder el formulario de Registro
function esconderRegistro() {
    const cambio = document.getElementById("formRegistro")
    cambio.classList.add('d-none');
}

//Funcion para esconder el formulario de Login
function esconderLogin() {
    const cambio = document.getElementById("formLogin")
    cambio.classList.add('d-none');
}

//Funcion para mostrar el formulario de Login
function mostrarLogin() {
    const cambio = document.getElementById("formLogin")
    cambio.classList.remove('d-none')
}

//agrego un "listener" que espera la entrada del formulario de registro
let formulario = document.getElementById("formRegistro");
formulario.addEventListener("submit", validarFormulario);

//creo esta funcion para guardar los datos del resgistro en un arreglo
function validarFormulario(e) {
    e.preventDefault() //Evito que se recargue el formulario
    let nombre = e.target.children[0].children[1].value; //cargo en una variable el valor del formulario
    let email = e.target.children[1].children[1].value;
    let clave = e.target.children[2].children[1].value;
    const usuario = new Usuario(nombre, email, clave);
    usuarios.push(usuario) // llevos los datos de usuario al arreglo "usuarios"
    esconderRegistro()
    mostrarLogin()
    console.log(usuario);
}
//agrego un "listener" que espera la entrada del formulario de Login
let formularioLogin = document.getElementById("formLogin");
formularioLogin.addEventListener("submit", validarFormularioLogin);

//creo esta funcion para validar que los datos del usuario, coincidan con los del registro
function validarFormularioLogin(e) {
    e.preventDefault() //Evito que se recargue el formulario
    if ((usuarios[0].nombre !== e.target.children[0].children[1].value) || (usuarios[0].clave !== e.target.children[1].children[1].value)) {
        alert("Datos incorrectos")
        formLogin.reset();
    } else { //Si está correcto, hago el span de la tarjeta de usuario
        const mensaje = document.getElementById("prueba"); // busco el ID a modificar
        mensaje.innerHTML = `<h4 class="card-header">${usuarios[0].nombre}</h4>
        <h6 class="card-title">Bienvenido</h6>
        <p class="card-text">Te enviamos un correo a <b>${usuarios[0].email}</b>, para validar tu registro</p>
        <div id="perfiles">
            <button id="botonAzul" type="button" class="btn btn-primary"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
            <button id="botonGris" type="button" class="btn btn-secondary"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
            <button id="botonVerde" type="button" class="btn btn-success"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
            <button id="botonRojo" type="button" class="btn btn-danger"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
            <button id="botonAmarillo" type="button" class="btn btn-warning"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
            <button id="botonTurquesa" type="button" class="btn btn-info"
            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
        </div>   `;
        esconderLogin();
        customize();
    }
}
