/* 9. Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a. */

let company = prompt("Ingresa una palabra"), variante, suma = 0;
while(true){
    variante = company;
    company = company.substr(company.indexOf("a") + 1);
    if(variante != company){
        suma++;
    }
    if (variante == company){
        break;
    }
}
document.write("la letra (a) aparece " + suma + " veces");