"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const item_1 = require("./item");
const photo_orientation_1 = require("./photo-orientation");
let Picture = /** @class */ (() => {
    class Picture extends item_1.Item {
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
    Picture.photoOrientation = photo_orientation_1.PhotoOrientation;
    return Picture;
})();
exports.Picture = Picture;
