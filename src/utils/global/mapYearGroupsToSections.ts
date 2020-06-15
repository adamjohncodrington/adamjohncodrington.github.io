import { PAGE_SECTION_TYPES } from "../../constants";

import { isInFuture } from "../local";

import { mapDataToEventCards } from "./mapDataToEventCards";

type IMapYearGroupsToSections = {
  years: Array<any>;
  eventType: IEventCardType;
};

export const mapYearGroupsToSections = ({
  years,
  eventType
}: IMapYearGroupsToSections): Array<IPageSection> => {
  const mapYearGroupToSection = (year: any): IPageSection => {
    const title = year[0].dates[0].getFullYear();

    return {
      details: { id: title, title, type: PAGE_SECTION_TYPES.EVENT_CARDS },
      showSectionLength: true,
      data: mapDataToEventCards({ data: year, eventType }).filter(
        (item: any) => !isInFuture(item.dates)
      )
    };
  };

  return years.map((year: any) => mapYearGroupToSection(year));
};
