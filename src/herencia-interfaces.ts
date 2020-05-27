export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  square,
  Panorama,
}
interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  descrption: string;
}

interface Picture extends Entity {
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 1,
  title: 'Un Titulo',
  descrption: 'Una descripcion signuficativa',
};

const picture: Picture = {
  id: 1,
  title: 'Family',
  orientation: PhotoOrientation.Panorama,
};

let newPicture = {} as Picture;
(newPicture.id = 5), (newPicture.title = 'Playa');

console.log('Album', album);
console.log('Picture', picture);
console.log('New Picture', newPicture);
