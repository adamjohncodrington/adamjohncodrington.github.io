import { PAGE_GIGS as GIGS } from "./gigs";
import { PAGE_RECIPES as RECIPES } from "./recipes";
import { PAGE_THEATRE as THEATRE } from "./theatre";
import { PAGE_TRAVEL as TRAVEL } from "./travel";
import { PAGE_VINYL as VINYL } from "./vinyl";

export const PAGES: Array<IPage> = [
  GIGS,
  RECIPES,
  THEATRE,
  TRAVEL,
  VINYL
].filter((route: IPage) => !route.hide);
