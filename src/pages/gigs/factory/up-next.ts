import { isInFuture } from "utils";

import * as DATA from "../data";

export const UP_NEXT: Array<IGig> = DATA.ARRAY.filter(
  ({ dates }: IGig): boolean => isInFuture(dates[0])
);
