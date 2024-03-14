// Asignaciones
var x = 10;
var y = 5;

var resultado1 = x = y;
var resultado2 = x += y;
var resultado3 = x -= y;
var resultado4 = x *= y;

document.getElementById("resultado1").textContent = resultado1;
document.getElementById("resultado2").textContent = resultado2;
document.getElementById("resultado3").textContent = resultado3;
document.getElementById("resultado4").textContent = resultado4;

// Operadores aritméticos
var a = 10;
var b = 5;

var aritmetico1 = a + b;
var aritmetico2 = a - b;
var aritmetico3 = a * b;
var aritmetico4 = a / b;

document.getElementById("aritmetico1").textContent = aritmetico1;
document.getElementById("aritmetico2").textContent = aritmetico2;
document.getElementById("aritmetico3").textContent = aritmetico3;
document.getElementById("aritmetico4").textContent = aritmetico4;

// Operadores lógicos
var logico1 = x == y;
var logico2 = x != y;
var logico3 = x > y;
var logico4 = x < y;

document.getElementById("logico1").textContent = logico1;
document.getElementById("logico2").textContent = logico2;
document.getElementById("logico3").textContent = logico3;
document.getElementById("logico4").textContent = logico4;
