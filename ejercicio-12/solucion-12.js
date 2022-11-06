/* Devuelve true o false dependiendo de si el número es simétrico o no.
Un número es simétrico cuando es igual a su reverso.
Ej: numeroSimetrico(11711) devuelve true */
console.log(simetria(123));
console.log(simetria(1221));
console.log(simetria(12321));
function simetria (num){
    let acumulado1 = [];
    let acumulado2 = [];
    num = String(num);
    if ((num.length%2) == 0){
        limit = num.length / 2;
        for(let i = 0; i < limit; i++){
            acumulado1.push(num[i]);
        }
        for(let i = num.length-1; i >= limit; i--){
            acumulado2.push(num[i]);
        }
        for(let i = 0;i <= acumulado1.length; i++){
            if (acumulado1[i] != acumulado2[i]){
                return false;
            }
        }
    }else{
        let limit = Math.floor(num.length / 2);
        for(let i = 0; i < limit; i++){
            acumulado1.push(num[i]);
        }
        for(let i = num.length-1; limit < i; i--){
            acumulado2.push(num[i]);
        }
        for(let i = 0;i <= acumulado1.length; i++){
            if (acumulado1[i] != acumulado2[i]){
                return false;
            }
        }
    }
    return true;
}