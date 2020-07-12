import { FESTIVALS } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

export const FESTIVALS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  FESTIVALS
)
  .filter(({ festival }: IFestival): boolean => !!festival)
  .map(
    (festival: IFestival): ICountedListItem => ({
      text: festival.name,
      ...getItemCounts({ item: { festival }, data: { gigs: DATA.ALL } })
    })
  );
