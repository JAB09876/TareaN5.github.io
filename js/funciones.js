// Definir una función en JavaScript
function miFuncion() {
    alert('¡Hola! Esta es una función en JavaScript.');
}

// Obtener el botón y agregar un evento de clic para llamar a la función
var btnCallFunction = document.getElementById('btn-call-function');
btnCallFunction.addEventListener('click', miFuncion);
