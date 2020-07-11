import { FRIENDS } from "@constants";
import { getItemCounts, isInFuture, moveTheSuffixToPrefix } from "utils";

import { DATA } from "../data";

const getGigsWithFriend = (friend: IFriend): Array<IGigCard> => {
  const gigsWithFriend: Array<IGigCard> = [];

  const allGigs: Array<IGigCard> = DATA.ALL;

  allGigs.forEach((gig: IGigCard): void => {
    if (gig.company.includes(friend)) gigsWithFriend.push(gig);
  });

  return gigsWithFriend;
};

export const FRIENDS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  FRIENDS
)
  .filter(({ gigs }: IFriend): boolean => !!gigs)
  .map(
    (friend: IFriend): ICountedListItem => ({
      text: friend.name,

      ...getItemCounts({ item: { friend }, data: { gigCards: DATA.ALL } }),

      details: getGigsWithFriend(friend).map(
        ({ headline, festival, dates }: IGigCard): IDetailItem => ({
          text: headline
            ? moveTheSuffixToPrefix(headline.name)
            : festival
            ? festival.name
            : "",
          isInFuture: isInFuture(dates[0])
        })
      )
    })
  );
