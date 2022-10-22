/* Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */

let n1 = parseInt(prompt("primer valor"));
let n2 = parseInt(prompt("segundo valor"));
let n3 = parseInt(prompt("tercer valor"));

if (n1 > n2 && n1 > n3){
    alert(n1 + " es mayor");
}else if(n2 > n1 && n2 > n3){
    alert(n2 + " es mayor");
}else if(n3 > n1 && n3 > n2){
    alert(n3 + " es mayor");
}