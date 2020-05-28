export {};
// Crear una fotografia
// function createPicture(title, date, size) {
//   // title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000';
// Usames TS, definimos tipos para parametros
// function createPicture(title: string, date: string, size: SquareSize) {
//   console.log('create Picture using', title, date, size);
// }

// createPicture('Playa Trip', '2020-05-27', '500x500');
// createPicture('Euro', '2020-05-27');

// Parametros opcionales en TS

function createPicture(title?: string, date?: string, size?: SquareSize) {
  console.log('create Picture using', title, date, size);
}

createPicture('Playa Trip', '2020-05-27', '500x500');
createPicture('Euro', '2020-05-27');

// Flat Array function

let createPic = (title?: string, date?: string, size?: SquareSize): object => {
  //   return {
  //     title: title,
  //     date: date,
  //     size: size,
  //   };
  return {
    title,
    date,
    size,
  };
};

const picture = createPic('Typescript class', '2020-05-27', '1000x1000');
console.log('Picture', picture);

// Tipos de retornos con typescript

function handleError(code: number, message: string): never | string {
  // Procesamiento del codigo, mensaje
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'an error has ocurred';
  }
}

try {
  let result = handleError(200, 'ok'); // retorna un string
  console.log('result', result);

  result = handleError(404, 'error'); // retorna never
  console.log('result', result);
} catch (error) {
  //   console.log(error);
}
