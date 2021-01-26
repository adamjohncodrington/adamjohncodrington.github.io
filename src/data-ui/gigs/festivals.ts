import { FESTIVAL_TITLES as festivals } from "@constants";
import { FESTIVALS as DATA } from "data-raw";
import { getItemCounts, getFestivalSubtitle } from "utils";

const getFestivalMatches = (festivalTitle: FestivalTitle): Festival[] =>
  DATA.reduce(
    (matches: Festival[], festival: Festival): Festival[] =>
      festival.title === festivalTitle ? [...matches, festival] : matches,
    []
  );

const getFestivalDetails = (musician: Musician): IMiniCardPanelDetail[] =>
  getFestivalMatches(musician).map(
    (festival: Festival): IMiniCardPanelDetail => {
      const { dates, video } = festival;
      return {
        sort: [dates[0].valueOf()],
        mainText: [getFestivalSubtitle(festival) || "TBC"],
        dates,
        video
      };
    }
  );

export const FESTIVALS: MiniCardProps[] = Object.values(festivals)
  .filter(({ insignificant }: FestivalTitle): boolean => !insignificant)
  .map(
    (festival: FestivalTitle): MiniCardProps => {
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
