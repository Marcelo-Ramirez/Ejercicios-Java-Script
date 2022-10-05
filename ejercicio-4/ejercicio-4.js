/* 3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. */

let valor1 = prompt("ingresa texto");
let result;

while (valor1 != null){
    if (valor1 && result){
        valor1 = prompt("ingresa mas texto");
        if (valor1 != null){
            result = result + valor1 + "-";
        }else{
            result = result
        }
    }else{
        result = valor1 + "-";
    }  
};
document.write(result);
