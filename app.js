const cargarApiBtn = document.querySelector("#cargarAPI");
cargarApiBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {

    const url = "https://rickandmortyapi.com/api/character/183"

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => mostrarHtml(resultado));

};

function mostrarHtml(datos) {
    const contenido = document.querySelector(".contenido");

    const { id, name, status, image } = datos;

    const html = `
        <p>Id: ${id} </p>
        <p>Nombre: ${name} </p>
        <p>Estado: ${status} </p>
        <a href="${image}" target="_blank"> Ver imágen</a>
    `;

    contenido.innerHTML = html;
}
