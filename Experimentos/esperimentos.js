//La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
// y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
// Ej:
// stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
// stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
let array = ["leo", "pi", "daniel"];
let numeros = [1,2,3,4]

console.log(array.length);

console.log(numeros.reduce((a,b) => a + b));

console.log(array.reduce((a,b) => a+b));

let estuche = {
    lapiz : 1,
    regla : 2,
    marcadores : ["azul", "rojo", "verde", "amarilo"],
    goma : 2
}

console.log(estuche["lapiz"])