import { RECIPES as DATA } from "data-raw";

export const COMING_SOON: Array<IMiniCard> = DATA.COMING_SOON.map(
  (item: string) => ({
    text: item,
    countInfoIrrelevant: true,
    futureCount: 0,
    pastCount: 0
  })
).sort((a: IMiniCard, b: IMiniCard): number => (a.text > b.text ? 1 : -1));
