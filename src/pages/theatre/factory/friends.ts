import { FRIENDS } from "@constants";
import { getItemCounts } from "@utils";

import { DATA } from "../data";

export const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  FRIENDS
)
  .filter(({ theatre }: IFriend): boolean => !!theatre)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { theatreCards: DATA.ALL } })
    })
  );
