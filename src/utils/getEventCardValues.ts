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

export const getTripTitle = ({ title }: ITrip): string =>
  arrayToString({
    stringArray: title.map(({ name }: ILocation) => name),
    useAmpersandsForPair: true
  });

export const getTripSubtitle = ({ subtitle }: ITrip): string | undefined =>
  subtitle &&
  arrayToString({
    stringArray: subtitle.map(({ name }: ILocation) => name),
    useAmpersandsForPair: true
  });

export const getTripBody = ({ body }: ITrip): string | undefined =>
  body &&
  arrayToString({ stringArray: body.map(({ name }: ILocation) => name) });
