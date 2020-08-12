import { THEATRE as DATA } from "data-raw";
import { isInFuture } from "utils";

const splitTheatreIntoYears = (
  theatreVisits: Array<ITheatreVisit>
): Array<Array<ITheatreVisit>> => {
  const filtered: Array<ITheatreVisit> = theatreVisits.filter(
    ({ date }: ITheatreVisit): boolean => !isInFuture(date)
  );
  const sorted: Array<ITheatreVisit> = filtered.sort(
    (a: ITheatreVisit, b: ITheatreVisit): number => (a.date > b.date ? 1 : -1)
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

export const YEARS: Array<Array<ITheatreVisit>> = splitTheatreIntoYears(DATA);
