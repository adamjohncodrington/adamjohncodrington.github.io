const requireOsloJpeg = (number: string): IImageSrc =>
  require(`./oslo_${number}.jpg`);

const PHOTOS_TRAVEL_OSLO: Array<IImageSrc> = [
  requireOsloJpeg("1"),
  requireOsloJpeg("2"),
  requireOsloJpeg("3"),
  requireOsloJpeg("4")
];

interface IPhotosTravel {
  OSLO: Array<IImageSrc>;
}

export const PHOTOS_TRAVEL: IPhotosTravel = {
  OSLO: PHOTOS_TRAVEL_OSLO
};
