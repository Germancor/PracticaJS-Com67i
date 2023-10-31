let arrayNumeros = [];
let i = 0;
prompt("Ingrese 10 numeros para saber si son pares o impares. Presione continuar");

for (i = 0; i < 10; i++) {
    arrayNumeros[i] = +prompt("Ingrese el número");
    if( arrayNumeros[i] == 1){
        console.log(arrayNumeros[i] + " es IMPAR");
    } else{
        switch(impar(arrayNumeros[i])){
            case 1: 
            console.log(arrayNumeros[i] + " es PAR");
            break;
            case 2:
            console.log(arrayNumeros[i] + " es IMPAR");
            break;
        }
    }
}
console.log(arrayNumeros);

function impar(num){
    flag = 0;
    if( num > 2){
        num -= 2;
        impar(num);
    }else if( num == 2){
        flag=1;
    }else if( num < 2){
        flag=2;
    }
    return flag;
}