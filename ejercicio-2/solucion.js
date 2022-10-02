/* 2. Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

let numero = parseInt(prompt("ingrese una nota del 0 al 10"));

if (numero >= 0 && numero<=10){
    if (numero < 3){
        alert ("Muy deficiente");
    }else if (numero < 5){
        alert ("Insuficiente");
    }else if (numero < 6){
        alert("Suficiente");
    }else if (numero < 7){
        alert("Bien");
    }else if (numero < 9){
        alert("Bien");
    }else if (numero <= 10){
        alert("Sobresaliente!");
    }
}else {
    alert("Valor introduciodo erroneo");
}