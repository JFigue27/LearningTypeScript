// Explicita
let nullVariable: null;
nullVariable = null;
// nullVariable = true; //Erro de tipo

let otherVariable = null;
otherVariable = 'test';

console.log('Null Variable', nullVariable);
console.log('Other Variable', otherVariable);

// Undefined

let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // Error por el tipo de dato.
let otherUndefinedVariable = undefined;
otherUndefinedVariable = 1;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefinedVariable', otherUndefinedVariable);

// Null y Undefine como subtipos

// --strictNullChecks
let albumName: string;
// albumName = null;
// albumName = undefined;
