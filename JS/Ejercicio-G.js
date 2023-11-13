let arrayNums = [10,2,5,4,35,23,50,66,12,43], flag=false, elementoBuscar;
console.log("El array de 10 dígitos es: " + arrayNums);
elementoBuscar = +prompt("Ingrese el numero a buscar dentro del array");

for(var i=0; i<10; i++){
    if(elementoBuscar == arrayNums[i]){
        flag=true;
    }
}

if(flag==true){
    console.log("El elemento a buscar SI se encuentra en el array");
} else
    console.log("El elemento a buscar NO se encuentra en el array");