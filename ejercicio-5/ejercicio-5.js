/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let value, suma = 0;

while(true){
    while(value = parseInt(prompt("ingrese algo"))){
        suma = suma + value;
    }
    alert(suma);
    if (true){
        break;
    };
}