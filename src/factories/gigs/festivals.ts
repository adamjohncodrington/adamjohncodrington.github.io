import { FESTIVAL_TITLES as festivals } from "@constants";
import { FESTIVALS as DATA } from "data";
import { getItemCounts, getFestivalSubtitle } from "utils";

export const TO_BE_FIXED: string = "TO BE FIXED";

const getFestivalMatches = (
  festivalTitle: IFestivalTitle
): Array<IFestival> => {
  const festivalMatches: Array<IFestival> = [];

  DATA.forEach((festival: IFestival): void => {
    if (festivalTitle === festival.title) {
      festivalMatches.push(festival);
    }
  });

  return festivalMatches;
};

const getFestivalDetails = (musician: IMusician): Array<IBasicListItemDetail> =>
  getFestivalMatches(musician).map(
    (festival: IFestival): IBasicListItemDetail => {
      const { dates, video } = festival;
      return {
        mainText: [getFestivalSubtitle(festival) || "TBC"],
        dates,
        video
      };
    }
  );

export const FESTIVALS: Array<IBasicListItem> = Object.values(festivals)
  .filter(({ insignificant }: IFestivalTitle): boolean => !insignificant)
  .map(
    (festival: IFestivalTitle): IBasicListItem => ({
      text: festival.name,
      ...getItemCounts({ item: { festival }, data: { festivals: DATA } }),
      details: getFestivalDetails(festival)
    })
  );
