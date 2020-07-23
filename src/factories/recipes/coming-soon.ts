import { RECIPES as DATA } from "data";

export const COMING_SOON: Array<ICountedListItem> = DATA.COMING_SOON.map(
  (item: string) => ({
    text: item,
    countInfoIrrelevant: true,
    futureCount: 0,
    pastCount: 0
  })
).sort((a: ICountedListItem, b: ICountedListItem): number =>
  a.text > b.text ? 1 : -1
);
