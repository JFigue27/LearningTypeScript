"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
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
