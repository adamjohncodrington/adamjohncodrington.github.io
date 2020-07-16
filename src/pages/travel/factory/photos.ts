import { DATA } from "../data";

const tripsWithPhotos: Array<ITripLeg> = DATA.ALL_FLAT.filter(
  ({ photos }: ITripLeg): boolean => !!photos
);

export const PHOTOS: Array<IPhoto> = tripsWithPhotos
  .map(({ photos }: ITripLeg): Array<IJpgSrc> | undefined => photos)
  .flat();
