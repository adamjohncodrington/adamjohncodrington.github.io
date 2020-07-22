import { arrayToString, moveTheSuffixToPrefix } from "./basic";
import { getMusicianStageNameAtTime } from "./musician-utils";

export const getGigTitle = ({
  headline,
  // festival,
  dates
}: IGig): string =>
  moveTheSuffixToPrefix(
    getMusicianStageNameAtTime({
      musician: headline,
      year: dates[0].getFullYear()
    })
  );

export const getFestivalTitle = ({ title }: IFestival): string => title.name;

export const getGigSubtitle = ({
  support
}: // lineup
IGig): string | undefined =>
  support &&
  arrayToString({
    stringArray: support.map(({ name }: IMusician): string =>
      moveTheSuffixToPrefix(name)
    )
  });
// : lineup &&
//   arrayToString({
//     stringArray: lineup
//       .flat()
//       .map(({ name }: IMusician): string => moveTheSuffixToPrefix(name))
//   });

export const getFestivalSubtitle = ({ lineup }: IFestival): string =>
  lineup[0].length > 0
    ? arrayToString({
        stringArray: lineup
          .flat()
          .map(({ name }: IMusician): string => moveTheSuffixToPrefix(name))
      })
    : "TBC";

export const getTheatreVisitTitle = ({ play }: ITheatreVisit): string =>
  moveTheSuffixToPrefix(play.name);

export const getTheatreVisitSubtitle = ({
  cast
}: ITheatreVisit): string | undefined =>
  cast &&
  arrayToString({
    stringArray: cast.map(({ name }: IActor): string =>
      moveTheSuffixToPrefix(name)
    )
  });

export const getTripTitle = ({
  country,
  primaryLocations,
  showCountryAsTitle
}: ITripLeg): string =>
  showCountryAsTitle
    ? country.name
    : primaryLocations
    ? arrayToString({
        stringArray: primaryLocations.map(({ name }: ILocation) => name),
        useAmpersandsForPair: true
      })
    : "TRIP TITLE MISSING";

export const getTripSubtitle = ({
  country,
  showCountryAsTitle,
  primaryLocations
}: ITripLeg): string | undefined =>
  showCountryAsTitle
    ? primaryLocations &&
      arrayToString({
        stringArray: primaryLocations.map(({ name }: ILocation) => name),
        useAmpersandsForPair: true
      })
    : country.name;

export const getTripBody = ({
  secondaryLocations
}: ITripLeg): string | undefined =>
  secondaryLocations &&
  arrayToString({
    stringArray: secondaryLocations.map(({ name }: ILocation) => name)
  });

export const getGigMusicians = ({
  headline,
  support
}: IGig): Array<IMusician> => {
  const musicians: Array<IMusician> = [];

  musicians.push(headline);

  if (support && support.length > 0) {
    support.forEach((supportAct: IMusician): void => {
      musicians.push(supportAct);
    });
  }

  return musicians;
};

export const getFestivalMusicians = ({
  lineup
}: IFestival): Array<IMusician> => {
  const musicians: Array<IMusician> = [];

  lineup.forEach((day: Array<IMusician>): void => {
    day.forEach((musician: IMusician): void => {
      musicians.push(musician);
    });
  });

  return musicians;
};

export const mapGigsToGigCards = (gigs: Array<IGig>): Array<IGigCard> =>
  gigs.map(
    (gig: IGig): IGigCard => ({
      ...gig,
      title: getGigTitle(gig),
      subtitle: getGigSubtitle(gig),
      musicians: getGigMusicians(gig)
    })
  );

export const mapFestivalsToGigCards = (
  festivals: Array<IFestival>
): Array<IGigCard> =>
  festivals.map(
    (festival: IFestival): IGigCard => ({
      ...festival,
      title: getFestivalTitle(festival),
      subtitle: getFestivalSubtitle(festival),
      musicians: getFestivalMusicians(festival)
    })
  );
