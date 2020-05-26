"use strict";
// Tipo explicito
var idUser;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);
// Tipo inferido
var otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId);
var surprice = 'hello typescript';
//
// surprice.sayHello(); // Error
var res = surprice.substring(6); // Error
console.log('res', res);
