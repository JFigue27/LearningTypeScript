"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// Super Clase
var Item = /** @class */ (function () {
    function Item(id, title) {
        this._id = id;
        this._title = title;
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            // this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "title", {
        get: function () {
            return this.title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
// get y set
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, orientation) {
        var _this = _super.call(this, id, title) || this;
        _this._orientation = orientation;
        return _this;
    }
    // Comportamiento
    Picture.prototype.toString = function () {
        return "[id: " + this._id + ", title: " + this._title + " , orientation: " + this._orientation + "]";
    };
    Object.defineProperty(Picture.prototype, "orientation", {
        get: function () {
            return this.orientation;
        },
        set: function (orientation) {
            this._orientation = orientation;
        },
        enumerable: false,
        configurable: true
    });
    // Propiedades
    Picture.photoOrientation = PhotoOrientation;
    return Picture;
}(Item));
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, title) {
        var _this = _super.call(this, id, title) || this;
        _this.pictures = [];
        return _this;
    }
    Album.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return Album;
}(Item));
var album = new Album(1, 'Personal Picture');
var picture = new Picture(1, 'Family Picture', PhotoOrientation.square);
album.addPicture(picture);
console.log('album', album);
// Accediento a los miembros privateos
console.log('picture.id', picture.id);
// picture.id = 100; // private, set id=100;
picture.title = 'Another title'; // private // get id
album.title = 'Family on vacations'; // private
console.log('album', album);
// const item = new Item(1, 'My title');
// console.log('New Item:', item);
// Probar el mienbro estatico
console.log('PhotoOrientation', Picture.photoOrientation.Portrait);
