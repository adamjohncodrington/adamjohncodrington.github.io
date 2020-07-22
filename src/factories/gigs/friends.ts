import { FRIENDS as friends } from "@constants";
import { GIGS as DATA } from "data";
import { getItemCounts, getGigTitle, getDatesText, isInFuture } from "utils";

const getGigsMatchingFriend = (friend: IFriend): Array<IGig> => {
  const gigsMatchingFriend: Array<IGig> = [];
  DATA.forEach((gig: IGig): void => {
    if (gig.company.includes(friend)) gigsMatchingFriend.push(gig);
  });
  return gigsMatchingFriend;
};

const getFriendDetails = (friend: IFriend): Array<ICountedListItemDetail> => {
  const gigsMatchingFriend: Array<IGig> = getGigsMatchingFriend(friend);
  return gigsMatchingFriend.map(
    (gig: IGig, index: number): ICountedListItemDetail => {
      const { dates, video, favourite } = gig;
      return {
        index: gigsMatchingFriend.length > 1 ? index + 1 : undefined,
        mainText: [getGigTitle(gig)],
        dateText: getDatesText(dates),
        favourite,
        isInFuture: isInFuture(dates[0]),
        video
      };
    }
  );
};

export const FRIENDS: Array<ICountedListItem> = Object.values(friends)
  .filter(({ gigs }: IFriend): boolean => !!gigs)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { gigs: DATA } }),
      details: getFriendDetails(friend)
    })
  );
