// object spread operator

const obj = {
    a:1,
    b:2
}

// const pertime mutar propiedades 
const obj1 = {
// se hace  una copia  de obj
    data:{
        ... obj
    }    
}

obj1['c'] = 3

console.log ( obj , obj1 );