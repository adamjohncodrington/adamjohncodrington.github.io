import { MUSIC_EVENTS as DATA } from "data-raw";
import { mapMusicEventsToCards } from "./utils";

const favourites: MusicEvent[] = DATA.filter(
  ({ favourite }: MusicEvent): boolean => !!favourite
);

export const FAVOURITES: CardProps[] = mapMusicEventsToCards(favourites);
