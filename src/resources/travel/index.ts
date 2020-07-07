const requireOsloJpg = (number: string): IJpgSrc =>
  require(`./oslo_${number}.jpg`);

const PHOTOS_TRAVEL_OSLO: Array<IJpgSrc> = [
  requireOsloJpg("1"),
  requireOsloJpg("2"),
  requireOsloJpg("3"),
  requireOsloJpg("4")
];

interface IPhotosTravel {
  OSLO: Array<IJpgSrc>;
}

export const PHOTOS_TRAVEL: IPhotosTravel = {
  OSLO: PHOTOS_TRAVEL_OSLO
};
