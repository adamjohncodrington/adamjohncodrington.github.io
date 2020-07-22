import { PAGE_TRAVEL } from "./travel";

import { GIGS } from "./gigs";
import { POLE } from "./pole";
import { RECIPES } from "./recipes";
import { THEATRE } from "./theatre";
import { VINYL } from "./vinyl";

export const PAGES: Array<IPage> = [
  GIGS,
  POLE,
  RECIPES,
  THEATRE,
  VINYL,

  PAGE_TRAVEL
].sort((a: IPage, b: IPage): number => (a.title > b.title ? 1 : -1));
