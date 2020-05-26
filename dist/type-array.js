"use strict";
// Corchetes []
// Tipo Explicito
var users;
users = ['jjfigueroa', 'miabrasarem', 'oneUser'];
// users = ['jjfigueroa', true, 1]; // Error por tipos de datos
// Tipos Inferidos
var otherUsers = ['jjfigueroa', 'miabrasarem', 'oneUser'];
// otherUsers = ['jjfigueroa', true, 1]; // Error por tipos de datos
//  Array<Tipo>
var pictureTitle;
pictureTitle = ['OneTitile', 'twoTitle', 'threeTitle'];
// Accediendo a los valore en un Array;
console.log('first user', users[0]);
console.log('first title', pictureTitle[0]);
// Propiedades en array;
console.log('users.length', users.length);
// Uso de fucciones en Arrays
users.push('jjfi27');
users.sort();
console.log('users', users);
console.log('users.length', users.length);
