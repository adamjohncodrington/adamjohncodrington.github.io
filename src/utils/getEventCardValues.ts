import { arrayToString, moveTheSuffixToPrefix } from "./basic";
import { getMusicianStageNameAtTime } from "./musician";

export const getGigTitle = ({ headline, date }: IGig): string =>
  moveTheSuffixToPrefix(
    getMusicianStageNameAtTime({
      musician: headline,
      year: date.getFullYear()
    })
  );

export const getFestivalTitle = ({ title }: IFestival): string => title.name;

export const getGigSubtitle = ({ support }: IGig): string | undefined =>
  support &&
  arrayToString(
    support.map(({ name }: IMusician): string => moveTheSuffixToPrefix(name))
  );

export const getFestivalSubtitle = ({ lineup }: IFestival): string =>
  lineup[0].length > 0
    ? arrayToString(
        lineup
          .flat()
          .map(({ name }: IMusician): string => moveTheSuffixToPrefix(name))
      )
    : "TBC";

export const getTheatreVisitTitle = ({ play }: ITheatreVisit): string =>
  moveTheSuffixToPrefix(play.name);

export const getTheatreVisitSubtitle = ({
  cast
}: ITheatreVisit): string | undefined =>
  cast &&
  arrayToString(
    cast.map(({ name }: IActor): string => moveTheSuffixToPrefix(name))
  );

export const getTripTitle = ({
  country,
  primaryLocations,
  showCountryAsTitle
}: ITripLeg): string =>
  showCountryAsTitle
    ? country.name
    : primaryLocations
    ? arrayToString(
        primaryLocations.map(
          ({ shortName, name }: ILocation) => shortName || name
        ),
        { useAmpersandsForPair: true }
      )
    : "TRIP TITLE MISSING";

export const getTripSubtitle = ({
  country,
  showCountryAsTitle,
  primaryLocations
}: ITripLeg): string | undefined =>
  showCountryAsTitle
    ? primaryLocations &&
      arrayToString(
        primaryLocations.map(
          ({ shortName, name }: ILocation) => shortName || name
        ),
        { useAmpersandsForPair: true }
      )
    : country.name;

export const getTripBody = ({
  secondaryLocations
}: ITripLeg): string | undefined =>
  secondaryLocations &&
  arrayToString(secondaryLocations.map(({ name }: ILocation) => name));

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

export const mapGigsToGigsAndFestivals = (
  gigs: Array<IGig>
): Array<IGigOrFestival> =>
  gigs.map(
    (gig: IGig): IGigOrFestival => ({
      ...gig,
      gig,
      dates: [gig.date],
      title: getGigTitle(gig),
      subtitle: getGigSubtitle(gig),
      musicians: getGigMusicians(gig)
    })
  );

export const mapFestivalsToGigsAndFestivals = (
  festivals: Array<IFestival>
): Array<IGigOrFestival> =>
  festivals.map(
    (festival: IFestival): IGigOrFestival => ({
      ...festival,
      festival,
      title: getFestivalTitle(festival),
      subtitle: getFestivalSubtitle(festival),
      musicians: getFestivalMusicians(festival)
    })
  );
