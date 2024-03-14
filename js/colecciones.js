// Ejemplos de métodos de arreglos
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
var array3 = [7, 8, 9];

// Método concat()
var arrayConcatExample = array1.concat(array2, array3);
mostrarResultado("arrayConcatExample", arrayConcatExample);

// Método slice()
var arraySliceExample = array1.slice(1, 3); // Extrae elementos desde la posición 1 hasta la posición 2
mostrarResultado("arraySliceExample", arraySliceExample);

// Método splice()
var arraySpliceExample = array1.splice(1, 0, 4, 5); // Agrega elementos a partir de la posición 1
mostrarResultado("arraySpliceExample", array1);

// Método reverse()
var arrayReverseExample = array1.reverse();
mostrarResultado("arrayReverseExample", arrayReverseExample);

// Método join()
var arrayJoinExample = array1.join(" - ");
mostrarResultado("arrayJoinExample", arrayJoinExample);

// Método indexOf()
var arrayIndexOfExample = array1.indexOf(2); // Busca el elemento 2 y devuelve su índice
mostrarResultado("arrayIndexOfExample", arrayIndexOfExample);

// Método lastIndexOf()
var arrayLastIndexOfExample = array1.lastIndexOf(2); // Busca el último elemento 2 y devuelve su índice
mostrarResultado("arrayLastIndexOfExample", arrayLastIndexOfExample);

// Método sort()
var arraySortExample = array1.sort(); // Ordena los elementos del arreglo
mostrarResultado("arraySortExample", arraySortExample);

// Ejemplos de arreglos tipados
// Uint8Array
var typedArrayExample1 = new Uint8Array([10, 20, 30]);
mostrarResultado("typedArrayExample1", typedArrayExample1);

// Float32Array
var typedArrayExample2 = new Float32Array([3.14, 6.28, 9.42]);
mostrarResultado("typedArrayExample2", typedArrayExample2);

function mostrarResultado(id, resultado) {
    document.getElementById(id).textContent = resultado;
}
