import { getItemCounts } from "@utils";

import { DATA } from "../data";

import { countries } from "./countries";

const islandsThatAreCountries: Array<ICountryTemplate> = countries.filter(
  ({ island }: ICountryTemplate): boolean => !!island
);
//@ts-ignore
const islandsThatAreNotCountries = [].concat.apply(
  [],
  //@ts-ignore
  countries
    .filter(({ islands }) => !!islands)
    //@ts-ignore
    .map(({ islands }) => Object.values(islands))
);
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
