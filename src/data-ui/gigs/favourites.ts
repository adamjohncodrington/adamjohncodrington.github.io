import { MUSIC_EVENTS as DATA } from "data-raw";
import { mapMusicEventsToCards } from "./utils";

const favourites: Array<IMusicEvent> = DATA.filter(
  ({ favourite }: IMusicEvent): boolean => !!favourite
);

export const FAVOURITES: Array<ICard> = mapMusicEventsToCards(favourites);
