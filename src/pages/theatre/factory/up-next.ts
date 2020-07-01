import { isInFuture } from "@utils";

import { DATA } from "../data";

export const UP_NEXT: Array<ITheatreCard> = DATA.ALL.filter(theatreTrip =>
  isInFuture(theatreTrip.date)
);
