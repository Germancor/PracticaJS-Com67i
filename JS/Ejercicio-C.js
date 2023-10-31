let arrayPeces = [];
let primerLugar = 0, segundoLugar = 0, tercerLugar = 0;

prompt("Debe ingresar 5 valores del peso de los peces. Presione continuar");

for (let i = 0; i < 5; i++) {
    arrayPeces [i] = +prompt("Ingrese el valor del pez");
}
console.log(arrayPeces);
for (let i = 0; i < 5; i++) {
    if(arrayPeces[i] > primerLugar){
        primerLugar = arrayPeces[i];  
    }
}
for (let i = 0; i < 5; i++) {
    if(arrayPeces[i] < primerLugar && arrayPeces[i] > segundoLugar){
        segundoLugar = arrayPeces[i];  
    }
}
for (let i = 0; i < 5; i++) {
    if(arrayPeces[i] < primerLugar && arrayPeces[i] < segundoLugar && arrayPeces[i] > tercerLugar){
        tercerLugar = arrayPeces[i];
    }
}
console.log("Pez de mayor pesp: " + primerLugar + "Kg");
console.log("Segundo pez de mayor peso: " + segundoLugar + "Kg");
console.log("Tercer pez d emayor peso: " + tercerLugar + "Kg");