import { MUSIC_EVENTS as DATA } from "data";

export const FAVOURITES: Array<IMusicEvent> = DATA.filter(
  ({ favourite }: IMusicEvent): boolean => !!favourite
).map(
  (gig: IMusicEvent): IMusicEvent => ({
    ...gig,
    hideFavouriteIcon: true,
    hideSubtitle: true,
    hideCompanySymbols: true
  })
);
