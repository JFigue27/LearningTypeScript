// Vpoid

// Tipo Explicito
function showInfo(user: any): any {
  console.log('User Info', user.id, user.username, user.firstName);
  //   return 'hola'
}

showInfo({ id: 1, username: 'jjfigueroa', firstName: 'Jaime' });

// Tipo Inferido
function showFormatedInfo(user: any) {
  console.log(
    'User Info',
    `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
    `
  );
}

showFormatedInfo({ id: 1, username: 'jjfigueroa', firstName: 'Jaime' });

// Tipo Never

function handleError(code: number, message: string): never {
  // Process you code here
  // Generate a message
  throw new Error(`${message}. code: ${code}`);
}

try {
  handleError(404, 'Not Found');
} catch (error) {}

function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
  //   return sum;
}

sumNumbers(10);
// ciclo infinito, program numca funciona
