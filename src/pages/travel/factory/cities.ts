import { CITIES } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

const cities: Array<ICity> = Object.values(CITIES);

export const citiesCounted: Array<ICityCounted> = cities.map(
  (city: ICity): ICityCounted => ({
    ...city,
    ...getItemCounts({ item: { city }, data: { travelCards: DATA.ALL } })
  })
);

export const CITIES_LIST_ITEMS: Array<ICountedListItem> = citiesCounted.map(
  ({
    name,
    capital,
    pastCount,
    insignificant,
    futureCount
  }: ICityCounted): ICountedListItem => ({
    text: name,
    star: capital,
    countInfoIrrelevant: insignificant,
    pastCount,
    futureCount
  })
);
