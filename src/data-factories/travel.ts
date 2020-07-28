import {
  getTripTitle,
  getTripSubtitle,
  getTripBody,
  getDatesText,
  arrayToString
} from "utils";

export const mapTravelVideosToCards = (
  travelVideos: Array<ITravelVideo>
): Array<ICard> => {
  const mapTravelVideoToCard = ({
    dates,
    locations,
    ...video
  }: ITravelVideo): ICard => ({
    video,
    title: arrayToString(
      locations.map(
        ({ name, shortName }: ILocation): string => shortName || name
      ),
      { useAmpersandsForPair: true }
    ),
    company: [],
    hideVideoSymbol: true,
    secondaryBody: getDatesText([dates.start, dates.end])
  });

  return travelVideos.map(
    (travelVideo: ITravelVideo): ICard => mapTravelVideoToCard(travelVideo)
  );
};

export const mapTripLegsToCards = (tripLegs: Array<ITripLeg>): Array<ICard> => {
  const mapTripLegToCard = (tripLeg: ITripLeg): ICard => {
    const { dates } = tripLeg;
    return {
      ...tripLeg,
      title: getTripTitle(tripLeg),
      subtitle: getTripSubtitle(tripLeg),
      secondaryBody: getTripBody(tripLeg),
      body: getDatesText(dates)
    };
  };
  return tripLegs.map((tripLeg: ITripLeg): ICard => mapTripLegToCard(tripLeg));
};
