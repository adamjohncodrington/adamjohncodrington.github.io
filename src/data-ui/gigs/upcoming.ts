import { MUSIC_EVENTS as DATA } from "data-raw";
import { isInFuture } from "utils";

import { mapMusicEventsToCards } from "./utils";

const futureGigs: MusicEvent[] = DATA.filter(({ dates }: MusicEvent): boolean =>
  isInFuture(dates[0])
);

export const UP_NEXT: CardProps[] = mapMusicEventsToCards(
  futureGigs.filter(({ postponedWithNoNewDate }) => !postponedWithNoNewDate)
);

export const POSTPONED: CardProps[] = mapMusicEventsToCards(
  DATA.filter(({ postponedWithNoNewDate }) => !!postponedWithNoNewDate)
);
