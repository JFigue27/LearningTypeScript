console.log('Hola Typescript Platzi World!');

// Number
// Explicito
let phone: Number;

phone = 1;
phone = 6563019467;
// phone = 'Hola'// Error

// Inferido

let phoneNumber = 6563019167;
phoneNumber = 123;
// phoneNumber = '123456'; // Error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean

let isPro: boolean;
isPro = true;
// isPro= 123 // Error

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 231233; // Error de tipo de dato

// Strings
let userName = 'jjfigueroa';
userName = ' Jaime';
//  userName = false; tipo de dato string

// template string
// uso de back-tick `
let userInfo: string;
userInfo = `
    userName: ${userName}
    firstName: ${userName + ' Jaime'}
    phome: ${phone}
    isPro: ${isPro}
 `;

console.log('UserInfo', userInfo);
