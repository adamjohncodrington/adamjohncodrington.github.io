import { GIGS_AND_FESTIVALS as DATA } from "data";

export const SOLO: Array<IGigOrFestival> = DATA.filter(
  ({ company }: IGigOrFestival): boolean => company.length === 0
).map((gigOrFestival: IGigOrFestival) => ({
  ...gigOrFestival,
  hideCompanySymbols: true
}));
