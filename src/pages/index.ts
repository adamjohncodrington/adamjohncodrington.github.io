import { GIGS } from "./gigs";
import { POLE } from "./pole";
import { RECIPES } from "./recipes";
import { THEATRE } from "./theatre";
import { TRAVEL } from "./travel";
import { VINYL } from "./vinyl";

export const PAGES: Page[] = [GIGS, POLE, RECIPES, THEATRE, TRAVEL, VINYL]
  .filter(({ hide }: Page): boolean => !hide)
  .sort((a: Page, b: Page): number => a.title.localeCompare(b.title));
