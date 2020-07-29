import { RECIPES as DATA } from "data-raw";

export const COMING_SOON: Array<IMiniCard> = DATA.COMING_SOON.map(
  (item: string) => ({
    text: item,
    sort: [item],
    countInfoIrrelevant: true,
    futureCount: 0,
    pastCount: 0
  })
);
