const nombres = ["jorge", "maria", "jose",
"bob", "pat", "maria", "jose","jose"];

const cantidadNombres = nombres.reduce((contadorNombre, nombre) => {
    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
    return contadorNombre;
},{});

console.log(cantidadNombres);