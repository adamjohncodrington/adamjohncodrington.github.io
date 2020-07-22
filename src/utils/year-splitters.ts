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
  const sortedTheatreVisits: Array<ITheatreVisit> = theatreVisits.sort(
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

// export const splitTheatreVisitsIntoYears = (
//   theatreVisits: Array<ITheatreVisit>
// ): Array<ITheatreVisit> => {
//   const theatreVisitsSplitIntoYears: Array<Array<ITheatreVisit>> = [];

//   let arrayIndex: number = 0;
//   let arrayYear: number = theatreVisits[0].date.getFullYear();

//   theatreVisits.forEach((theatreVisit: ITheatreVisit): void => {
//     const theatreVisitYear: number = theatreVisit.date.getFullYear();

//     if (theatreVisitYear !== arrayYear) {
//       arrayIndex += 1;
//       arrayYear = theatreVisitYear;
//     }

//     if (!theatreVisitsSplitIntoYears[arrayIndex])
//       theatreVisitsSplitIntoYears[arrayIndex] = [];
//     theatreVisitsSplitIntoYears[arrayIndex].push(theatreVisit);
//   });

//   return theatreVisitsSplitIntoYears;
// };
