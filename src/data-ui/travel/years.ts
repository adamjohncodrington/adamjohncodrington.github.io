import { TRIPS as DATA } from "data-raw";
import { isInFuture } from "utils";

const splitTripsIntoYears = (trips: Array<ITrip>): Array<Array<ITrip>> => {
  const filtered: Array<ITrip> = trips.filter(
    (trip: ITrip): boolean => !isInFuture(trip[0].dates[0])
  );
  const sorted: Array<ITrip> = filtered.sort((a: ITrip, b: ITrip): number =>
    a[0].dates[0] > b[0].dates[0] ? 1 : -1
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

export const YEARS: Array<Array<ITrip>> = splitTripsIntoYears(DATA);
