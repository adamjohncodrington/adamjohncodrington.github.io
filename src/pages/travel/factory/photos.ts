import { DATA } from "../data";

const tripsWithPhotos: Array<ITrip> = DATA.ALL.filter(
  ({ photos }: ITrip): boolean => !!photos
);

export const PHOTOS: Array<IPhoto> = tripsWithPhotos
  .map(({ photos }: ITrip): Array<IJpgSrc> | undefined => photos)
  .flat();
