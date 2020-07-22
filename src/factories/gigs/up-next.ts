import { GIGS as DATA } from "data";
import { isInFuture } from "utils";

export const UP_NEXT: Array<IGig> = DATA.filter(({ dates }: IGig): boolean =>
  isInFuture(dates[0])
);
