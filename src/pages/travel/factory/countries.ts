import { COUNTRIES } from "@constants";
import { getItemCounts } from "@utils";

import { DATA } from "../data";

//@ts-ignore
export const countries: Array<ICountryTemplate> = Object.values(COUNTRIES);

export const countriesCounted: Array<ICountryCounted> = countries.map(
  (country: ICountryTemplate): ICountryCounted => ({
    ...country,
    ...getItemCounts({ item: { country }, data: { travelCards: DATA.ALL } })
  })
);

export const COUNTRIES_LIST_ITEMS: Array<ICountedListItem> = countriesCounted.map(
  ({ name, pastCount, futureCount }: ICountryCounted): ICountedListItem => ({
    text: name,
    pastCount,
    futureCount
  })
);
