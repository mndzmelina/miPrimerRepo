const contenedor = getElementById("contenedor");
const username = getElementById("username");
const password = getElementById("password");

contenedor.addEventListener("submit", function (event) {

    let users = Array(
        {
            usuario = username.value,
            contraseña = password.value
        }
    );

    localStorage.setItem("user", JSON.stringify(users));
    location.href = "index.html";


});