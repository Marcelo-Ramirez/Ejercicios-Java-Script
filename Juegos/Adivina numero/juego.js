/* Este juego trata de adivinar el numero secreto*/

alert("Adivina el numero secreto");

let secret = 5;
let value;

while((value = parseInt(prompt("ingresa un numero"))) != secret){
    if (value > secret){
        alert("Este numero es mayor al secreto");
    }else{
        alert("Este numero es menor al secreto");
    }
}

alert("Felicidades");