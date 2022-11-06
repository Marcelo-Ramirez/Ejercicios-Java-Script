/* Escribir un programa que escriba en pantalla los divisores comunes de dos números dados*/
function divisores (num){
    let result = [];
    for (let i = 1; i <= num; i++){
        if((num%i) == 0){
            result.push(i);
        }
    }
    return result;
}
function compara (array1,array2){
    array1 = divisores(array1);
    array2 = divisores(array2);
    let acumulado = [];
    if (array1.length > array2.length){
        for (let i = 0; i <= array2.length-1; i++){
            let result = array1.filter(elemento => elemento == array2[i]);
            if (result[0] == undefined){
                break;
            }
            acumulado.push(result[0])
        }
    }else{
        for (let i = 0; i <= array1.length-1; i++){
            let result = array1.filter(elemento => elemento == array2[i]);
            if (result[0] == undefined){
                break;
            }
            acumulado.push(result[0])
        }
    }
    return acumulado;
}

console.log(compara(12,20))