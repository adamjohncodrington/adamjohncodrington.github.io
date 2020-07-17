import { PAGE_GIGS as GIGS } from "./gigs";
import { PAGE_POLE as POLE } from "./pole";
import { PAGE_RECIPES as RECIPES } from "./recipes";
import { PAGE_THEATRE as THEATRE } from "./theatre";
import { PAGE_TRAVEL as TRAVEL } from "./travel";
import { PAGE_VINYL as VINYL } from "./vinyl";

export const PAGES: Array<IPage> = [GIGS, POLE, RECIPES, THEATRE, TRAVEL, VINYL]
  .filter((route: IPage): boolean => !route.hide)
  .sort((a: IPage, b: IPage) => (a.title > b.title ? 1 : -1));
