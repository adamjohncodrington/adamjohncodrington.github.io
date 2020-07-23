import { GIGS as DATA } from "data";

export const FAVOURITES: Array<IGig> = DATA.filter(
  ({ favourite }: IGig): boolean => !!favourite
).map(
  (gig: IGig): IGig => ({ ...gig, hideFavouriteIcon: true, hideCompany: true })
);
