export {};

// Union de tipos de datos

// let idUser: number | string;
// idUser = 10;
// idUser = '10';

// // Buscar username dado un ID
// function getUsernameById(id: number | string) {
//   // Logica del negocio

//   return 'jjfigueroa';
// }

// getUsernameById(20);
// getUsernameById('10');
// console.log(getUsernameById(20));

// Alias de tipos de datos
type IdUser = number | string; // Alias para  union de tipos de datos
type UserName = string; // Alias para un solo tipo de datos
let idUser: IdUser;

idUser = 10;
idUser = '10';

// Buscar username dado un ID
function getUsernameById(id: IdUser): UserName {
  // Logica del negocio

  return 'jjfigueroa';
}

getUsernameById(20);
getUsernameById('10');
console.log(getUsernameById(20));

// Typos literales
// 100*100, 500*500, 1000*1000;
type SquareSize = '100x100' | '500x500' | '1000x1000';

// let smallPicture: SquareSize = '200x200'; // Error por que no esta en la lista
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
