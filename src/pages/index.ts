import { PAGE_RECIPES } from "./recipes";
import { PAGE_TRAVEL } from "./travel";
import { PAGE_VINYL } from "./vinyl";

import { GIGS } from "./gigs";
import { POLE } from "./pole";
import { THEATRE } from "./theatre";

export const PAGES: Array<IPage> = [
  GIGS,
  POLE,
  THEATRE,

  PAGE_RECIPES,
  PAGE_TRAVEL,
  PAGE_VINYL
].sort((a: IPage, b: IPage): number => (a.title > b.title ? 1 : -1));
