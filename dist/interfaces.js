"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[\n        title: " + picture.title + ",\n        date: " + picture.date + ",\n        orientation: " + picture.orientation + "]");
}
var myPic = {
    title: 'Test Title',
    date: '2020-05-27',
    orientation: PhotoOrientation.Landscape,
};
showPicture(myPic);
showPicture({
    title: 'Test Title 2',
    date: '2020-05-28',
    orientation: PhotoOrientation.Portrait,
});
function generatePicture(config) {
    var pic = { title: 'Family', date: '2020-05' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Family 2' });
console.log('picture', picture);
picture = generatePicture({ date: '2020-06' });
console.log('picture', picture);
var user;
user = { id: 10, username: 'jjfigueroa', isPro: true };
console.log('User', user);
// user.id = 20; // Erro por que es de solo lectura.
user.username = 'jfigue27';
console.log('User', user);
