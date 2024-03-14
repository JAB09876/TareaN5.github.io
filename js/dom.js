// Ejemplos de manipulación del DOM
document.addEventListener("DOMContentLoaded", function() {
    // Encontrar elemento por ID
    var findElementById = document.getElementById('content');
    mostrarResultado("findElementById", findElementById);

    // Encontrar elementos por nombre de etiqueta
    var findElementsByTagName = document.getElementsByTagName('a');
    mostrarResultado("findElementsByTagName", findElementsByTagName.length);

    // Encontrar elementos por nombre de clase
    var findElementsByClassName = document.getElementsByClassName('list-group-item');
    mostrarResultado("findElementsByClassName", findElementsByClassName.length);

    // Encontrar elementos por selectores CSS
    var findElementsBySelector = document.querySelectorAll('.list-group-item');
    mostrarResultado("findElementsBySelector", findElementsBySelector.length);

    // Encontrar elementos por colecciones de objetos HTML
    var findElementsByCollection = document.images;
    mostrarResultado("findElementsByCollection", findElementsByCollection.length);
});

function mostrarResultado(id, resultado) {
    document.getElementById(id).textContent = resultado;
}
