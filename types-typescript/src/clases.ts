export {};

// TypeScript 3.8

enum PhotoOrientation {
  Landscape,
  Portrait,
  square,
  Panorama,
}

class Picture {
  // Propiedades
  public id: number;
  public title: string;
  public orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }
  // Comportamiento
  public toString() {
    return `[id: ${this.id}, title: ${this.title} , orientation: ${this.orientation}]`;
  }
}

class Album {
  public id: number;
  public title: string;
  public pictures: Picture[];

  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
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

// Accediento a los miembros publicos

picture.id = 100;
picture.title = 'Another title';
album.title = 'Family on vacations';

console.log('album', album);
