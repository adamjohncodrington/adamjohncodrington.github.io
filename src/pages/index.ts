import { GIGS } from "./gigs";
import { POLE } from "./pole";
import { RECIPES } from "./recipes";
import { THEATRE } from "./theatre";
import { TRAVEL } from "./travel";
import { VINYL } from "./vinyl";

export const PAGES: IPage[] = [GIGS, POLE, RECIPES, THEATRE, TRAVEL, VINYL]
  .filter(({ hide }: IPage): boolean => !hide)
  .sort((a: IPage, b: IPage): number => a.title.localeCompare(b.title));
