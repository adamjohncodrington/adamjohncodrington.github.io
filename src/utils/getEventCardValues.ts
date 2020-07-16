import { arrayToString, moveTheSuffixToPrefix } from "./basic";
import { getMusicianStageNameAtTime } from "./musician-utils";

export const getGigTitle = ({ headline, festival, dates }: IGig): string =>
  headline
    ? moveTheSuffixToPrefix(
        getMusicianStageNameAtTime({
          musician: headline,
          year: dates[0].getFullYear()
        })
      )
    : festival
    ? festival.name
    : "GIG CARD TITLE MISSING";

export const getGigSubtitle = ({ support, lineup }: IGig) =>
  support
    ? arrayToString({
        stringArray: support.map(({ name }: IMusician): string =>
          moveTheSuffixToPrefix(name)
        )
      })
    : lineup &&
      arrayToString({
        stringArray: lineup
          .flat()
          .map(({ name }: IMusician): string => moveTheSuffixToPrefix(name))
      });

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
}: ITrip): string =>
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
}: ITrip): string | undefined =>
  showCountryAsTitle
    ? primaryLocations &&
      arrayToString({
        stringArray: primaryLocations.map(({ name }: ILocation) => name),
        useAmpersandsForPair: true
      })
    : country.name;

export const getTripBody = ({
  secondaryLocations
}: ITrip): string | undefined =>
  secondaryLocations &&
  arrayToString({
    stringArray: secondaryLocations.map(({ name }: ILocation) => name)
  });
