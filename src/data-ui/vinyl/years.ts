import { VINYL_COLLECTION as DATA } from "data-raw";

const splitVinylsIntoYears = (vinyls: Array<IVinyl>): Array<Array<IVinyl>> => {
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

export const YEARS: Array<Array<IVinyl>> = splitVinylsIntoYears(DATA);
