import { PAGE_DATA_GIGS } from "./gigs";
import { PAGE_DATA_THEATRE } from "./theatre";
import { PAGE_DATA_RECIPES } from "./recipes";
import { PAGE_DATA_TRAVEL } from "./travel";

interface IAllPageData {
  GIGS: IPageData;
  RECIPES: IPageData;
  THEATRE: IPageData;
  TRAVEL: IPageData;
}

export const PAGE_DATA: IAllPageData = {
  GIGS: PAGE_DATA_GIGS,
  RECIPES: PAGE_DATA_RECIPES,
  THEATRE: PAGE_DATA_THEATRE,
  TRAVEL: PAGE_DATA_TRAVEL
};
