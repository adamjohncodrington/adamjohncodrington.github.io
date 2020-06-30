import { getPageSectionItemCounts } from "@utils";

import { DATA } from "../data";

import { countries } from "./countries";

//@ts-ignore
const attractions = [].concat.apply(
  [],
  //@ts-ignore
  countries
    .filter(({ attractions }) => !!attractions)
    .map(
      //@ts-ignore
      ({ attractions }) => Object.values(attractions)
    )
);

const themeParks: Array<IAttraction> = attractions.filter(
  ({ themePark }: IAttraction): boolean => !!themePark
);

const highlights: Array<IAttraction> = attractions.filter(
  ({ highlight }: IAttraction): boolean => !!highlight
);

export const HIGHLIGHTS_LIST_ITEMS: Array<ICountedListItem> = highlights.map(
  (highlight: IAttraction): ICountedListItem => ({
    text: highlight.name,
    ...getPageSectionItemCounts({
      itemToCount: highlight,
      dataToCompareAgainst: DATA.ALL
    })
  })
);

export const THEME_PARKS_LIST_ITEMS: Array<ICountedListItem> = themeParks.map(
  (themePark: IAttraction): ICountedListItem => ({
    text: themePark.name,
    ...getPageSectionItemCounts({
      itemToCount: themePark,
      dataToCompareAgainst: DATA.ALL
    })
  })
);
