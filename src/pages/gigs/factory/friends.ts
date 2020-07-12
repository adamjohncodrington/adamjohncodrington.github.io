import { FRIENDS } from "@constants";
import { getItemCounts, getGigTitle, getDatesText, isInFuture } from "utils";

import { DATA } from "../data";

const getGigsWithFriend = (friend: IFriend): Array<IGig> => {
  const gigsWithFriend: Array<IGig> = [];
  const allGigs: Array<IGig> = DATA.ALL;
  allGigs.forEach((gig: IGig): void => {
    if (gig.company.includes(friend)) gigsWithFriend.push(gig);
  });
  return gigsWithFriend;
};

const getFriendDetails = (friend: IFriend): Array<ICountedListItemDetail> => {
  const friendGigs = getGigsWithFriend(friend);
  return friendGigs.map(
    (gig: IGig, index: number): ICountedListItemDetail => {
      const { dates } = gig;
      return {
        index: friendGigs.length > 1 ? index + 1 : undefined,
        mainText: getGigTitle(gig),
        dateText: getDatesText(dates),
        isInFuture: isInFuture(dates[0])
      };
    }
  );
};

export const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  FRIENDS
)
  .filter(({ gigs }: IFriend): boolean => !!gigs)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { gigs: DATA.ALL } }),
      details: getFriendDetails(friend)
    })
  );
