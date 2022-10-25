/* Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */
let num, total = 0;

    while(true){
        if(num == 0){
            alert("no ingresaste ningun valor");
        }
        num = prompt("ingresa numeros");
        if (num == null){
            break;
        }
        if(!isNaN(num)){
            num = Number(num);
            total = total + num;
        }else{
            alert("no es un numero");
        }
    }
    
document.write(total);