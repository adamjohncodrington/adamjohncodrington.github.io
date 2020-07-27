import { isInFuture } from "./basic";

export const splitVinylsIntoYears = (
  vinyls: Array<IVinyl>
): Array<Array<IVinyl>> => {
  const sorted: Array<IVinyl> = vinyls.sort((a: IVinyl, b: IVinyl): number =>
    a.year > b.year ? 1 : -1
  );
  const years: Array<Array<IVinyl>> = [];
  let arrayIndex: number = 0;
  let arrayYear: number = sorted[0].year;
  sorted.forEach((vinyl: IVinyl): void => {
    const vinylYear: number = vinyl.year;
    if (vinylYear !== arrayYear) {
      arrayIndex += 1;
      arrayYear = vinylYear;
    }
    if (!years[arrayIndex]) years[arrayIndex] = [];
    years[arrayIndex].push(vinyl);
  });
  return years;
};

export const splitTheatreIntoYears = (
  theatreVisits: Array<ITheatreVisit>
): Array<Array<ITheatreVisit>> => {
  const filtered: Array<ITheatreVisit> = theatreVisits.filter(
    ({ date }: ITheatreVisit): boolean => !isInFuture(date)
  );
  const sorted: Array<ITheatreVisit> = filtered.sort(
    (a: ITheatreVisit, b: ITheatreVisit): number =>
      a.date.valueOf() > b.date.valueOf() ? 1 : -1
  );
  const years: Array<Array<ITheatreVisit>> = [];
  let arrayIndex: number = 0;
  let arrayYear: number = sorted[0].date.getFullYear();
  sorted.forEach((theatreVisit: ITheatreVisit): void => {
    const year: number = theatreVisit.date.getFullYear();
    if (year !== arrayYear) {
      arrayIndex += 1;
      arrayYear = year;
    }
    if (!years[arrayIndex]) years[arrayIndex] = [];
    years[arrayIndex].push(theatreVisit);
  });
  return years;
};

export const splitMusicEventsIntoYears = (
  musicEvents: Array<IMusicEvent>
): Array<Array<IMusicEvent>> => {
  const filtered: Array<IMusicEvent> = musicEvents.filter(
    ({ dates }: IMusicEvent): boolean => !isInFuture(dates[0])
  );
  const sorted: Array<IMusicEvent> = filtered.sort(
    (a: IMusicEvent, b: IMusicEvent): number =>
      a.dates[0].valueOf() > b.dates[0].valueOf() ? 1 : -1
  );
  const years: Array<Array<IMusicEvent>> = [];
  let arrayIndex: number = 0;
  let arrayYear: number = sorted[0].dates[0].getFullYear();
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

export const splitTripsIntoYears = (
  trips: Array<ITrip>
): Array<Array<ITrip>> => {
  const filtered: Array<ITrip> = trips.filter(
    (trip: ITrip): boolean => !isInFuture(trip[0].dates[0])
  );
  const sorted: Array<ITrip> = filtered.sort((a: ITrip, b: ITrip): number =>
    a[0].dates[0].valueOf() > b[0].dates[0].valueOf() ? 1 : -1
  );
  const years: Array<Array<ITrip>> = [];
  let arrayIndex: number = 0;
  let arrayYear: number = sorted[0][0].dates[0].getFullYear();
  sorted.forEach((trip: ITrip): void => {
    const year: number = trip[0].dates[0].getFullYear();
    if (year !== arrayYear) {
      arrayIndex += 1;
      arrayYear = year;
    }
    if (!years[arrayIndex]) years[arrayIndex] = [];
    years[arrayIndex].push(trip);
  });
  return years;
};
