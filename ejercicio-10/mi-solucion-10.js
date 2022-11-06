/* Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro) */
while(true){
    let numero = Number(prompt("dame un numero"));
    let numeros = [2,3,5,7];
    let resultado = numeros.filter(a => (numero % a) == 0);
    if (resultado.length == 0){
        alert(numero + " es un numero primo");
    }
    if (resultado.length >= 2){
        let acumulado = resultado.splice(resultado.length-1,1)
        alert("El numero " + numero + " es divisible por " + resultado.join(", ") + " y " + acumulado);
    }else if (resultado.length == 1){
        if(resultado)
        alert("El numero " + numero + " es divisible por " + resultado.join(" y "));
    }
}