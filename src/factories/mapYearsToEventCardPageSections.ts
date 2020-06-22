import { PAGE_SECTION_TYPES } from "CONSTANTS";
import { isInFuture } from "utils";

import { mapToEventCardData } from "./mapToEventCardData";

type SingleYearData = Array<IEventCardRawData>;
type IMapYearGroupsToSections = {
  years: Array<SingleYearData>;
  eventCardType: IEventCardType;
};

export const mapYearsToEventCardPageSections = ({
  years,
  eventCardType
}: IMapYearGroupsToSections): Array<IPageSection> => {
  const mapYearGroupToSection = (year: SingleYearData): IPageSection => {
    const title = year[0].dates[0].getFullYear().toString();

    return {
      details: { id: title, title, type: PAGE_SECTION_TYPES.EVENT_CARDS },
      showSectionLength: true,
      data: mapToEventCardData({ data: year, eventCardType }).filter(
        (item: IEventCard) => !isInFuture(item.dates)
      )
    };
  };

  return years.map((year: SingleYearData) => mapYearGroupToSection(year));
};
