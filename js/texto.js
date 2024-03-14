document.addEventListener("DOMContentLoaded", function() {
    // Ejemplos de cadenas literales
    var literalExamples = [
        "Hello, world!",
        "JavaScript is fun!",
        "12345",
        "Special characters: !@#$%^&*()",
        "Multiline\nstring\nexample"
    ];

    // Mostrar ejemplos de cadenas literales en el HTML
    var literalList = document.getElementById("literal-examples");
    literalExamples.forEach(function(example) {
        var listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = example;
        literalList.appendChild(listItem);
    });

    // Ejemplos de métodos de String
    var stringMethods = [
        "length",
        "toUpperCase",
        "toLowerCase",
        "charAt",
        "indexOf",
        "lastIndexOf",
        "startsWith",
        "endsWith",
        "includes",
        "substring",
        "slice",
        "replace",
        "trim",
        "split",
        "concat"
    ];

    // Mostrar ejemplos de métodos de String en el HTML
    var methodList = document.getElementById("string-methods");
    stringMethods.forEach(function(method) {
        var listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.textContent = "String." + method + "(): " + getMethodResult(method);
        methodList.appendChild(listItem);
    });
});

// Función para obtener el resultado de un método de String
function getMethodResult(method) {
    var str = "Example String";
    switch (method) {
        case "length":
            return str.length;
        case "toUpperCase":
            return str.toUpperCase();
        case "toLowerCase":
            return str.toLowerCase();
        case "charAt":
            return str.charAt(5);
        case "indexOf":
            return str.indexOf("String");
        case "lastIndexOf":
            return str.lastIndexOf("e");
        case "startsWith":
            return str.startsWith("Ex");
        case "endsWith":
            return str.endsWith("ng");
        case "includes":
            return str.includes("ample");
        case "substring":
            return str.substring(2, 7);
        case "slice":
            return str.slice(2, 7);
        case "replace":
            return str.replace("Example", "Sample");
        case "trim":
            return "  Example String  ".trim();
        case "split":
            return str.split(" ");
        case "concat":
            return str.concat(" - Additional Text");
        default:
            return "Not implemented";
    }
}
