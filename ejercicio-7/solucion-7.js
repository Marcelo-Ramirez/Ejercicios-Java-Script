/* 10. Escribe un programa que pida una frase y escriba las vocales que aparecen. */

alert("Te dire cuantas vocales tiene tu texto")

let text = prompt("ingresa un texto"), numero = 0, num;

let vocales = ["a","e","i","o","u"];

while(true){
    if (numero == 5){
        break;
    }
    num = text.split(vocales[numero]).length -1
    document.write("Vocal " +"("+ vocales[numero] + ") " + num + " veces" + "<br>")
    numero++;
}