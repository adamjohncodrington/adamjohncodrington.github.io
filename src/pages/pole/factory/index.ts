import { formatCountedListItems } from "utils";

import { FRIENDS_LIST_ITEMS } from "./friends";

interface IPoleFactory {
  INSTRUCTORS: Array<ICountedListItem>;
}

export const FACTORY: IPoleFactory = {
  INSTRUCTORS: formatCountedListItems({
    countedListItems: FRIENDS_LIST_ITEMS
  })
};
