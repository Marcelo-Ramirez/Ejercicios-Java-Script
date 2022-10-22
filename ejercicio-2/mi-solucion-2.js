/* 2. Pide una nota (número). Muestra la calificación según la nota:

0-3: Muy deficiente
3-5: Insuficiente
5-6: Suficiente
6-7: Bien
7-9: Notable
9-10: Sobresaliente */

let value = Number(prompt("ingresa un numero de 0 al 10"));
if (value >= 0 && value <= 10){
    switch (value){
        case 0:
        case 1:
        case 2:
            alert("muy deficiente");
        break;
        case 3:
        case 4:
            alert("insuficiente");
        break;
        case 5:
            alert("sufieciente");
        break;
        case 6:
            alert("bien");
        break;
        case 7:
        case 8:
            alert("notable");
        break;
        case 9:
        case 10:
            alert("sobresaliente");
        break;
    }
}else{
    alert("el numero no es valido");
}