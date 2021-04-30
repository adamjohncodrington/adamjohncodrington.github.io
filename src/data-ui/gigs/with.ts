import { FRIENDS as friends } from "@constants";
import { MUSIC_EVENTS as DATA } from "data-raw";
import { Friend } from "types";
import { getItemCounts } from "utils";

const getFriendMatches = (friend: Friend): MusicEvent[] =>
  DATA.reduce(
    (matches: MusicEvent[], musicEvent: MusicEvent): MusicEvent[] =>
      musicEvent.company.includes(friend) ? [...matches, musicEvent] : matches,
    []
  );

const mapMusicEventToMiniCardPanelDetail = ({
  title,
  dates,
  video,
  favourite,
  postponedWithNoNewDate
}: MusicEvent): MiniCardPanelDetailProps => ({
  mainText: [title],
  sort: [dates[0]],
  dateTBA: postponedWithNoNewDate,
  dates,
  favourite,
  video
});

const getFriendDetails = (friend: Friend): MiniCardPanelDetailProps[] =>
  getFriendMatches(friend).map(mapMusicEventToMiniCardPanelDetail);

const mapFriendToMiniCard = (friend: Friend): MiniCardProps => {
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
};

export const WITH: MiniCardProps[] = Object.values(friends)
  .filter(({ gigs }: Friend): boolean => !!gigs)
  .map(mapFriendToMiniCard);
