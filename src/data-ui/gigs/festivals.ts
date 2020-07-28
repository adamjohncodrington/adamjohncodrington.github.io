import { FESTIVAL_TITLES as festivals } from "@constants";
import { FESTIVALS as DATA } from "data-raw";
import { getItemCounts, getFestivalSubtitle } from "utils";

const getFestivalMatches = (
  festivalTitle: IFestivalTitle
): Array<IFestival> => {
  const festivalMatches: Array<IFestival> = [];

  DATA.forEach((festival: IFestival): void => {
    if (festivalTitle === festival.title) festivalMatches.push(festival);
  });

  return festivalMatches;
};

const getFestivalDetails = (musician: IMusician): Array<IMiniCardPanelItem> =>
  getFestivalMatches(musician).map(
    (festival: IFestival): IMiniCardPanelItem => {
      const { dates, video } = festival;
      return {
        mainText: [getFestivalSubtitle(festival) || "TBC"],
        dates,
        video
      };
    }
  );

export const FESTIVALS: Array<IMiniCard> = Object.values(festivals)
  .filter(({ insignificant }: IFestivalTitle): boolean => !insignificant)
  .map(
    (festival: IFestivalTitle): IMiniCard => ({
      text: festival.name,
      ...getItemCounts({ item: { festival }, data: { festivals: DATA } }),
      details: getFestivalDetails(festival)
    })
  );
