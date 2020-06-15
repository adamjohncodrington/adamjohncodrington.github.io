import { isInFuture } from "../local";

import { mapDataToEventCards } from "./mapDataToEventCards";

type IMapYearGroupsToSections = {
  years: Array<any>;
  eventType: string;
};

export const mapYearGroupsToSections = ({
  years,
  eventType
}: IMapYearGroupsToSections): Array<IPageSection> => {
  const mapYearGroupToSection = (year: any): IPageSection => {
    const title = year[0].dates[0].getFullYear();

    return {
      type: { id: title, title },
      showSectionLength: true,
      listOfEventCards: true,
      data: mapDataToEventCards({ data: year, eventType }).filter(
        (item: any) => !isInFuture(item.dates)
      )
    };
  };

  return years.map((year: any) => mapYearGroupToSection(year));
};
