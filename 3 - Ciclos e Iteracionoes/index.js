// Genero un bucle condicional, para un "login"
// Si se loguean con Admin 1234, dará la bienvenida al usuario Admin
// Caso contrario, dira Usuario o Password incorrecto, según corresponda.

let usuario = prompt("Ingrese un Usuario");
while (usuario != "Admin") {
    alert("Usario Incorrecto")
    usuario = prompt("Infrese un Usuario");
}
let password = prompt("Ingrese un Password");
while (password != "1234") {
    alert("Password Incorrecto")
    password = prompt("Ingrese un Password");
}
alert(`Bienvenido ${usuario}`)