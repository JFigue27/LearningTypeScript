"use strict";
console.log('Hola Typescript Platzi World!');
// Number
// Explicito
var phone;
phone = 1;
phone = 6563019467;
// phone = 'Hola'// Error
// Inferido
var phoneNumber = 6563019167;
phoneNumber = 123;
// phoneNumber = '123456'; // Error por tipo
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Tipo: Boolean
var isPro;
isPro = true;
// isPro= 123 // Error
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 231233; // Error de tipo de dato
// Strings
var userName = 'jjfigueroa';
userName = ' Jaime';
//  userName = false; tipo de dato string
// template string
// uso de back-tick `
var userInfo;
userInfo = "\n    userName: " + userName + "\n    firstName: " + (userName + ' Jaime') + "\n    phome: " + phone + "\n    isPro: " + isPro + "\n ";
console.log('UserInfo', userInfo);
