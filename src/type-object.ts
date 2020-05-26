// Type Objet

let user: object;
user = {};

user = {
  id: 1,
  userName: 'jjfigueroa',
  firstName: 'Jose Jaime',
  isPro: true,
};

console.log('User Values', user);

// console.log('User Values', user.userName); // Te marca un error cuando usas el object de typescript, pero si usas el Object de JavaScript no te debe de dar Error.

// Object vs object (Object es de JavaScript y object es de Typescript)

const myObjec = {
  id: 1,
  userName: 'jjfigueroa',
  firstName: 'Jose Jaime',
  isPro: true,
};

console.log('User Values', myObjec.userName); // Te marca un error cuando usas el object de typescript, pero si usas el Object de JavaScript no te debe de dar Error.
