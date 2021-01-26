import { MUSIC_EVENTS as DATA } from "data-raw";
import { isInFuture } from "utils";

import { mapMusicEventsToCards } from "./utils";

const futureGigs: MusicEvent[] = DATA.filter(({ dates }: MusicEvent): boolean =>
  isInFuture(dates[0])
);

const upNext = futureGigs.filter(({ maybe }: MusicEvent): boolean => !maybe);
const maybe = futureGigs.filter(({ maybe }: MusicEvent): boolean => !!maybe);

export const MAYBE: CardProps[] = mapMusicEventsToCards(maybe);
export const UP_NEXT: CardProps[] = mapMusicEventsToCards(upNext);
