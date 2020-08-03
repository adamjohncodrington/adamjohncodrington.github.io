import { FRIENDS as friends } from "@constants";
import { MUSIC_EVENTS as DATA } from "data-raw";
import { getItemCounts } from "utils";

const getFriendMatches = (friend: IFriend): Array<IMusicEvent> =>
  DATA.reduce(
    (
      matches: Array<IMusicEvent>,
      musicEvent: IMusicEvent
    ): Array<IMusicEvent> =>
      musicEvent.company.includes(friend) ? [...matches, musicEvent] : matches,
    []
  );

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
