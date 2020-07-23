import { COUNTRIES } from "@constants";
import { TRAVEL as DATA } from "data";
import { getItemCounts } from "utils";

const generateAttractions = (): { [attraction: string]: IAttraction } => {
  let attractions = {};
  Object.values(COUNTRIES).forEach((country: ICountryTemplate): void => {
    if (country.cities)
      attractions = { ...attractions, ...country.attractions };
  });
  return attractions;
};

const attractions: Array<IAttraction> = Object.values(generateAttractions());

const themeParks: Array<IAttraction> = attractions.filter(
  ({ themePark }: IAttraction): boolean => !!themePark
);

const highlights: Array<IAttraction> = attractions.filter(
  ({ highlight }: IAttraction): boolean => !!highlight
);

export const HIGHLIGHTS: Array<ICountedListItem> = highlights.map(
  (highlight: IAttraction): ICountedListItem => ({
    text: highlight.name,
    ...getItemCounts({
      item: { attraction: highlight },
      data: { trips: DATA.TRIP_LEGS }
    })
  })
);

export const THEME_PARKS: Array<ICountedListItem> = themeParks.map(
  (themePark: IAttraction): ICountedListItem => ({
    text: themePark.name,
    ...getItemCounts({
      item: { attraction: themePark },
      data: { trips: DATA.TRIP_LEGS }
    })
  })
);
