import { isInFuture } from "utils";

import { DATA } from "../data";

export const UP_NEXT: Array<IGig> = DATA.ALL.filter(
  ({ dates }: IGig): boolean => isInFuture(dates[0])
);
