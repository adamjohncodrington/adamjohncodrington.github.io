import { MUSIC_EVENTS as DATA } from "data-raw";
import { isInFuture, splitCardsIntoYears } from "utils";

import { mapMusicEventsToCards } from "./utils";

const past: IMusicEvent[] = DATA.filter(
  ({ dates }: IMusicEvent): boolean => !isInFuture(dates[0])
);

const sorted: IMusicEvent[] = past.sort(
  (a: IMusicEvent, b: IMusicEvent): number => (a.dates[0] > b.dates[0] ? 1 : -1)
);

const cards: ICard[] = mapMusicEventsToCards(sorted);

export const YEARS: ICard[][] = splitCardsIntoYears(cards);
