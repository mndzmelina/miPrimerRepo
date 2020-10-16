document.addEventListener("DOMContentLoaded", function (e) {
});

/*var boton = document.getElementById("ingresar");
boton.addEventListener("click", chequeoUsuario, false);*/



//Defino funcion chequeUsuario para corroborar primero datos correctos de credenciales
function chequeoUsuario() {
    alert("Iniciaste sesion");
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contrasena").value;


    //Si los datos están OK -> guarda el item de manera local y voy a la página index.html, sino muestra error (función que declaro más adelante)

    if (!usuario || !contraseña) {
        showError();
    } else {
        localStorage.setItem("usuario", usuario)  //que tambien se puede escribir como localStorage[usuario]=valor;
        location.href = "PaginaPrincipal.html";

    }

}
















