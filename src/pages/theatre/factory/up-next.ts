import { isInFuture } from "utils";

import { DATA } from "../data";

export const UP_NEXT: Array<ITheatreVisit> = DATA.ALL.filter(
  ({ date }: ITheatreVisit): boolean => isInFuture(date)
);
