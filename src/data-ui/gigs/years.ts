import { MUSIC_EVENTS as DATA } from "data-raw";
import { isInFuture, splitCardsIntoYears } from "utils";

import { mapMusicEventsToCards } from "./utils";

const past: MusicEvent[] = DATA.filter(
  ({ dates }: MusicEvent): boolean => !isInFuture(dates[0])
);

const sorted: MusicEvent[] = past.sort((a: MusicEvent, b: MusicEvent): number =>
  a.dates[0] > b.dates[0] ? 1 : -1
);

const cards: CardProps[] = mapMusicEventsToCards(sorted);

export const YEARS: CardProps[][] = splitCardsIntoYears(cards);
