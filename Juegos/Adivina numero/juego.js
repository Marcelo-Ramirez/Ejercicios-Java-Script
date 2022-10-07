/* Este juego trata de adivinar el numero con pistas que te dara el programa */

secret = 5;

while(!(value = parseInt(prompt("ingresa algo")) == secret)){
    if (value > secret){
        alert("Este numero es mayor al secreto");
    }else{
        alert("Este numero es menor al secreto");
    }
}



