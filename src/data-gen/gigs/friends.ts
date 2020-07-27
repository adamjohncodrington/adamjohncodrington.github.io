import { FRIENDS as friends } from "@constants";
import { MUSIC_EVENTS as DATA } from "data-raw";
import { getItemCounts } from "utils";

const getFriendMatches = (friend: IFriend): Array<IMusicEvent> => {
  const friendMatches: Array<IMusicEvent> = [];

  DATA.forEach((MusicEvent: IMusicEvent): void => {
    if (MusicEvent.company.includes(friend)) friendMatches.push(MusicEvent);
  });

  return friendMatches;
};

const getFriendDetails = (friend: IFriend): Array<IMiniCardDetail> =>
  getFriendMatches(friend).map(
    ({ title, dates, video, favourite }: IMusicEvent): IMiniCardDetail => ({
      mainText: [title],
      dates,
      favourite,
      video
    })
  );

export const FRIENDS: Array<IMiniCard> = Object.values(friends)
  .filter(({ gigs }: IFriend): boolean => !!gigs)
  .map(
    (friend: IFriend): IMiniCard => ({
      text: friend.name,
      ...getItemCounts({ item: { friend }, data: { musicEvents: DATA } }),
      details: getFriendDetails(friend)
    })
  );
