import { arrayToString, moveTheSuffixToPrefix } from "./basic";

export const getGigCardTitle = ({ headline, festival }: IGigCard): string =>
  headline
    ? moveTheSuffixToPrefix(headline.name)
    : festival
    ? festival.name
    : "GIG CARD TITLE MISSING";

export const getTheatreCardTitle = ({ play }: ITheatreCard): string =>
  moveTheSuffixToPrefix(play.name);

export const getTheatreCardSubtitle = ({
  cast
}: ITheatreCard): string | undefined =>
  cast &&
  arrayToString({
    stringArray: cast.map(({ name }: IActor): string =>
      moveTheSuffixToPrefix(name)
    )
  });

export const getTravelCardTitle = ({ title }: ITravelCard): string =>
  arrayToString({
    stringArray: title.map(({ name }: ILocation) => name),
    useAmpersandsForPair: true
  });

export const getTravelCardSubtitle = ({
  subtitle
}: ITravelCard): string | undefined =>
  subtitle &&
  arrayToString({
    stringArray: subtitle.map(({ name }: ILocation) => name)
  });
