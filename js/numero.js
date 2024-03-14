// Lógica para mostrar resultados en el HTML
function mostrarResultado(id, resultado) {
    document.getElementById(id).textContent = resultado;
}

// Ejecutar el código cuando se cargue el DOM
document.addEventListener("DOMContentLoaded", function() {
    // Ejemplos del objeto Number
    var numberExample = Number("123.456");
    mostrarResultado("numberExample", numberExample);
    var maxNumberExample = Number.MAX_VALUE; // Valor máximo representable en JavaScript
    mostrarResultado("maxNumberExample", maxNumberExample);
    var nanCheckExample = isNaN("abc"); // Verificar si un valor es NaN
    mostrarResultado("nanCheckExample", nanCheckExample);

    // Ejemplos del objeto Math
    var mathExample = Math.pow(2, 3); // 2 elevado a la potencia de 3
    mostrarResultado("mathExample", mathExample);
    var randomExample = Math.random(); // Generar un número aleatorio entre 0 y 1
    mostrarResultado("randomExample", randomExample);
    var ceilExample = Math.ceil(4.1); // Redondear un número hacia arriba
    mostrarResultado("ceilExample", ceilExample);

    // Ejemplos del objeto Date
    var dateExample = new Date().toLocaleDateString(); // Fecha actual
    mostrarResultado("dateExample", dateExample);
    var dayExample = new Date().getDay(); // Día de la semana (0-6, donde 0 es Domingo)
    mostrarResultado("dayExample", dayExample);
    var unixTimeExample = Math.floor(Date.now() / 1000); // Tiempo UNIX actual
    mostrarResultado("unixTimeExample", unixTimeExample);
});
