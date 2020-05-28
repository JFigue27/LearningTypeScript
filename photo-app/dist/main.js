"use strict";
// import { User, Album, Picture, PhotoOrientation } from './photo-app';
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const photo_orientation_1 = require("./photo-orientation");
const user = new user_1.User(1, 'jjfiguero', 'Jaime', true);
const album = new album_1.Album(10, 'Jaime Pictures');
const picture = new picture_1.Picture(21, 'Vacations Picture', photo_orientation_1.PhotoOrientation.square);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
// Borramos Album en este punto.
user.removeAlbum(album);
console.log('user', user);
