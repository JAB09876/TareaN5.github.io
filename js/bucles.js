// Ejemplo de for
var forResult = '';
for (var i = 0; i < 5; i++) {
    forResult += 'Iteración ' + (i + 1) + '<br>';
}
document.getElementById("for_result").innerHTML = forResult;

// Ejemplo de while
var whileResult = '';
var j = 0;
while (j < 5) {
    whileResult += 'Iteración ' + (j + 1) + '<br>';
    j++;
}
document.getElementById("while_result").innerHTML = whileResult;

// Ejemplo de do...while
var doWhileResult = '';
var k = 0;
do {
    doWhileResult += 'Iteración ' + (k + 1) + '<br>';
    k++;
} while (k < 5);
document.getElementById("do_while_result").innerHTML = doWhileResult;
