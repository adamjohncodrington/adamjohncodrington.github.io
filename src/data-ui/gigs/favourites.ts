import { MUSIC_EVENTS as DATA } from "data-raw";

export const FAVOURITES: Array<IMusicEvent> = DATA.filter(
  ({ favourite }: IMusicEvent): boolean => !!favourite
);
