import { GIGS_AND_FESTIVALS as DATA } from "data";

export const FAVOURITES: Array<IGigOrFestival> = DATA.filter(
  ({ favourite }: IGigOrFestival): boolean => !!favourite
).map(
  (gig: IGigOrFestival): IGigOrFestival => ({
    ...gig,
    hideFavouriteIcon: true,
    hideSubtitle: true,
    hideCompanySymbols: true
  })
);
