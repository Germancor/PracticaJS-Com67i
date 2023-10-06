let flag = true;
let arrayCalificaciones = [i][j];
let i = 0;
let j = 0;
let suma = 0;

do {
    let nombre = +prompt("Ingrese nombre del estudiante");
    arrayCalificaciones [i][j] = nombre;
    for (let index = 0; index < 10; index++) {
        let num = +prompt("Ingrese una calificación del alumno");
        arrayCalificaciones [i][j] = num;
        j++;
    }
    i++;
}while (flag)