import { FESTIVAL_TITLES as festivals } from "@constants";
import { FESTIVALS as DATA } from "data-raw";
import { Musician } from "types";
import { getItemCounts, getFestivalSubtitle } from "utils";

const getFestivalMatches = (festivalTitle: FestivalTitle): Festival[] =>
  DATA.reduce(
    (matches: Festival[], festival: Festival): Festival[] =>
      festival.title === festivalTitle ? [...matches, festival] : matches,
    []
  );

const mapFestivalToMiniCardPanelDetail = (
  festival: Festival
): MiniCardPanelDetailProps => {
  const { dates, video } = festival;
  return {
    sort: [dates[0].valueOf()],
    mainText: [getFestivalSubtitle(festival) || "TBC"],
    dates,
    video
  };
};

const getFestivalDetails = (musician: Musician): MiniCardPanelDetailProps[] =>
  getFestivalMatches(musician).map(mapFestivalToMiniCardPanelDetail);

const mapFestivalToMiniCard = (festival: FestivalTitle): MiniCardProps => {
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
};

export const FESTIVALS: MiniCardProps[] = Object.values(festivals)
  .filter(({ insignificant }: FestivalTitle): boolean => !insignificant)
  .map(mapFestivalToMiniCard);
