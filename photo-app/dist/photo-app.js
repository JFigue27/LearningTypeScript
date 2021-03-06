"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = exports.Album = exports.Item = exports.User = exports.PhotoOrientation = void 0;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
class User {
    constructor(id, username, firstName, isPro) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.album = [];
    }
    addAlbum(album) {
        this.album.push(album);
    }
}
exports.User = User;
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        // this._id = id;
    }
    get title() {
        return this.title;
    }
    set title(title) {
        this._title = title;
    }
}
exports.Item = Item;
class Album extends Item {
    constructor(id, title) {
        super(id, title); // contructor de superclase
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
exports.Album = Album;
let Picture = /** @class */ (() => {
    class Picture extends Item {
        constructor(id, title, orientation) {
            super(id, title);
            this._orientation = orientation;
        }
        // Comportamiento
        toString() {
            return `[id: ${this._id}, title: ${this._title} , orientation: ${this._orientation}]`;
        }
        get orientation() {
            return this.orientation;
        }
        set orientation(orientation) {
            this._orientation = orientation;
        }
    }
    // Propiedades
    Picture.photoOrientation = PhotoOrientation;
    return Picture;
})();
exports.Picture = Picture;
