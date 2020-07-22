import { GIGS as DATA } from "data";

export const FAVOURITES: Array<IGig> = DATA.filter(
  ({ favourite }: IGig): boolean => !!favourite
);
