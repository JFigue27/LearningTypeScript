"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1,
    title: 'Un Titulo',
    descrption: 'Una descripcion signuficativa',
};
var picture = {
    id: 1,
    title: 'Family',
    orientation: PhotoOrientation.Panorama,
};
var newPicture = {};
(newPicture.id = 5), (newPicture.title = 'Playa');
console.log('Album', album);
console.log('Picture', picture);
console.log('New Picture', newPicture);
