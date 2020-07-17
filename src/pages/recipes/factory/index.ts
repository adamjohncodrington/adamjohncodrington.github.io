import { PHOTOS } from "./photos";

interface IRecipesFactory {
  PHOTOS: Array<IPhoto>;
}

export const FACTORY: IRecipesFactory = { PHOTOS };
