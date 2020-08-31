document.addEventListener("DOMContentLoaded", function (e) {
    leer_mostrar();
});


//Defino función botón para que cuando inicie la págine quede a la espera de mi acción.

function comenzar() {

    var boton = document.getElementById("ingresar");
    boton.addEventListener("click", chequeoUsuario, false);
}


//Defino funcion chequeUsuario para corroborar primero datos correctos de credenciales
function chequeoUsuario() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;


    //Si los datos están OK -> guarda el item de manera local y voy a la página index.html, sino muestra error (función que declaro más adelante)

    if (!usuario || !contraseña) {
        showError();
    } else {
        localStorage.setItem("usuario", usuario)  //que tambien se puede escribir como localStorage[usuario]=valor;
        leer_mostrar(usuario);
        window.location = "index.html";

    }


    //Defino funcion que lea y muestre la info que guardé anteriormente en donde le indico (id navigationBar que se le puso a los html )

    function leer_mostrar(usuario) {
        var navigationBar = document.getElementById("navigationBar");
        var usuario = localStorage.getItem(usuario);

        navigationBar.innerHTML += "Bienvenido: " + usuario;
    }




















