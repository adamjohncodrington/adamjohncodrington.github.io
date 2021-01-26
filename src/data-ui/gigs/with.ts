import { FRIENDS as friends } from "@constants";
import { MUSIC_EVENTS as DATA } from "data-raw";
import { getItemCounts } from "utils";

const getFriendMatches = (friend: Friend): IMusicEvent[] =>
  DATA.reduce(
    (matches: IMusicEvent[], musicEvent: IMusicEvent): IMusicEvent[] =>
      musicEvent.company.includes(friend) ? [...matches, musicEvent] : matches,
    []
  );

const getFriendDetails = (friend: Friend): IMiniCardPanelDetail[] =>
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

export const WITH: MiniCardProps[] = Object.values(friends)
  .filter(({ gigs }: Friend): boolean => !!gigs)
  .map(
    (friend: Friend): MiniCardProps => {
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
