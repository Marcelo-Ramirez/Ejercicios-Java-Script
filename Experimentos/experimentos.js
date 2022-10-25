/* let value = 0, suma = 0;
while(true){
    suma = suma + value;
    value = Number(prompt("ingresa numeros"));
    if(isNaN(value)){
        alert("no es un numero");
    }
    if(!value){
        break;
    } 
}
document.write(suma); */

let palabra = Number(prompt("dame algo"));

if (!isNaN(palabra)){
    alert("si  es numero");
}else{
    alert("no es numero");
}

document.write(palabra);