"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Usames TS, definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize) {
//   console.log('create Picture using', title, date, size);
// }
// createPicture('Playa Trip', '2020-05-27', '500x500');
// createPicture('Euro', '2020-05-27');
// Parametros opcionales en TS
function createPicture(title, date, size) {
    console.log('create Picture using', title, date, size);
}
createPicture('Playa Trip', '2020-05-27', '500x500');
createPicture('Euro', '2020-05-27');
// Flat Array function
var createPic = function (title, date, size) {
    //   return {
    //     title: title,
    //     date: date,
    //     size: size,
    //   };
    return {
        title: title,
        date: date,
        size: size,
    };
};
var picture = createPic('Typescript class', '2020-05-27', '1000x1000');
console.log('Picture', picture);
// Tipos de retornos con typescript
function handleError(code, message) {
    // Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return 'an error has ocurred';
    }
}
try {
    var result = handleError(200, 'ok'); // retorna un string
    console.log('result', result);
    result = handleError(404, 'error'); // retorna never
    console.log('result', result);
}
catch (error) {
    //   console.log(error);
}
