// Calculador de cantidad de ladrillos x m2, según el tipo de ladrillo.
// Se necesitan 56 ladrillos comunes x m2
// Se necesitan 16 ladrillos huecos x m2
// Se necesitan 13 bloques de hormigon x m2
// 18kg de cemento x m2 de pared
// 0.04 m3 de Arena x m2 de pared

/*La intención es que la calculadora solo admita numeros en las medidas y 
le avise al usuario si no está seleccionando el tipo de ladrillo correcto. 
Luego, sobre las medidas ingresadas por el usuario, el simulador calulará la cantidad necesaria de ladrillos y cemento.
Mostrará una alerta lo que el usuario necesita y volcará en el carrito (arreglo por ahora):
Cantidad
Objeto
Precio calculado de objeto en base a la cantidad*/

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

//Funcion para esconder el formulario de Registro
function esconderRegistro() {
    const cambio = document.getElementById("formRegistro")
    cambio.classList.add('d-none');
}
//Funcion para mostrar el formulario de Registro
function mostrarRegistro() {
    const cambio = document.getElementById("formRegistro")
    cambio.classList.remove('d-none');
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

//Funcion para mostrar el contenido de la pagina
function mostrarPrincipal() {
    const cambio = document.getElementById("seccion-Principal")
    cambio.classList.remove('d-none')
}

//agrego un "listener" que espera la entrada del formulario de registro
let formulario = document.getElementById("formRegistro");
formulario.addEventListener("submit", validarFormulario);

//creo esta funcion para guardar los datos del resgistro en un arreglo
function validarFormulario(e) {
    e.preventDefault() //Evito que se recargue el formulario
    //valido que el formulario no este vacio
    if (!e.target.children[0].children[1].value || !e.target.children[2].children[1].value || !e.target.children[1].children[1].value) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor complete todos los campos',
        })
    } else {
        let nombre = e.target.children[0].children[1].value; //cargo en una variable el valor del formulario
        let email = e.target.children[1].children[1].value;
        let clave = e.target.children[2].children[1].value;
        const usuario = new Usuario(nombre, email, clave);
        //Guardo el usuario generado utilizando JSON stringify, para que mantenga el formato.
        sessionStorage.setItem(`${email}`, JSON.stringify(usuario));
        //escondo el formulario de registro
        esconderRegistro()
        //muetro el formulario de login
        mostrarLogin()
        //Dejo un log del usuario generado, para ayudar con el login y las pruebas durante el proyecto
        console.log(usuario);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `<b>${nombre}</b>, registramos tus datos a la cuenta ${email}`,
            showConfirmButton: false,
            timer: 5000
        })
    }
}

//agrego un "listener" que espera la entrada del formulario de Login
let formularioLogin = document.getElementById("formLogin");
formularioLogin.addEventListener("submit", validarFormularioLogin);

