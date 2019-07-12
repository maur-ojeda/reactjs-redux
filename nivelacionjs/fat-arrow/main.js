/**
 * fat arrow functions
 *
*/

//old way 
function fn1( a , b ){
    return a+b
}

const res1 = fn1( 10, 20 );
console.log(res1);


//cuando la funcion es lineal,(solo una línea) no requiere de return
const fn2 = ( a , b ) => a + b
const res2 = fn2( 30, 20 );
console.log(res2);

const fn3 = ( a , b ) => {
// se debe agragar la palabra reservada return como emac5    
    return a + b
}
const res3 = fn3( 30, 20 );
console.log(res3);

