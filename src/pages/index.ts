import { GIGS } from "./gigs";
import { POLE } from "./pole";
import { RECIPES } from "./recipes";
import { THEATRE } from "./theatre";
import { TRAVEL } from "./travel";
import { VINYL } from "./vinyl";

export const PAGES: IPage[] = [
  GIGS,
  POLE,
  RECIPES,
  THEATRE,
  TRAVEL,
  VINYL
].sort((a: IPage, b: IPage): number => (a.title > b.title ? 1 : -1));
