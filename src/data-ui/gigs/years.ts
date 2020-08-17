import { MUSIC_EVENTS as DATA } from "data-raw";
import { isInFuture } from "utils";

const splitMusicEventsIntoYears = (
  musicEvents: IMusicEvent[]
): IMusicEvent[][] => {
  const filtered: IMusicEvent[] = musicEvents.filter(
    ({ dates }: IMusicEvent): boolean => !isInFuture(dates[0])
  );

  const sorted: IMusicEvent[] = filtered.sort(
    (a: IMusicEvent, b: IMusicEvent): number =>
      a.dates[0] > b.dates[0] ? 1 : -1
  );

  let arrayIndex: number = 0;
  let arrayYear: number = sorted[0].dates[0].getFullYear();

  const years: IMusicEvent[][] = [];

  sorted.forEach((musicEvent: IMusicEvent): void => {
    const year: number = musicEvent.dates[0].getFullYear();
    if (year !== arrayYear) {
      arrayIndex += 1;
      arrayYear = year;
    }
    if (!years[arrayIndex]) years[arrayIndex] = [];
    years[arrayIndex].push(musicEvent);
  });
  return years;
};

export const YEARS: IMusicEvent[][] = splitMusicEventsIntoYears(DATA);
