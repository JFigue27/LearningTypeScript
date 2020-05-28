export enum PhotoOrientation {
  Landscape,
  Portrait,
  square,
  Panorama,
}

export class User {
  private album: Album[];
  constructor(private id: number, private username: string, private firstName: string, isPro: boolean) {
    this.album = [];
  }

  addAlbum(album: Album) {
    this.album.push(album);
  }
}

export class Item {
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

export class Album extends Item {
  private pictures: Picture[];

  public constructor(id: number, title: string) {
    super(id, title); // contructor de superclase
    this.pictures = [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

export class Picture extends Item {
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
