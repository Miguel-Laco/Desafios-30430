// Calculador de cantidad de ladrillos x m2, según el tipo de ladrillo.
// Se necesitan 60 ladrillos comunes x m2
// Se necesitan 16 ladrillos huecos x m2
// Se necesitan 13 bloques de hormigon x m2

/*La intención es que la calculadora solo admita numeros en las medidas y 
le avise al usuario si no está seleccionando el tipo de ladrillo correcto*/

const computo = (ancho, alto) => {
    switch (tipo) {
        case "comunes":
            return 60 * ancho * alto;

        case "huecos":
            return 16 * ancho * alto;

        case "bloques":
            return 13 * ancho * alto;

        default:
            return 0;
    }
}
let ancho = parseInt(prompt("Ingrese el ancho de la pared"));
while (isNaN(ancho)) {
    alert('solo numeros!')
    ancho = parseInt(prompt("Ingrese el ancho de la pared"));
}
let alto = parseInt(prompt("Ingrese el alto de la pared"));
while (isNaN(alto)) {
    alert('solo numeros!')
    alto = parseInt(prompt("Ingrese el ancho de la pared"));
}
let tipo = prompt("Indique si será de ladrillos COMUNES, HUECOS o BLOQUES").toLowerCase();


let resultado = computo(ancho, alto);
if (resultado != 0){
alert(`Usted necesita ${resultado} Ladrillos ${tipo}`);
}else {
alert ("Seleccione correctamente el tipo de ladrillos")
}