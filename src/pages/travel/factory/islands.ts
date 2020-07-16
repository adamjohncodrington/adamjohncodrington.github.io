import { COUNTRIES } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

const generateIslands = (): { [island: string]: IIsland } => {
  let islands = {};
  Object.values(COUNTRIES).forEach((country: ICountryTemplate): void => {
    if (country.islands) islands = { ...islands, ...country.islands };
  });
  return islands;
};

export const ISLANDS = generateIslands();

const islandsThatAreCountries: Array<ICountryTemplate> = Object.values(
  COUNTRIES
).filter(({ island }: ICountryTemplate): boolean => !!island);

const islandsThatAreNotCountries: Array<IIsland> = Object.values(ISLANDS);

const islandsAll: Array<IIsland> = [
  ...islandsThatAreCountries,
  ...islandsThatAreNotCountries
];

export const ISLANDS_LIST_ITEMS: Array<ICountedListItem> = islandsAll.map(
  (island: IIsland): ICountedListItem => {
    const { name, insignificant } = island;
    return {
      text: name,
      countInfoIrrelevant: insignificant,
      ...getItemCounts({ item: { island }, data: { trips: DATA.ALL_FLAT } })
    };
  }
);
