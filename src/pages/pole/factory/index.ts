import { formatCountedListItems } from "utils";

import { INSTRUCTORS_LIST_ITEMS } from "./instructors";

interface IPoleFactory {
  INSTRUCTORS: Array<ICountedListItem>;
}

export const FACTORY: IPoleFactory = {
  INSTRUCTORS: formatCountedListItems({
    countedListItems: INSTRUCTORS_LIST_ITEMS
  })
};
