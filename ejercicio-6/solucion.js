/* Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a.*/

let str = prompt("dame una palabra"), num;
num = str.split("a").length -1;
document.write("Esa palabra tiene " + num + " veces (a)");