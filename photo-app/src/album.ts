import { Item } from './item';
import { Picture } from './picture';

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
