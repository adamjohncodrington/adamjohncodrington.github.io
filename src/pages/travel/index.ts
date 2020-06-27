import { SvgTravel } from "resources";

import { totalAbroadTripsSoFar } from "./factory";
import { sections } from "./sections";

export const PAGE_TRAVEL: IPage = {
  title: "Travel",
  path: "/travel",
  SvgIcon: SvgTravel,
  count: totalAbroadTripsSoFar,
  sections
};
