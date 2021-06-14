/*Número de palabras
Primera palabra y última palabra
Las palabras colocadas en orden inverso
Las palabras ordenadas de la a la z
Las palabras ordenadas de la z a la a
Un mensaje indicando si la frase es un palíndromo.
*/

function convierteStr() {
    var cadenaString = prompt("escribe una frase");
    nuevoArray = new Array()
    nuevoArray = cadenaString.split(' ');
    console.log(nuevoArray);
    console.log(nuevoArray.length, "palabras");
    console.log("primer elemento", nuevoArray[0]);
    console.log(" ultimo elemento", nuevoArray[nuevoArray.length - 1]);
    console.log("ordenado de A a Z:", nuevoArray.sort());
    console.log("ordenado de Z a A:", nuevoArray.reverse());
    if (cadenaString.split(' ').reverse().join('') === cadenaString) {
        console.log("es un palíndromo");
    } else {
        console.log(" mensaje común");
    }
}
