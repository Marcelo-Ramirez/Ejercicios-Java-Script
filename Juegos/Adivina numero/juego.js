/* Este juego trata de adivinar el numero con pistas que te dara el programa */
alert("Adivina el numero secreto");

let value = prompt("ingresa algo");

if (!isNaN(value)){
    while(!isNaN(value)){
        if (!isNaN(value)){
            alert("es un numero");
        }else{
            alert("no es un numero, intentalo denuevo");
        }
    }
}