let arrayNumeros = [], aux;

prompt("Debe ingresar 5 valores. Presione continuar");

for (var i = 0; i < 5; i++) {
    arrayNumeros [i] = +prompt("Ingrese el valor");
}
console.log("array: " + arrayNumeros);

for(let i=0; i < 5; i++){
  for(let j=0; j < 5; j++){
    if(j+1 !== 5){
      if(arrayNumeros[j] < arrayNumeros[j+1]){
        aux = arrayNumeros[j+1];
        arrayNumeros[j+1] = arrayNumeros[j];
        arrayNumeros[j] = aux;
      }
    }  
  }
}

console.log("Array descendente: " + arrayNumeros);

for(let i=0; i < 5; i++){
  for(let j=0; j < 5; j++){
    if(j+1 !== 5){
      if(arrayNumeros[j] > arrayNumeros[j+1]){
        aux = arrayNumeros[j+1];
        arrayNumeros[j+1] = arrayNumeros[j];
        arrayNumeros[j] = aux;
      }
    }  
  }
}

console.log("Array ascendente: " + arrayNumeros);