//Hago la validacion del login, utilizando JSON del arreglo almacenado.
function validarFormularioLogin(e) {
    e.preventDefault();
    //valido que el formulario no este vacio
    if (!e.target.children[0].children[1].value || !e.target.children[2].children[1].value || !e.target.children[1].children[1].value) {
        Swal.fire({
            icon: 'error',
            title: 'Por favor complete todos los campos',
        })
    } else {
        //valido que el correo ingresado sea una cuenta registrada
        let usuarioStorage = JSON.parse(sessionStorage.getItem(`${e.target.children[1].children[1].value}`));
        if (!usuarioStorage) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${e.target.children[1].children[1].value}, no se encuentra registrado`,
            })
        } else { //si esta registrada, valido con los datos coincidan con los que estan almacenados
            //Trabajo con Desestructuracion
            let {
                nombre,
                email,
                clave
            } = usuarioStorage
            if (nombre === e.target.children[0].children[1].value && clave === e.target.children[2].children[1].value && email === e.target.children[1].children[1].value) {
                //si los datos coinciden, genero la tarjeta de usuario y lo dejo pasar
                const mensaje = document.getElementById("tarjetaSpan"); // busco el ID a modificar
                mensaje.innerHTML = `<div id="tarjeta" class="card text-center text-bg-light mx-auto" style="width: 13rem;">
                                    <img src="./img/user.png" class="card-img-top align-self-center mt-3" alt="foto usuario" style="width: 3rem;">
                                    <h4 class="card-header">${nombre}</h4>
                                    <h6 class="card-title">Bienvenido</h6>
                                    <p class="card-text" id="correoStorage">Te enviamos un correo a <b>${email}</b>, para validar tu registro</p>
                                    <div id="perfiles">
                                    <button id="botonAzul" type="button" class="btn btn-primary" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
                                    <button id="botonGris" type="button" class="btn btn-secondary" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
                                    <button id="botonVerde" type="button" class="btn btn-success" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
                                    <button id="botonRojo" type="button" class="btn btn-danger" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
                                    <button id="botonAmarillo" type="button" class="btn btn-warning" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
                                    <button id="botonTurquesa" type="button" class="btn btn-info" style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .25rem;"></button>
                                    </div>
                            </div>`;
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `<b>${nombre}</b>, ya podes realizar tu pedido!`,
                    showConfirmButton: false,
                    timer: 1500
                })
                //Una vez que se loguea, ejecuto varioas acciones:
                sessionStorage.setItem(`userCarrito`, `${email}`); //almaceno en la session, el mail, para luego trer el carrito correspondiente al mail
                esconderLogin();
                customize();
                mostrarPrincipal();
                checkUserCarrito();
                agruparAsync();
                actualizarCarrito()
            } else { //si no coinciden, le aviso que algun dato no coincide con el correo registrado
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `los datos ingresados, no coinciden con los que tenemos registrados en ${e.target.children[1].children[1].value}`,
                })
            }
        }
    }
}

//ACA COMIENZA EL CODIGO PARA EL CALCULO DE MATERIALES

// Defino la estructura de mi lista de materiales
class Materiales {
    constructor(id, nombre, cantidad, descripcion, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.descripcion = descripcion;
        this.precio = precio;
        this.img = img;
    }
}


// Materiales que utilizo en el asistente.
const material1 = new Materiales(1, "Arena", 1, "Arena x m3", 5000, "./img/materiales/arena.png");
const material2 = new Materiales(2, "Cal", 1, "Cal Milagro x 25Kg", 1573, "./img/materiales/cal.png");
const material3 = new Materiales(3, "Cemento", 1, "Cemento Avellaneda x 50Kg", 1202, "./img/materiales/cemento.png");
const material4 = new Materiales(4, "Ladrillo Comun", 1, "Ladrillo Comun 5.5x18x25", 35, "./img/materiales/ladrillo-comun.png");
const material5 = new Materiales(5, "Ladrillo Hueco", 1, "Ladrillo Hueco 12x18x33", 98, "./img/materiales/ladrillo-hueco12.png");
const material6 = new Materiales(6, "Bloque Hormigon", 1, "Bloque Liso 19x19x39", 200, "./img/materiales/ladrillo-bloque.png");


//Comienzo a escuchar el Asistente de Compra
let launch = document.getElementById("asistenteLaunch");
launch.addEventListener("click", asistenteMostrar);

function asistenteMostrar() {
    let cambio = document.getElementById("asistente-datos"); //selecciono el ID a modificar
    //primero me aseguro de remover cualquier clase de color existente
    cambio.classList.remove('d-none'); //agrego la clase de la tarjeta de bootstrap
}

//agrego un "listener" que espera la entrada del formulario de calculo
let formularioCalculo = document.getElementById("formCalculo");
formularioCalculo.addEventListener("submit", validarCalculo);

function validarCalculo(e) {
    e.preventDefault() //Evito que se recargue el formulario
    sessionStorage.setItem("ancho", e.target.children[0].children[1].value); //cargo en una variable el valor del formulario
    sessionStorage.setItem("alto", e.target.children[1].children[1].value); //cargo en una variable el valor del formulario
    sessionStorage.setItem("tipo", e.target.children[2].children[0].value); //cargo en una variable el valor del formulario
    asistente();
}

//Creo una gran funcion, que engloba todas las funciones del asistente
function asistente() {

    let ancho = sessionStorage.getItem("ancho")
    let alto = sessionStorage.getItem("alto")
    let tipo = sessionStorage.getItem("tipo")

    // Calculo los m2 en base al imput del usuario y devuelvo la cantidad de ladrillos según el tipo solicitado.
    function computo(ancho, alto) {
        switch (tipo) {
            case "4":
                return 60 * ancho * alto;

            case "5":
                return 16 * ancho * alto;

            case "6":
                return 13 * ancho * alto;

            default:
                return 0;
        }
    }

    // Almaceno en una variable la superficie de la pared, para luego calcular cemento y arena en un futuro
    let superficie = (ancho * alto);


    //Declaro una función "anotaciion", que la uso para unir el dato ingresado por el usuario, con mi lista de materiales.
    function anotacion(dato) {
        switch (dato) {
            case "4":
                return material4;

            case "5":
                return material5;

            case "6":
                return material6;

            default:
                return 0;
        }
    }

    //Genero una funcion, para calcular el precio, según el material elegido y su precio.
    function calcularPrecio(info, info2) {
        switch (info) {
            case "4":
                return material4.precio * info2;

            case "5":
                return material5.precio * info2;

            case "6":
                return material6.precio * info2;

            default:
                return 0;
        }
    }

    // Calculo de CEMENTO (18Kg x m2)
    function calcularCemento(parametro) {
        return parametro * 18;
    }
    // Almaceno en una variable, la cantidad de cemento en Kg, según la supercifie calculada anteriormente.
    let resultadoCemento = calcularCemento(superficie);

    // Calculo de ARENA
    function calcularArena(parametro) {
        return parametro * 0.04;
    }

    // Almaceno la cantidad de arena en una variable, según la superficie calculada
    let resultadoArena = calcularArena(superficie);

    // Almaceno en una variable la cantidad de ladrillos x m2.
    let resultado = computo(ancho, alto);
    if (resultado != 0) {
        // Utilizo un Sweet alert para mostrar el resultado del calculo
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Usted necesita:',
            text: `${resultado} ${tipo} \n ${resultadoCemento} Kg de ${material3.nombre} \n ${resultadoArena} m3 de ${material1.nombre}`,
            html: `<table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Material</th>
                <th scope="col">Cantidad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Ladrillos ${tipo}</td>
                <td>${resultado} Unidades</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>${material3.nombre}</td>
                <td>${resultadoCemento} Kg</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>${material1.nombre}</td>
                <td>${resultadoArena} m3</td>
            </tr>
        </tbody>
    </table>`,
            imageUrl: './img/deCalyArena-02.png',
            imageHeight: 300,
            showCancelButton: true,
            confirmButtonText: 'Agregar al Carrito',
            cancelButtonText: 'Cancelar',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'En tu Carrito!',
                    'Los materiales ya están en tu carrito',
                    'success'
                )
                console.log(carrito);
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Borrado',
                    'Ya puedes volver a realizar tu calculo :)',
                    'error'
                )
            }
        })
        agregarAlCarritoAsistente(anotacion(tipo).id, (anotacion(tipo).cantidad) * resultado);
        console.log((anotacion(tipo).cantidad) * resultado);
        /* // Alimento el arreglo Carrito, con Cantidad de ladrillos, tipo de material y el subtotal para ese item.
        carrito.push(resultado, anotacion(tipo), calcularPrecio(tipo, resultado));
        // Alimento el arreglo Carrito, calculando la cantidad de bolsas de cemento, según los Kg calculados. tambien subo tipo de material y el subtotal para ese item.
        carrito.push(Math.round((calcularCemento(superficie) / 50)), material3, material3.precio * Math.round((calcularCemento(superficie) / 50)));
        carrito.push((Math.ceil(calcularArena(superficie))), material1, material1.precio * Math.ceil(calcularArena(superficie))); */
    } else {
        Swal.fire('Debes ingresar las medidas de tu muro y el tipo de ladrillo, para que podamos ayudarte con tu proyecto')
    }
}

//Creo una funcion que agrega al carrito el producto seleccionado mediante el id
const agregarAlCarritoAsistente = (prodId, cant) => {
    const existe = carrito.some(prod => prod.id === prodId)
    if (existe) { //valido si existe el item en el carrito
        const temp = carrito.map(prod => {
            prod.id === prodId && (prod.cantidad + cant) //sumo la cantidad del asistente a la cantidad existente
        })
    } else { //si no existe en el carrito
        const item = productos.find((prod) => prod.id === prodId);
        item.cantidad = cant //genero esto, para asegurarme que la cantidad la deje en 1 si no existe
        carrito.push(item); //subo el resultado al carrmito
    }
    actualizarCarrito() //refresco
}

//Portal de ingreso a la pagina
Swal.fire({
    imageUrl: './img/deCalyArena-03.png',
    showDenyButton: true,
    showCancelButton: false,
    allowOutsideClick: false,
    confirmButtonText: 'Registrarse',
    denyButtonText: `Ingresar`,
}).then((result) => {
    if (result.isConfirmed) {
        mostrarRegistro();
    } else if (result.isDenied) {
        mostrarLogin();
    }
})

//COMIENZO A TRABAJAR CON EL CARRITO

//Creo un arreglo para almacenar todos los productos y poder itinerarlo luego al spawnear mis productos
let productos = []
//Genero un arreglo vacio, para usar de carrito
let carrito = [];

//Genero una funcion asyncronica, para traerme los productos de un json
const cargar = async () => {
    const response = await fetch("./json/data.json");
    const items = await response.json();
    items.forEach(item => {
        productos.push(new Materiales(item.id, item.nombre, item.cantidad, item.descripcion, item.precio, item.img))
    })
}
//Englobo en otra funcion asyncronica la funcion que renderiza los productos, para que espere la carga del arreglo.
const agruparAsync = async () => {
    await cargar();
    mostrarProductos(productos)
    console.log(productos);
}


//Creo una funcion para generar mis productos medianete DOM
const mostrarProductos = (productos) => {
    const contenedorProductos = document.getElementById("productos");
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("col")
        div.classList.add("mt-3")
        div.classList.add("mb-3")
        div.innerHTML = `
                        <div class="card text-center mx-auto" style="width: 18rem;">
                            <img src="${producto.img}" class="card-img-top" alt="Cemento">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">${producto.descripcion}</p>
                                <p class="card-text">Precio:$ ${producto.precio}</p>
                                <button class="btn btn-primary" id="boton${producto.id}">Comprar</button>
                            </div>
                        </div>
                        `
        contenedorProductos.appendChild(div)
        //Agrego para cada producto un evento que escucha el boton y lleva el producto al carrito
        const boton = document.getElementById(`boton${producto.id}`)
        boton.addEventListener(`click`, () => {
            agregarAlCarrito(producto.id)
        })
    })

}

//Agrego una funcion que agrega al carrito el producto seleccionado mediante el id
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)
    if (existe) { //valido si existe el item en el carrito
        const temp = carrito.map(prod => {
            prod.id === prodId && prod.cantidad++ //sumo uno a la cantidad existente
        })
    } else { //si no existe en el carrito
        const item = productos.find((prod) => prod.id === prodId);
        if (item) {
            const temp = productos.map(prod => {
                if (prod.id === prodId) {
                    prod.cantidad = 1 //genero esto, para asegurarme que la cantidad la deje en 1 si no existe
                }
            })
        }
        carrito.push(item); //subo el resultado al carrito
    }
    actualizarCarrito() //refresco
}

//Creo un modal para usar de carrito
const contenedorCarrito = document.getElementById("contenedorCarrito");

//Vaciar Carrito, llamando al boton que tengo generado
const botonVaciar = document.getElementById("vaciar-carrito");
botonVaciar.addEventListener(`click`, () => {
    carrito.length = 0 //dejo en 0 la longitud del carrito
    actualizarCarrito(); //refresco el carrito para mostrar cambios
})

//Eliminar del Carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId) //busco el producto
    if (item) {
        const temp = productos.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad = 1 //genero esto, para asegurarme que la cantidad queda en 0 al bajar el ID
            }
        })
    }
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1) //Hago un "splice", que se para en la posicion seleccionada y borra 1 en este caso
    actualizarCarrito(); //refresco el carrito para mostrar cambios
}

//Actualizar Carrito
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement(`div`)
        div.classList.add("row")
        div.innerHTML = `
        <div class="col">${prod.nombre}</div>
        <div class="col-3">Precio:$ ${prod.precio}</div>
        <div class="col-4">Cantidad: ${prod.cantidad}</div>
        <a type="button" onclick="eliminarDelCarrito(${prod.id})" class="col-1 mx-auto"> <img class="basura" src="./img/basura.png" alt="basurero"> </a>
        `
        contenedorCarrito.appendChild(div)
    })
    //Modifico el contador del carrito
    const contadorCarrito = document.getElementById("contadorCarrito");
    contadorCarrito.innerText = carrito.length;
    //Modifico el precio total
    const precioTotal = document.getElementById("precioTotal");
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    console.log(carrito);
    //Almaceno el carrito y uso como clave el correo del usuario, para recuperar productos
    localStorage.setItem(sessionStorage.userCarrito, JSON.stringify(carrito))
}


// Voy a revisar si existe algo en mi carrito, guardado en localStorage
function checkUserCarrito() {
    const userCarrito = (sessionStorage.getItem(`userCarrito`));
    let carritotemp = JSON.parse(localStorage.getItem(userCarrito))
    if (carritotemp) {
        carrito.push(...carritotemp)
    }
    console.log(carrito);
}