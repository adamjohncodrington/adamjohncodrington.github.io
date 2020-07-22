import { isInFuture } from "utils";

import * as DATA from "../data";

export const UP_NEXT: Array<ITheatreVisit> = DATA.ARRAY.filter(
  ({ date }: ITheatreVisit): boolean => isInFuture(date)
);
