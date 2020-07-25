import { COUNTRIES as countries } from "@constants";
import { TRAVEL as DATA } from "data";
import { getItemCounts } from "utils";

const generateIslands = (): { [island: string]: IIsland } => {
  let islands = {};
  Object.values(countries).forEach((country: ICountryTemplate): void => {
    if (country.islands) islands = { ...islands, ...country.islands };
  });
  return islands;
};

const islands = generateIslands();

const islandsThatAreCountries: Array<ICountryTemplate> = Object.values(
  countries
).filter(({ island }: ICountryTemplate): boolean => !!island);

const islandsThatAreNotCountries: Array<IIsland> = Object.values(islands);

const islandsAll: Array<IIsland> = [
  ...islandsThatAreCountries,
  ...islandsThatAreNotCountries
];

export const ISLANDS: Array<IBasicListItem> = islandsAll.map(
  (island: IIsland): IBasicListItem => {
    const { name, insignificant } = island;
    return {
      text: name,
      countInfoIrrelevant: insignificant,
      ...getItemCounts({ item: { island }, data: { tripLegs: DATA.TRIP_LEGS } })
    };
  }
);
