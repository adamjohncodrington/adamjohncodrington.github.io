import { FRIENDS as friends } from "@constants";
import { MUSIC_EVENTS as DATA } from "data-raw";
import { getItemCounts } from "utils";

const getFriendMatches = (friend: IFriend): Array<IMusicEvent> => {
  const friendMatches: Array<IMusicEvent> = [];

  DATA.forEach((musicEvent: IMusicEvent): void => {
    if (musicEvent.company.includes(friend)) friendMatches.push(musicEvent);
  });

  return friendMatches;
};

const getFriendDetails = (friend: IFriend): Array<IMiniCardPanelDetail> =>
  getFriendMatches(friend).map(
    ({
      title,
      dates,
      video,
      favourite
    }: IMusicEvent): IMiniCardPanelDetail => ({
      mainText: [title],
      sort: [dates[0]],
      dates,
      favourite,
      video
    })
  );

export const FRIENDS: Array<IMiniCard> = Object.values(friends)
  .filter(({ gigs }: IFriend): boolean => !!gigs)
  .map(
    (friend: IFriend): IMiniCard => {
      const {
        pastCount: primaryCount,
        futureCount: secondaryCount
      } = getItemCounts({
        item: { friend },
        data: { musicEvents: DATA }
      });
      return {
        primaryText: friend.name,
        primaryCount,
        secondaryCount,
        sort: [-primaryCount, -secondaryCount],
        greaterCountPadding: true,
        details: getFriendDetails(friend)
      };
    }
  );
