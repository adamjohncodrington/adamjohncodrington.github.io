import { ATTRACTIONS } from "@constants";
import { getItemCounts } from "@utils";

import { DATA } from "../data";

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
      data: { travelCards: DATA.ALL }
    })
  })
);

export const THEME_PARKS_LIST_ITEMS: Array<ICountedListItem> = themeParks.map(
  (themePark: IAttraction): ICountedListItem => ({
    text: themePark.name,
    ...getItemCounts({
      item: { attraction: themePark },
      data: { travelCards: DATA.ALL }
    })
  })
);
