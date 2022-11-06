/* El caracol sube 7 pies cada día y retrocede 2 pies cada noche. ¿Cuántos días le tomará al caracol salir de un pozo con la profundidad dada? 
Ejemplo:
Input 31, ouput 6 */
alert("Un caracol sube 7 pies cada día y retrocede 2 pies cada noche. ¿Cuántos días le tomará al caracol salir de un pozo con la profundidad dada?");
let mañana = 0, noche = 0, dia = 0, metros = Number(prompt("ingresa una distancia")); 
while(true){
    mañana = noche;
    mañana = mañana + 7;
    dia++;
    if (mañana >= metros){
        break;
    }
    noche = mañana - 2;
    if (noche >= metros){
        break;
    }
    dia++
}
dia = dia / 2;
document.write("el caracol tarda " + Math.ceil(dia) + " dias en salir")