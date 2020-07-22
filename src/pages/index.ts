import { PAGE_GIGS } from "./gigs";
import { PAGE_POLE } from "./pole";
import { PAGE_RECIPES } from "./recipes";
import { PAGE_THEATRE } from "./theatre";
import { PAGE_TRAVEL } from "./travel";
import { PAGE_VINYL } from "./vinyl";

export const PAGES: Array<IPage> = [
  PAGE_GIGS,
  PAGE_POLE,
  PAGE_RECIPES,
  PAGE_THEATRE,
  PAGE_TRAVEL,
  PAGE_VINYL
]
  .filter((route: IPage): boolean => !route.hide)
  .sort((a: IPage, b: IPage): number => (a.title > b.title ? 1 : -1));
