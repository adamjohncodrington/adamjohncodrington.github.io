import { MUSIC_EVENTS as DATA } from "data-raw";
import { isInFuture } from "utils";

export const UP_NEXT: Array<IMusicEvent> = DATA.filter(
  ({ dates }: IMusicEvent): boolean => isInFuture(dates[0])
);
