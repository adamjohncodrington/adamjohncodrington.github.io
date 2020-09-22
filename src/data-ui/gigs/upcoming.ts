import { MUSIC_EVENTS as DATA } from "data-raw";
import { isInFuture } from "utils";

import { mapMusicEventsToCards } from "./utils";

const futureGigs: IMusicEvent[] = DATA.filter(
  ({ dates }: IMusicEvent): boolean => isInFuture(dates[0])
);

const upNext = futureGigs.filter(({ maybe }: IMusicEvent): boolean => !maybe);
const maybe = futureGigs.filter(({ maybe }: IMusicEvent): boolean => !!maybe);

export const MAYBE: ICard[] = mapMusicEventsToCards(maybe);
export const UP_NEXT: ICard[] = mapMusicEventsToCards(upNext);
