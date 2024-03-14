// Ejemplo de if...else
var edad = 18;
if (edad >= 18) {
    document.getElementById("if_else_result").textContent = "Eres mayor de edad.";
} else {
    document.getElementById("if_else_result").textContent = "Eres menor de edad.";
}

// Ejemplo de switch
var dia = 3;
switch (dia) {
    case 1:
        document.getElementById("switch_result").textContent = "Lunes";
        break;
    case 2:
        document.getElementById("switch_result").textContent = "Martes";
        break;
    case 3:
        document.getElementById("switch_result").textContent = "Miércoles";
        break;
    case 4:
        document.getElementById("switch_result").textContent = "Jueves";
        break;
    case 5:
        document.getElementById("switch_result").textContent = "Viernes";
        break;
    default:
        document.getElementById("switch_result").textContent = "Fin de semana";
        break;
}

// Ejemplo de try/catch/throw
try {
    throw new Error("Este es un error personalizado");
} catch (error) {
    document.getElementById("try_catch_throw_result").textContent = "Error: " + error.message;
}

// Ejemplo de Objetos Error
try {
    throw new Error("Este es un error personalizado");
} catch (error) {
    document.getElementById("objetos_error_result").textContent = "Error: " + error.message;
}
