import { FRIENDS as friends } from "@constants";
import { GIGS_AND_FESTIVALS as DATA } from "data";
import { getItemCounts } from "utils";

const getFriendMatches = (friend: IFriend): Array<IGigOrFestival> => {
  const friendMatches: Array<IGigOrFestival> = [];
  DATA.forEach((gigOrFestival: IGigOrFestival): void => {
    if (gigOrFestival.company.includes(friend))
      friendMatches.push(gigOrFestival);
  });
  return friendMatches;
};

const getFriendDetails = (friend: IFriend): Array<ICountedListItemDetail> => {
  const friendMatches: Array<IGigOrFestival> = getFriendMatches(friend);
  return friendMatches.map(
    (gigOrFestival: IGigOrFestival, index: number): ICountedListItemDetail => {
      const { title, dates, video, favourite } = gigOrFestival;
      return {
        index: friendMatches.length > 1 ? index + 1 : undefined,
        mainText: [title],
        dates,
        favourite,
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
