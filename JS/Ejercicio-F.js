let arrayNumeros = [2,5,10,20,12], multiplicador;

console.log("El array es: " + arrayNumeros);
multiplicador = +prompt("Ingrese el multiplicador del array de numero");

for (var i=0; i<5; i++) {
    arrayNumeros[i] *= multiplicador;
}

console.log("El nuevo array es: " + arrayNumeros);
