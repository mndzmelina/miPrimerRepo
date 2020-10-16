var product = {};

function showImagesGallery(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}
//comentarios

var comment = [];

function showCommentList() {

    let htmlContentToAppend = "";

    for (let i = 0; i < comment.length; i++) {
        let comments = comment[i];

        htmlContentToAppend += `
        <div class="card">
        <div class="card-header">
        <div class="d-flex justify-content-between">
        <h5 class="mb-1"><b>${comments.user}:</b></h5>
        <small class="text-muted"><strong>${comments.dateTime}</strong></small>
        </div>
        </div>
        <div class="card-body">
        <h6 class="card-title">${comments.description}</h6>
        </div>
        </div><br>
        `

        document.getElementById("commentList").innerHTML = htmlContentToAppend;
    }
}

/*//Función para agregar comentario
function publicarComentario(comentario){
comentario.user = localStorage.getItem("usuario");
comentario.description = document.getElementById("comentario").value;
    comments.push(comentario);

    showComments(comments);

}
*/



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            product = resultObj.data;

            let productNameHTML = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let soldCountHTML = document.getElementById("soldCount");
            let costHTML = document.getElementById("cost");
            let relatedProductsHTML = document.getElementById("relatedProducts");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            soldCountHTML.innerHTML = product.soldCount;
            costHTML.innerHTML = product.cost;
            relatedProductsHTML.innerHTML = product.relatedProducts;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            comment = resultObj.data;

            let scoreHTML = document.getElementById("score");
            let descriptionHTML = document.getElementById("description");
            let userHTML = document.getElementById("user");
            let dateTimeHTML = document.getElementById("dateTime");

            scoreHTML.innerHTML = comment.score;
            descriptionHTML.innerHTML = comment.description;
            userHTML.innerHTML = comment.user;
            dateTimeHTML.innerHTML = comment.dateTime;

            //Muestro los comentarios en forma de lista
            showCommentList(commentList.comment);
        }
    });
});
