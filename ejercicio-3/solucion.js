/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */

let num1 = parseInt(prompt("ingresa un numero"));
let num2 = parseInt(prompt("ingresa un segundo numero"));
let num3 = parseInt(prompt("ingresa un tercer numero"));

if (num1 > num2 && num1 > num3){
    document.write(num1 + " es mayor a " + num2 + " y " + num3);
}else{
    if(num3 > num2){
            document.write(num3 + " es mayor a " + num2 + " y " + num1);
        
    }else{
        document.write(num2 + " es mayor a " + num1 + " y " + num3);
    }
}