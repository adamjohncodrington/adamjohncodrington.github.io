import { MUSICIANS } from "@constants";
import {
  getItemCounts,
  isInFuture,
  moveTheSuffixToPrefix,
  musicianMatchExists,
  getDateText,
  detailsContainsFavourite
} from "utils";

import { DATA } from "../data";

const getGigsMatchingMusician = (musician: IMusician): Array<IGig> => {
  const gigsMatchingMusician: Array<IGig> = [];
  const gigs: Array<IGig> = DATA.ALL;
  gigs.forEach((gig: IGig): void => {
    if (musicianMatchExists(musician, gig)) {
      gigsMatchingMusician.push(gig);
    }
  });
  return gigsMatchingMusician;
};

interface IGetFestivalDay extends IDates {
  lineup: Array<Array<IMusician>>;
  musician: IMusician;
}
const getFestivalDateText = ({
  dates,
  musician,
  lineup
}: IGetFestivalDay): string => {
  for (let dayOfFestival = 0; dayOfFestival < lineup.length; dayOfFestival++) {
    if (lineup[dayOfFestival].includes(musician)) {
      return getDateText(dates[dayOfFestival]);
    }
  }

  const errorText: string = "NO FESTIVAL DATE FOUND";
  return errorText;
};

const getMusicianDetails = (
  musician: IMusician
): Array<ICountedListItemDetail> => {
  const gigsMatchingMusician: Array<IGig> = getGigsMatchingMusician(musician);
  return gigsMatchingMusician.map(
    (
      {
        dates,
        headline,
        festival,
        lineup,
        venue,
        favourite,
        youtubeVideo
      }: IGig,
      index: number
    ): ICountedListItemDetail => ({
      index: gigsMatchingMusician.length > 1 ? index + 1 : undefined,
      mainText: [festival ? festival.name : moveTheSuffixToPrefix(venue.name)],
      dateText:
        festival && lineup && lineup.length > 1
          ? getFestivalDateText({ dates, lineup, musician })
          : getDateText(dates[0]),
      isInFuture: isInFuture(dates[0]),
      youtubeVideo,
      favourite: musician === headline && favourite
    })
  );
};

export const MUSICIANS_LIST_ITEMS: Array<ICountedListItem> = Object.values(
  MUSICIANS
).map(
  (musician: IMusician): ICountedListItem => {
    const { name, previousStageName, noLongerExists } = musician;
    const details: Array<ICountedListItemDetail> = getMusicianDetails(musician);
    return {
      text: name,
      secondaryText: previousStageName && previousStageName.name,
      favourite: detailsContainsFavourite(details),
      ...getItemCounts({ item: { musician }, data: { gigs: DATA.ALL } }),
      noLongerExists,
      details
    };
  }
);
