import { GIGS as DATA } from "data";

export const SOLO: Array<IGig> = DATA.filter(
  ({ company }: IGig): boolean => company.length !== 0
);
