import { isInFuture } from "utils";

import { DATA } from "../data";

export const UP_NEXT: Array<IGigCard> = DATA.ALL.filter(({ dates }: IGigCard) =>
  isInFuture(dates[0])
);
