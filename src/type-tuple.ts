export {};
// [1,'user]
let user: [number, string];
user = [1, 'jjfigueroa'];

console.log('user', user);
console.log('username', user[1].length);
console.log('id', user[0]);

// id, username, isPro
let userInfo: [number, string, boolean];
userInfo = [2, 'jjfigueroa', true];
console.log('userInfo', userInfo);

// Arreglo de tuplas

let array: [number, string][] = [];

array.push([1, 'jjfigueroa']);
array.push([2, 'jjfi']);
array.push([3, 'AAfigueroa']);

console.log('array', array);
// uso de funciones Array
// AAfigueroa => AAfigueroa001

array[2][1] = array[2][1].concat('001'); // AAfigueroa001
console.log('array', array);
