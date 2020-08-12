import { MUSIC_EVENTS as DATA } from "data-raw";
import { mapMusicEventsToCards } from "./utils";

const favourites: IMusicEvent[] = DATA.filter(
  ({ favourite }: IMusicEvent): boolean => !!favourite
);

export const FAVOURITES: ICard[] = mapMusicEventsToCards(favourites);
