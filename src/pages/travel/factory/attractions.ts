import { ATTRACTIONS } from "@constants";
import {
  getItemCounts,
  attractionMatchExists,
  getTripTitle,
  getDatesText,
  isInFuture
} from "utils";

import { DATA } from "../data";

const attractions: Array<IAttraction> = Object.values(ATTRACTIONS);

const getTripsMatchingAttraction = (attraction: IAttraction): Array<ITrip> => {
  const tripsMatchingAttraction: Array<ITrip> = [];
  const trips: Array<ITrip> = DATA.ALL;
  trips.forEach((trip: ITrip): void => {
    if (attractionMatchExists(attraction, trip))
      tripsMatchingAttraction.push(trip);
  });
  return tripsMatchingAttraction;
};

const getAttractionDetails = (
  attraction: IAttraction
): Array<ICountedListItemDetail> => {
  const tripsMatchingAttraction: Array<ITrip> = getTripsMatchingAttraction(
    attraction
  );
  return tripsMatchingAttraction.map(
    (trip: ITrip, index: number): ICountedListItemDetail => {
      const { dates } = trip;
      return {
        index: tripsMatchingAttraction.length > 1 ? index + 1 : undefined,
        mainText: getTripTitle(trip),
        dateText: getDatesText(dates),
        isInFuture: isInFuture(dates[0])
      };
    }
  );
};

const themeParks: Array<IAttraction> = attractions.filter(
  ({ themePark }: IAttraction): boolean => !!themePark
);

const highlights: Array<IAttraction> = attractions.filter(
  ({ highlight }: IAttraction): boolean => !!highlight
);

export const HIGHLIGHTS_LIST_ITEMS: Array<ICountedListItem> = highlights.map(
  (highlight: IAttraction): ICountedListItem => ({
    text: highlight.name,
    ...getItemCounts({
      item: { attraction: highlight },
      data: { trips: DATA.ALL }
    }),
    details: getAttractionDetails(highlight)
  })
);

export const THEME_PARKS_LIST_ITEMS: Array<ICountedListItem> = themeParks.map(
  (themePark: IAttraction): ICountedListItem => ({
    text: themePark.name,
    ...getItemCounts({
      item: { attraction: themePark },
      data: { trips: DATA.ALL }
    })
  })
);
