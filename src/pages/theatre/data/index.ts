import { THEATRE_2016 } from "./theatre-2016";
import { THEATRE_2017 } from "./theatre-2017";
import { THEATRE_2018 } from "./theatre-2018";
import { THEATRE_2019 } from "./theatre-2019";
import { THEATRE_2020 } from "./theatre-2020";

const ALL: Array<ITheatreVisit> = [
  ...THEATRE_2016,
  ...THEATRE_2017,
  ...THEATRE_2018,
  ...THEATRE_2019,
  ...THEATRE_2020
];

const SPLIT_BY_YEAR: Array<Array<ITheatreVisit>> = [
  THEATRE_2016,
  THEATRE_2017,
  THEATRE_2018,
  THEATRE_2019,
  THEATRE_2020
];

export const DATA = { ALL, SPLIT_BY_YEAR };
