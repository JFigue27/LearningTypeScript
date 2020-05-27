// Orientacion para fotografias

// Valores inferidos
enum PhotoOrientation {
  Landscape,
  Portrait,
  square,
  Panorama,
}
const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('Landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
  Landscape = 10,
  Portrait,
  square,
  Panorama,
}

console.log('portrait', PictureOrientation.Portrait);

// Lista con Strings
enum Contry {
  Colombia = 'Col',
  México = 'mex',
}

const contry: Contry = Contry.México;
console.log('Contries', Contry.México);
