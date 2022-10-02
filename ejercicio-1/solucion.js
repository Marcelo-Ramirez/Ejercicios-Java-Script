/* Escriba un programa que pida dos numeros y te devuelva el mayor valor */

let num1 = parseInt(prompt("ingrese un numeero"));
let num2 = parseInt(prompt("ingresa un segundo numero"));

if (num1 < num2){
    alert(num2 + " es mayor que " + num1);
}else{
    alert(num1 + " es mayor que " + num2);
}