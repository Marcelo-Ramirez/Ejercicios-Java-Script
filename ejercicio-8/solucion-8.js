/* Escribe un programa que pida una frase y escriba cuántas de las letras que tiene son vocales.*/
let palabra = prompt("ingresa texto"), vocales, value = 0, num = 0, result = 0;

vocales = ["a","e","i","o","u"]
while(true){
    result = result + value;
    if (num == 5){
        break;
    }
    value = palabra.split(vocales[num]).length -1;
    num++
}
document.write("tu palabra tiene " + result + " vocales")