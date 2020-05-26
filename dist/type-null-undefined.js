"use strict";
// Explicita
var nullVariable;
nullVariable = null;
// nullVariable = true; //Erro de tipo
var otherVariable = null;
otherVariable = 'test';
console.log('Null Variable', nullVariable);
console.log('Other Variable', otherVariable);
// Undefined
var undefinedVariable = undefined;
// undefinedVariable = 'test'; // Error por el tipo de dato.
var otherUndefinedVariable = undefined;
otherUndefinedVariable = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefinedVariable', otherUndefinedVariable);
// Null y Undefine como subtipos
// --strictNullChecks
var albumName;
// albumName = null;
// albumName = undefined;
