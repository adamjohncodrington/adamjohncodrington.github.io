import { FESTIVAL_TITLES as festivals } from "@constants";
import { FESTIVALS as DATA } from "data-raw";
import { getItemCounts, getFestivalSubtitle } from "utils";

const getFestivalMatches = (festivalTitle: IFestivalTitle): Array<IFestival> =>
  DATA.reduce(
    (matches: Array<IFestival>, festival: IFestival) =>
      festival.title === festivalTitle ? [...matches, festival] : matches,
    []
  );

const getFestivalDetails = (musician: IMusician): Array<IMiniCardPanelDetail> =>
  getFestivalMatches(musician).map(
    (festival: IFestival): IMiniCardPanelDetail => {
      const { dates, video } = festival;
      return {
        sort: [dates[0]],
        mainText: [getFestivalSubtitle(festival) || "TBC"],
        dates,
        video
      };
    }
  );

export const FESTIVALS: Array<IMiniCard> = Object.values(festivals)
  .filter(({ insignificant }: IFestivalTitle): boolean => !insignificant)
  .map(
    (festival: IFestivalTitle): IMiniCard => {
      const { name } = festival;
      const {
        pastCount: primaryCount,
        futureCount: secondaryCount
      } = getItemCounts({
        item: { festival },
        data: { festivals: DATA }
      });
      return {
        primaryText: name,
        sort: [name],
        primaryCount,
        secondaryCount,
        details: getFestivalDetails(festival)
      };
    }
  );
