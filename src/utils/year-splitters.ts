export const splitVinylsIntoYears = (
  vinyls: Array<IVinyl>
): Array<Array<IVinyl>> => {
  const sortedVinyls: Array<IVinyl> = vinyls.sort(
    (a: IVinyl, b: IVinyl): number => (a.year > b.year ? 1 : -1)
  );

  const vinylsSplitByYear: Array<Array<IVinyl>> = [];

  let arrayIndex: number = 0;
  let arrayYear: number = sortedVinyls[0].year;

  sortedVinyls.forEach((vinyl: IVinyl): void => {
    const { year } = vinyl;

    if (year !== arrayYear) {
      arrayIndex += 1;
      arrayYear = year;
    }

    if (!vinylsSplitByYear[arrayIndex]) vinylsSplitByYear[arrayIndex] = [];
    vinylsSplitByYear[arrayIndex].push(vinyl);
  });

  return vinylsSplitByYear;
};
