var articulos = [];

function showMiCarrito(articulos) {

    let htmlContentToAppend = "";
    var lista = articulos.articles;
    for (let i = 0; i < lista.length; i++) {
        let unArticulo = lista[i];
        if (unArticulo.currency === "UYU") unArticulo.unitCost = unArticulo.unitCost / 40;

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
        <h6 class="card-title">Nombre: ${unArticulo.name}</h6>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
        <h6 class="card-title">Cantidad: ${unArticulo.count}</h6>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
        <h6 class="card-title">Moneda: ${unArticulo.currency}</h6>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
        <h6 class="card-title">Costo unitario: ${unArticulo.unitCost}</h6>
        </div>
        <div class="col-lg-3 col-md-4 col-6">
        <h6 class="card-title"><img src="${unArticulo.src}"</h6>
        </div>
        `

        document.getElementById("article").innerHTML = htmlContentToAppend;
        //Quedó mostrando los artículos del array. No importa si son 2 o 50, va a funcionar
        //Resta acomodarlos en la página.
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            articulos = resultObj.data;



            //Muestro los artículos
            showMiCarrito(articulos); //Por las dudas le puse de parámetro el array global.
        }
    });
});