import * as DATA from "../data";

export const FAVOURITES: Array<IGig> = DATA.ARRAY.filter(
  ({ favourite }: IGig): boolean => !!favourite
);
