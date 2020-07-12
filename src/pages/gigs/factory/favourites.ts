import { DATA } from "../data";

export const FAVOURITES: Array<IGig> = DATA.ALL.filter(
  ({ favourite }: IGig) => favourite
);
