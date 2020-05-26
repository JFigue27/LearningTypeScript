"use strict";
// Vpoid
// Tipo Explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.firstName);
    //   return 'hola'
}
showInfo({ id: 1, username: 'jjfigueroa', firstName: 'Jaime' });
// Tipo Inferido
function showFormatedInfo(user) {
    console.log('User Info', "\n    id: " + user.id + "\n    username: " + user.username + "\n    firstName: " + user.firstName + "\n    ");
}
showFormatedInfo({ id: 1, username: 'jjfigueroa', firstName: 'Jaime' });
// Tipo Never
function handleError(code, message) {
    // Process you code here
    // Generate a message
    throw new Error(message + ". code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) { }
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
    //   return sum;
}
sumNumbers(10);
// ciclo infinito, program numca funciona
