"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [1,'user]
var user;
user = [1, 'jjfigueroa'];
console.log('user', user);
console.log('username', user[1].length);
console.log('id', user[0]);
// id, username, isPro
var userInfo;
userInfo = [2, 'jjfigueroa', true];
console.log('userInfo', userInfo);
// Arreglo de tuplas
var array = [];
array.push([1, 'jjfigueroa']);
array.push([2, 'jjfi']);
array.push([3, 'AAfigueroa']);
console.log('array', array);
// uso de funciones Array
// AAfigueroa => AAfigueroa001
array[2][1] = array[2][1].concat('001'); // AAfigueroa001
console.log('array', array);
