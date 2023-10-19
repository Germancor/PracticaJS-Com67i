let promedio;
let arrayNotas = [];
let flag = true;
let numeroDeAlumno = 0;

prompt("Debe ingresar 5 calificaiones por alumno");
do {
    for( let index = 0; index < 5; index++ ) {
        arrayNotas [index]= +prompt("Ingrese nota del alumno");
    }
    promedio = promedioNotas(arrayNotas);

    numeroDeAlumno++;
    console.log("Alumno N°" +numeroDeAlumno + ":"+ promedio);

    let response = prompt("Desea ingresar otro alumno? Y/N")
    if (response.toUpperCase() === "N"){
        flag = false;
    }
}while(flag)

function promedioNotas (notas = []){
    let suma = 0;
    let largo = notas.length;
    for( let index = 0; index < largo; index++ ){
        suma += notas[ index ];
    }
    promedio = suma/largo;
    return(promedio);
}