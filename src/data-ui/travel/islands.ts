import { COUNTRIES as countries } from "@constants";
import { TRIP_LEGS as DATA } from "data-raw";
import { getItemCounts } from "utils";

const generateIslands = (): { [island: string]: IIsland } => {
  let islands = {};
  Object.values(countries).forEach((country: ICountryTemplate): void => {
    if (country.islands) islands = { ...islands, ...country.islands };
  });
  return islands;
};

const islands = generateIslands();

const islandsThatAreCountries: ICountryTemplate[] = Object.values(
  countries
).filter(({ island }: ICountryTemplate): boolean => !!island);

const islandsThatAreNotCountries: IIsland[] = Object.values(islands);

const islandsAll: IIsland[] = [
  ...islandsThatAreCountries,
  ...islandsThatAreNotCountries
];

export const ISLANDS: IMiniCard[] = islandsAll.map(
  (island: IIsland): IMiniCard => {
    const { name, insignificant } = island;
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({ item: { island }, data: { tripLegs: DATA } });
    return {
      primaryText: name,
      sort: [name],
      countInfoIrrelevant: insignificant,
      primaryCount,
      secondaryCount
    };
  }
);
