import {
  getTripTitle,
  getTripSubtitle,
  getTripBody,
  getDatesText,
  arrayToString,
  getSymbols,
  filterMiniCards
} from "utils";

import { HIGHLIGHTS, THEME_PARKS } from "./attractions";
import { BUCKET_LIST } from "./bucket-list";
import { CITIES } from "./cities";
import { COUNTRIES } from "./countries";
import { FRIENDS } from "./friends";
import { ISLANDS } from "./islands";
import { PHOTOS } from "./photos";
import { UP_NEXT } from "./up-next";
import { VIDEOS } from "./videos";
import { YEARS } from "./years";

const mapTravelVideosToCards = (
  travelVideos: Array<ITravelVideo>
): Array<ICard> => {
  const mapTravelVideoToCard = ({
    dates,
    locations,
    ...video
  }: ITravelVideo): ICard => ({
    video,
    sort: [dates.start],
    title: arrayToString(
      locations.map(
        ({ name, shortName }: ILocation): string => shortName || name
      ),
      { useAmpersandsForPair: true }
    ),
    secondaryBody: getDatesText([dates.start, dates.end])
  });

  return travelVideos.map(
    (travelVideo: ITravelVideo): ICard => mapTravelVideoToCard(travelVideo)
  );
};

const mapTripLegsToCards = (tripLegs: Array<ITripLeg>): Array<ICard> => {
  const mapTripLegToCard = (tripLeg: ITripLeg): ICard => {
    const { dates, company, photos, video } = tripLeg;
    return {
      ...tripLeg,
      sort: [dates[0]],
      symbols: getSymbols({ company, photos, video }),
      title: getTripTitle(tripLeg),
      subtitle: getTripSubtitle(tripLeg),
      secondaryBody: getTripBody(tripLeg),
      body: getDatesText(dates)
    };
  };
  return tripLegs.map((tripLeg: ITripLeg): ICard => mapTripLegToCard(tripLeg));
};

export const TRAVEL = {
  BUCKET_LIST: filterMiniCards(BUCKET_LIST),
  CITIES: filterMiniCards(CITIES),
  COUNTRIES: filterMiniCards(COUNTRIES),
  FRIENDS: filterMiniCards(FRIENDS),
  HIGHLIGHTS: filterMiniCards(HIGHLIGHTS),
  ISLANDS: filterMiniCards(ISLANDS),
  PHOTOS,
  THEME_PARKS: filterMiniCards(THEME_PARKS),
  UP_NEXT: mapTripLegsToCards(UP_NEXT),
  VIDEOS: mapTravelVideosToCards(VIDEOS),
  YEARS: YEARS.map(
    (year: Array<ITrip>): Array<ICard> => mapTripLegsToCards(year.flat())
  )
};
