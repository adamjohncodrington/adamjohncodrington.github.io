import { isInFuture } from "utils";

import { DATA } from "../data";

export const UP_NEXT: Array<ITripLeg> = DATA.ALL_FLAT.filter(
  ({ dates }: ITripLeg): boolean => isInFuture(dates[0])
);
