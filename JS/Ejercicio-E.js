let numero, potencia, resultado, x=1;

numero = +prompt("Ingrese un número para sacar su potencia:");

potencia = +prompt("Ingrese la potencia:");

if (potencia === 1){
    resultado = numero;
} else if (potencia > 1){
    resultado = poten(numero,potencia);
}

console.log("La potencia de " + numero + " elevado a "+ potencia + " es igual a " + resultado);

function poten(numero, potencia){
    for(var i=0; i<potencia; i++){
        x = x*numero;
    }
    return x;
}