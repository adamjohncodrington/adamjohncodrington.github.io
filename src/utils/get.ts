import { arrayToString, moveTheSuffixToPrefix } from "./basic";

interface IGetMusicianStageNameAtTime {
  musician: Musician;
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

export const getGigTitle = ({ headline, date }: Gig): string =>
  getMusicianStageNameAtTime({
    musician: headline,
    year: date.getFullYear()
  });

export const getFestivalTitle = ({ title }: Festival): string => title.name;

export const getGigSubtitle = ({ support }: Gig): string | undefined =>
  support &&
  arrayToString(
    support.map(({ name }: Musician): string => moveTheSuffixToPrefix(name))
  );

export const getFestivalSubtitle = ({ lineup }: Festival): string =>
  lineup[0].length > 0
    ? arrayToString(
        lineup
          .flat()
          .map(({ name }: Musician): string => moveTheSuffixToPrefix(name))
      )
    : "TBC";

export const getTheatreVisitTitle = ({
  play: { name }
}: TheatreVisit): string => name;

export const getTheatreVisitSubtitle = ({
  cast
}: TheatreVisit): string | undefined =>
  cast && arrayToString(cast.map(({ name }: Actor): string => name));

export const getTripTitle = ({
  country,
  primaryLocations,
  showCountryAsTitle
}: TripLeg): string =>
  showCountryAsTitle
    ? country.name
    : primaryLocations
    ? arrayToString(
        primaryLocations.map(
          ({ shortName, name }: LocationProps) => shortName || name
        ),
        { useAmpersandsForPair: true }
      )
    : "PAGE SECTION TITLE MISSING";

export const getTripSubtitle = ({
  country,
  showCountryAsTitle,
  primaryLocations
}: TripLeg): string | undefined =>
  showCountryAsTitle
    ? primaryLocations &&
      arrayToString(
        primaryLocations.map(
          ({ shortName, name }: LocationProps) => shortName || name
        ),
        { useAmpersandsForPair: true }
      )
    : country.name;

export const getTripBody = ({
  secondaryLocations
}: TripLeg): string | undefined =>
  secondaryLocations &&
  arrayToString(secondaryLocations.map(({ name }: LocationProps) => name));

export const getGigMusicians = ({ headline, support }: Gig): Musician[] => {
  const musicians: Musician[] = [];

  musicians.push(headline);

  if (support && support.length > 0) {
    support.forEach((supportAct: Musician): void => {
      musicians.push(supportAct);
    });
  }

  return musicians;
};

export const getFestivalMusicians = ({ lineup }: Festival): Musician[] => {
  const musicians: Musician[] = [];

  lineup.forEach((day: Musician[]): void => {
    day.forEach((musician: Musician): void => {
      musicians.push(musician);
    });
  });

  return musicians;
};
