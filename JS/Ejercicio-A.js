let flag = true;
let arrayNumeros = [];
let i = 0;
let suma = 0;

prompt("Debe ingresar un minimo de 5 numeros, presione aceptar para continuar");

do {
    let num = +prompt("Ingrese un numero");
    arrayNumeros [i] = num;
    i++;
    let response = prompt("Desea ingresar otro número? Y/N")

    if (response.toUpperCase() === "N" && i >= 5){
        flag = false;
    }
}while (flag)
let length = i;
for (i = 0; i < length; i++){
    console.log(arrayNumeros[i]);
    suma += arrayNumeros[i];
}
console.log("Suma de los numeros del array =" + suma);
