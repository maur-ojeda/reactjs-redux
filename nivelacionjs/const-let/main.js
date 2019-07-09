/**
 * Const: variable inmutable
 * let: variable mutable
 * 
 * el problema que genera que  el compilador de js toma todas la variables y la declara
 * en el inicio, gerando que algunas variables las asigan como undefine
 * 
 * al tratar de asignar un nuevo valor al const este generará un error
 */

let var1 = 0
console.log(var1)
var1 = 'nuevo valor de variable'
console.log(var1)


const var2 = 1
console.log(var2)
var2 = 'nuevo valor'
console.log(var1)