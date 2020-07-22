import { PAGE_GIGS } from "./gigs";
import { PAGE_RECIPES } from "./recipes";
import { PAGE_TRAVEL } from "./travel";
import { PAGE_VINYL } from "./vinyl";

import { POLE } from "./pole";
import { THEATRE } from "./theatre";

export const PAGES: Array<IPage> = [
  POLE,
  THEATRE,

  PAGE_GIGS,
  PAGE_RECIPES,
  PAGE_TRAVEL,
  PAGE_VINYL
]
  .filter((route: IPage): boolean => !route.hide)
  .sort((a: IPage, b: IPage): number => (a.title > b.title ? 1 : -1));
