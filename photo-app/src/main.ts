// import { User, Album, Picture, PhotoOrientation } from './photo-app';

import { User } from './user';
import { Album } from './album';
import { Picture } from './picture';
import { PhotoOrientation } from './photo-orientation';

const user = new User(1, 'jjfiguero', 'Jaime', true);
const album = new Album(10, 'Jaime Pictures');
const picture = new Picture(21, 'Vacations Picture', PhotoOrientation.square);

// Creamos relaciones

user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);

// Borramos Album en este punto.
user.removeAlbum(album);
console.log('user', user);
