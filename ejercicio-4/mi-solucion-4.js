/* 3. Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. */

let valor1 = prompt("ingresa texto");
let result;

while (valor1 && true){
    if (valor1 && result){
        valor1 = prompt("ingresa mas texto");
        if (valor1 && true){
            result = result + valor1 + "-";
        }
    }else{
        result = valor1 + "-";
    }  
};
document.write(result.substring(0,result.length -1));