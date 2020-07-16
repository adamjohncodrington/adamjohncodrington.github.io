import { FRIENDS } from "@constants";
import { getItemCounts, getGigTitle, getDatesText, isInFuture } from "utils";

import { DATA } from "../data";

const getGigsMatchingFriend = (friend: IFriend): Array<IGig> => {
  const gigsMatchingFriend: Array<IGig> = [];
  const gigs: Array<IGig> = DATA.ALL;
  gigs.forEach((gig: IGig): void => {
    if (gig.company.includes(friend)) gigsMatchingFriend.push(gig);
  });
  return gigsMatchingFriend;
};

const getFriendDetails = (friend: IFriend): Array<ICountedListItemDetail> => {
  const gigsMatchingFriend: Array<IGig> = getGigsMatchingFriend(friend);
  return gigsMatchingFriend.map(
    (gig: IGig, index: number): ICountedListItemDetail => {
      const { dates, youtubeId } = gig;
      return {
        index: gigsMatchingFriend.length > 1 ? index + 1 : undefined,
        mainText: [getGigTitle(gig)],
        dateText: getDatesText(dates),
        isInFuture: isInFuture(dates[0]),
        youtubeId
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
