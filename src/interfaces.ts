// Funccion para mostrar una fotografia
export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(`[
        title: ${picture.title},
        date: ${picture.date},
        orientation: ${picture.orientation}]`);
}

let myPic = {
  title: 'Test Title',
  date: '2020-05-27',
  orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
showPicture({
  title: 'Test Title 2',
  date: '2020-05-28',
  orientation: PhotoOrientation.Portrait,
  //   extra: 'test' // Error
});

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const pic = { title: 'Family', date: '2020-05' };
  if (config.title) {
    pic.title = config.title;
  }
  if (config.date) {
    pic.date = config.date;
  }

  return pic;
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Family 2' });
console.log('picture', picture);
picture = generatePicture({ date: '2020-06' });
console.log('picture', picture);

// Interfaz: Usuario

interface User {
  readonly id: number; // Solo lectura
  username: string;
  isPro: boolean;
}

let user: User;

user = { id: 10, username: 'jjfigueroa', isPro: true };
console.log('User', user);
// user.id = 20; // Erro por que es de solo lectura.
user.username = 'jfigue27';
console.log('User', user);
