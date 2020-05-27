"use strict";
// Orientacion para fotografias
// Valores inferidos
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.log('Landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portrait"] = 11] = "Portrait";
    PictureOrientation[PictureOrientation["square"] = 12] = "square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama";
})(PictureOrientation || (PictureOrientation = {}));
console.log('portrait', PictureOrientation.Portrait);
// Lista con Strings
var Contry;
(function (Contry) {
    Contry["Colombia"] = "Col";
    Contry["M\u00E9xico"] = "mex";
})(Contry || (Contry = {}));
var contry = Contry.México;
console.log('Contries', Contry.México);
