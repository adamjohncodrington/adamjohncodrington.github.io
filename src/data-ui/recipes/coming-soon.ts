import { RECIPES as DATA } from "data-raw";

export const COMING_SOON: Array<IMiniCard> = DATA.COMING_SOON.map(
  (item: string) => ({
    primaryText: item,
    sort: [item]
  })
);
