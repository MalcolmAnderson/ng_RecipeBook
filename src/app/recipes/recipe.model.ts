export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public imageAltText: string;

  constructor(name: string, desc: string, imagePath: string, imageAltText: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.imageAltText = imageAltText;
  }
}
