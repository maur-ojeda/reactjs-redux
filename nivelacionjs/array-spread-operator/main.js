//array spread operator
const arr = [1, 2]

const suma = (a,b) => a + b

const resultado = suma (...arr)

console.log(arr)
console.log(resultado)

//con ... se hace una copia del arr y se le asigna a arr2
const arr2 = [...arr]

arr.push(3)

console.log(arr2, arr)