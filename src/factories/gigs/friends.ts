import { FRIENDS as friends } from "@constants";
import { GIGS_AND_FESTIVALS as DATA } from "data";
import { getItemCounts, isInFuture } from "utils";

const getGigCardsMatchingFriend = (friend: IFriend): Array<IGigOrFestival> => {
  const gigCardsMatchingFriend: Array<IGigOrFestival> = [];
  DATA.forEach((gigOrFestival: IGigOrFestival): void => {
    if (gigOrFestival.company.includes(friend))
      gigCardsMatchingFriend.push(gigOrFestival);
  });
  return gigCardsMatchingFriend;
};

const getFriendDetails = (friend: IFriend): Array<ICountedListItemDetail> => {
  const gigCardsMatchingFriend: Array<IGigOrFestival> = getGigCardsMatchingFriend(
    friend
  );
  return gigCardsMatchingFriend.map(
    (gigOrFestival: IGigOrFestival, index: number): ICountedListItemDetail => {
      const { title, dates, video, favourite } = gigOrFestival;
      return {
        index: gigCardsMatchingFriend.length > 1 ? index + 1 : undefined,
        mainText: [title],
        dates,
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
      ...getItemCounts({ item: { friend }, data: { gigsAndFestivals: DATA } }),
      details: getFriendDetails(friend)
    })
  );
