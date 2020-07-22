import { isInFuture } from "./basic";

export const splitVinylsIntoYears = (
  vinyls: Array<IVinyl>
): Array<Array<IVinyl>> => {
  const sortedVinyls: Array<IVinyl> = vinyls.sort(
    (a: IVinyl, b: IVinyl): number => (a.year > b.year ? 1 : -1)
  );

  const vinylsSplitIntoYears: Array<Array<IVinyl>> = [];

  let arrayIndex: number = 0;
  let arrayYear: number = sortedVinyls[0].year;

  sortedVinyls.forEach((vinyl: IVinyl): void => {
    const vinylYear: number = vinyl.year;

    if (vinylYear !== arrayYear) {
      arrayIndex += 1;
      arrayYear = vinylYear;
    }

    if (!vinylsSplitIntoYears[arrayIndex])
      vinylsSplitIntoYears[arrayIndex] = [];
    vinylsSplitIntoYears[arrayIndex].push(vinyl);
  });

  return vinylsSplitIntoYears;
};

export const splitTheatreIntoYears = (
  theatreVisits: Array<ITheatreVisit>
): Array<Array<ITheatreVisit>> => {
  const filteredTheatreVisits: Array<ITheatreVisit> = theatreVisits.filter(
    ({ date }: ITheatreVisit): boolean => !isInFuture(date)
  );

  const sortedTheatreVisits: Array<ITheatreVisit> = filteredTheatreVisits.sort(
    (a: ITheatreVisit, b: ITheatreVisit): number =>
      a.date.valueOf() > b.date.valueOf() ? 1 : -1
  );

  const theatreSplitIntoYears: Array<Array<ITheatreVisit>> = [];

  let arrayIndex: number = 0;
  let arrayYear: number = sortedTheatreVisits[0].date.getFullYear();

  sortedTheatreVisits.forEach((theatreVisit: ITheatreVisit): void => {
    const theatreVisitYear: number = theatreVisit.date.getFullYear();

    if (theatreVisitYear !== arrayYear) {
      arrayIndex += 1;
      arrayYear = theatreVisitYear;
    }

    if (!theatreSplitIntoYears[arrayIndex]) {
      theatreSplitIntoYears[arrayIndex] = [];
    }
    theatreSplitIntoYears[arrayIndex].push(theatreVisit);
  });

  return theatreSplitIntoYears;
};

export const splitGigsIntoYears = (gigs: Array<IGig>): Array<Array<IGig>> => {
  const filteredGigs: Array<IGig> = gigs.filter(
    ({ dates }: IGig): boolean => !isInFuture(dates[0])
  );

  const sortedGigs: Array<IGig> = filteredGigs.sort(
    (a: IGig, b: IGig): number =>
      a.dates[0].valueOf() > b.dates[0].valueOf() ? 1 : -1
  );

  const gigsSplitIntoYears: Array<Array<IGig>> = [];

  let arrayIndex: number = 0;
  let arrayYear: number = sortedGigs[0].dates[0].getFullYear();

  sortedGigs.forEach((gig: IGig): void => {
    const gigYear: number = gig.dates[0].getFullYear();

    if (gigYear !== arrayYear) {
      arrayIndex += 1;
      arrayYear = gigYear;
    }

    if (!gigsSplitIntoYears[arrayIndex]) {
      gigsSplitIntoYears[arrayIndex] = [];
    }
    gigsSplitIntoYears[arrayIndex].push(gig);
  });

  return gigsSplitIntoYears;
};
