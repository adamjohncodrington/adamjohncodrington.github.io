import { DATA } from "../data";

const recipesWithPhotos: Array<IPhoto> = DATA.ALL.filter(
  ({ image }: IRecipe): boolean => !!image
);

export const PHOTOS: Array<IPhoto> = recipesWithPhotos.map(
  ({ image }: IRecipe): Array<IJpgSrc> | undefined => image
);
