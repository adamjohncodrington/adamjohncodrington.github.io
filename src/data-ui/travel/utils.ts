import {
  getTripTitle,
  getTripSubtitle,
  getTripBody,
  getDatesText,
  arrayToString,
  getSymbols
} from "utils";

export const mapTravelVideosToCards = (
  travelVideos: ITravelVideo[]
): ICard[] => {
  const mapTravelVideoToCard = ({
    dates,
    locations,
    ...video
  }: ITravelVideo): ICard => ({
    video,
    year: dates.start.getFullYear(),
    sort: [dates.start.valueOf()],
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

export const mapTripLegsToCards = (tripLegs: ITripLeg[]): ICard[] => {
  const mapTripLegToCard = (tripLeg: ITripLeg): ICard => {
    const { dates, company, photos, video } = tripLeg;
    return {
      ...tripLeg,
      year: dates[0].getFullYear(),
      sort: [dates[0].valueOf()],
      symbols: getSymbols({ company, photos, video }),
      title: getTripTitle(tripLeg),
      subtitle: getTripSubtitle(tripLeg),
      secondaryBody: getTripBody(tripLeg),
      body: getDatesText(dates)
    };
  };
  return tripLegs.map((tripLeg: ITripLeg): ICard => mapTripLegToCard(tripLeg));
};
