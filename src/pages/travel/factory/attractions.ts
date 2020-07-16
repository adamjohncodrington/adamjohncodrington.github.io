import { COUNTRIES } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

const generateAttractions = (): { [attraction: string]: IAttraction } => {
  let attractions = {};
  Object.values(COUNTRIES).forEach((country: ICountryTemplate): void => {
    if (country.cities)
      attractions = { ...attractions, ...country.attractions };
  });
  return attractions;
};

export const ATTRACTIONS = generateAttractions();

const attractions: Array<IAttraction> = Object.values(ATTRACTIONS);

const themeParks: Array<IAttraction> = attractions.filter(
  ({ themePark }: IAttraction): boolean => !!themePark
);

const highlights: Array<IAttraction> = attractions.filter(
  ({ highlight }: IAttraction): boolean => !!highlight
);

export const HIGHLIGHTS_LIST_ITEMS: Array<ICountedListItem> = highlights.map(
  (highlight: IAttraction): ICountedListItem => ({
    text: highlight.name,
    ...getItemCounts({
      item: { attraction: highlight },
      data: { trips: DATA.ALL_FLAT }
    })
  })
);

export const THEME_PARKS_LIST_ITEMS: Array<ICountedListItem> = themeParks.map(
  (themePark: IAttraction): ICountedListItem => ({
    text: themePark.name,
    ...getItemCounts({
      item: { attraction: themePark },
      data: { trips: DATA.ALL_FLAT }
    })
  })
);
