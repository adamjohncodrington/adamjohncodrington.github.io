import * as THEATRE_2016 from "./theatre-2016";
import * as THEATRE_2017 from "./theatre-2017";
import * as THEATRE_2018 from "./theatre-2018";
import * as THEATRE_2019 from "./theatre-2019";
import * as THEATRE_2020 from "./theatre-2020";

export const OBJECT = {
  ...THEATRE_2019,
  ...THEATRE_2016,
  ...THEATRE_2018,
  ...THEATRE_2017,
  ...THEATRE_2020
};

export const ARRAY: Array<ITheatreVisit> = Object.values(OBJECT);
