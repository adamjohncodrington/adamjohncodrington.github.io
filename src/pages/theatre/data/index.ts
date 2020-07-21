import * as theatre2016 from "./theatre-2016";
import * as theatre2017 from "./theatre-2017";

import { THEATRE_2018 } from "./theatre-2018";
import { THEATRE_2019 } from "./theatre-2019";
import { THEATRE_2020 } from "./theatre-2020";

const THEATRE_2016: Array<ITheatreVisit> = Object.values(theatre2016);
const THEATRE_2017: Array<ITheatreVisit> = Object.values(theatre2017);

const ALL: Array<ITheatreVisit> = [
  ...THEATRE_2016,
  ...THEATRE_2017,
  ...THEATRE_2018,
  ...THEATRE_2019,
  ...THEATRE_2020
].sort((a: ITheatreVisit, b: ITheatreVisit): number =>
  a.date.valueOf() > b.date.valueOf() ? 1 : -1
);

const SPLIT_BY_YEAR: Array<Array<ITheatreVisit>> = [
  THEATRE_2016,
  THEATRE_2017,
  THEATRE_2018,
  THEATRE_2019,
  THEATRE_2020
].map(
  (year: Array<ITheatreVisit>): Array<ITheatreVisit> =>
    year.sort((a: ITheatreVisit, b: ITheatreVisit): number =>
      a.date.valueOf() > b.date.valueOf() ? 1 : -1
    )
);

export const DATA = { ALL, SPLIT_BY_YEAR };
