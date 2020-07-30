import { arrayToString, moveTheSuffixToPrefix } from "./basic";

interface IGetMusicianStageNameAtTime {
  musician: IMusician;
  year: number;
}
export const getMusicianStageNameAtTime = ({
  musician: { name, previousStageName },
  year
}: IGetMusicianStageNameAtTime): string => {
  if (previousStageName) {
    if (year >= previousStageName.yearDeprecated) return name;
    return previousStageName.name;
  }
  return name;
};

export const getGigTitle = ({ headline, date }: IGig): string =>
  getMusicianStageNameAtTime({
    musician: headline,
    year: date.getFullYear()
  });

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

export const getTheatreVisitTitle = ({
  play: { name }
}: ITheatreVisit): string => name;

export const getTheatreVisitSubtitle = ({
  cast
}: ITheatreVisit): string | undefined =>
  cast && arrayToString(cast.map(({ name }: IActor): string => name));

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
    : "PAGE SECTION TITLE MISSING";

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
