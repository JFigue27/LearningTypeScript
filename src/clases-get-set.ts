export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  square,
  Panorama,
}

// get y set

class Picture {
  // Propiedades
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }
  // Comportamiento
  public toString() {
    return `[id: ${this.id}, title: ${this.title} , orientation: ${this.orientation}]`;
  }
  get id() {
    return this.id;
  }
  set id(id: number) {
    this._id = id;
  }
  get title() {
    return this.title;
  }
  set title(title: string) {
    this._title = title;
  }
  get orientation() {
    return this.orientation;
  }
  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }
}

class Album {
  private _id: number;
  private _title: string;
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    this._id = id;
    this._title = title;
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }

  get id() {
    return this.id;
  }
  set id(id: number) {
    this._id = id;
  }
  get title() {
    return this.title;
  }
  set title(title: string) {
    this._title = title;
  }
}

const album: Album = new Album(1, 'Personal Picture');
const picture: Picture = new Picture(1, 'Family Picture', PhotoOrientation.square);
album.addPicture(picture);

console.log('album', album);

// Accediento a los miembros privateos

picture.id = 100; // private
picture.title = 'Another title'; // private // get id
album.title = 'Family on vacations'; // private

console.log('album', album);
