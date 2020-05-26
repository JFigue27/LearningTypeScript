// Tipo explicito
let idUser: any;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);

// Tipo inferido
let otherId;
otherId = 1;
otherId = '1';

console.log('otherId', otherId);

let surprice: any = 'hello typescript';
//
// surprice.sayHello(); // Error
const res = surprice.substring(6); // Error
console.log('res', res);
