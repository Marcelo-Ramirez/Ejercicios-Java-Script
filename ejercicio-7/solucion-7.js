/* 10. Escribe un programa que pida una frase y escriba las vocales que aparecen. */

let text = "vocabulario", numero = 0, num;

let vocales = ["a","e","i","o","u"];

while(true){
    if (numero == 5){
        break;
    }
    document.write(num = text.split(vocales[numero]).length -1 + "<br>");
    document.write("Letra " +"("+ vocales[numero] + ") " + num + "veces" + "<br>")
    numero++;
}
