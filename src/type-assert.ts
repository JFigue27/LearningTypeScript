export {};
// <tipo> // Angle Bracket syntax

let username: any;
username = 'jjfigueroa';

// tenemos una cadena, TS confia en mi!

let message: string = (<string>username).length > 5 ? `Welcome ${username}` : `Username is too short`;

console.log('message', message);

let usernameWithId: any = 'jjfigueroa 2';
// Como obtener el username?
username = (<string>usernameWithId).substring(0, 10);
console.log('Username Only', username);

// Sintaxis "as"
message = (username as string).length > 5 ? `Welcome ${username}` : `Username is too short`;

let helloUser: any;
helloUser = ' hello jjfigueroa';
username = (helloUser as string).substring(6);
console.log('username', username);
