"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// <tipo> // Angle Bracket syntax
var username;
username = 'jjfigueroa';
// tenemos una cadena, TS confia en mi!
var message = username.length > 5 ? "Welcome " + username : "Username is too short";
console.log('message', message);
var usernameWithId = 'jjfigueroa 2';
// Como obtener el username?
username = usernameWithId.substring(0, 10);
console.log('Username Only', username);
// Sintaxis "as"
message = username.length > 5 ? "Welcome " + username : "Username is too short";
var helloUser;
helloUser = ' hello jjfigueroa';
username = helloUser.substring(6);
console.log('username', username);
