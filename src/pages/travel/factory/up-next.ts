import { isInFuture } from "utils";

import { DATA } from "../data";

export const UP_NEXT: Array<ITrip> = DATA.ALL.filter(
  ({ dates }: ITrip): boolean => isInFuture(dates[0])
);
