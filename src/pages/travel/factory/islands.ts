import { ISLANDS } from "constant-objects";
import { getItemCounts } from "utils";

import { DATA } from "../data";
import { countries } from "./countries";

const islandsThatAreCountries: Array<ICountryTemplate> = countries.filter(
  ({ island }: ICountryTemplate): boolean => !!island
);

const islandsThatAreNotCountries: Array<IIsland> = Object.values(ISLANDS);

const islandsAll: Array<IIsland> = [
  ...islandsThatAreCountries,
  ...islandsThatAreNotCountries
];

export const ISLANDS_LIST_ITEMS: Array<ICountedListItem> = islandsAll.map(
  (island: IIsland): ICountedListItem => ({
    text: island.name,
    countInfoIrrelevant: island.insignificant,
    ...getItemCounts({ item: { island }, data: { travelCards: DATA.ALL } })
  })
);
