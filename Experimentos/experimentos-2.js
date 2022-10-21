const nombres = ["jorge", "maria", "jose",
"bob", "pat", "maria", "jose","jose"];

const cantidadNombres = nombres.reduce((contadorNombre,nombre) => {
    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
    return contadorNombre;
},{});
console.log(cantidadNombres);

let frutas = ["platano", "frutilla", "platano"]
let numero = frutas.reduce((a,b)=>{
    a[b] = (a[b] || 0) + 1;
    return a;
}, {});
console.log(numero)

let sumar = function(a,b){
    c = a+b+1
    return c;
}
console.log(sumar(2));

let numeros = [1,2,3,4,5];
let resultado = numeros.reduce((a,b,c,d,e) => a + b + c + d + e);
console.log(resultado);

resultado = numeros.reduce((a,b) => a + b );
console.log(resultado);

function sumar3(a,b,c) {
    result = a + b + c;
    return result;
}
console.log(sumar3(1,2,3));

let values = [1,2,3];

console.log(1+2+1+ " " +values);

function sumando (a,b){
    {return a+b;}
};

console.log(sumando(1,2));

let sumandi = (a,b) => a + b;

console.log(sumandi(8,1));
