import { ISLANDS, COUNTRIES } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

const islandsThatAreCountries: Array<ICountryTemplate> = Object.values(
  COUNTRIES
).filter(({ island }: ICountryTemplate): boolean => !!island);

const islandsThatAreNotCountries: Array<IIsland> = Object.values(ISLANDS);

const islandsAll: Array<IIsland> = [
  ...islandsThatAreCountries,
  ...islandsThatAreNotCountries
];

export const ISLANDS_LIST_ITEMS: Array<ICountedListItem> = islandsAll.map(
  (island: IIsland): ICountedListItem => ({
    text: island.name,
    countInfoIrrelevant: island.insignificant,
    ...getItemCounts({ item: { island }, data: { trips: DATA.ALL } })
  })
);
