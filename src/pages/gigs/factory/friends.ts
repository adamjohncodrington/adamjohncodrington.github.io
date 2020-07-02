import { FRIENDS } from "@constants";
import { getItemCounts } from "utils";

import { DATA } from "../data";

export const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  FRIENDS
)
  .filter(({ gigs }: IFriend): boolean => !!gigs)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { gigCards: DATA.ALL } })
    })
  );
