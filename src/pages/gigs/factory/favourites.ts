import { DATA } from "../data";

export const FAVOURITES: Array<IGigCard> = DATA.ALL.filter(
  ({ favourite }: IGigCard) => favourite
);
