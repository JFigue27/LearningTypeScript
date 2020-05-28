export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  square,
  Panorama,
}

// Super Clase

abstract class Item {
  protected readonly _id: number;
  protected _title: string;

  constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }
  set id(id: number) {
    // this._id = id;
  }
  get title() {
    return this.title;
  }
  set title(title: string) {
    this._title = title;
  }
}

// get y set

class Picture extends Item {
  // Propiedades
  public static photoOrientation = PhotoOrientation;

  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    this._orientation = orientation;
  }
  // Comportamiento
  public toString() {
    return `[id: ${this._id}, title: ${this._title} , orientation: ${this._orientation}]`;
  }

  get orientation() {
    return this.orientation;
  }
  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }
}

class Album extends Item {
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title); // contructor de superclase
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'Personal Picture');
const picture: Picture = new Picture(1, 'Family Picture', PhotoOrientation.square);
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
