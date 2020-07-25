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

const getFriendDetails = (friend: IFriend): Array<IBasicListItemDetail> =>
  getFriendMatches(friend).map(
    ({
      title,
      dates,
      video,
      favourite
    }: IGigOrFestival): IBasicListItemDetail => ({
      mainText: [title],
      dates,
      favourite,
      video
    })
  );

export const FRIENDS: Array<IBasicListItem> = Object.values(friends)
  .filter(({ gigs }: IFriend): boolean => !!gigs)
  .map(
    (friend: IFriend): IBasicListItem => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { gigsAndFestivals: DATA } }),
      details: getFriendDetails(friend)
    })
  );
