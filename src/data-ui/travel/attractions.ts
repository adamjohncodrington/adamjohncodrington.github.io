import { COUNTRIES } from "@constants";
import { TRIP_LEGS as DATA } from "data-raw";
import { getItemCounts } from "utils";

const generateAttractions = (): { [attraction: string]: IAttraction } => {
  let attractions = {};
  Object.values(COUNTRIES).forEach((country: ICountryTemplate): void => {
    if (country.cities)
      attractions = { ...attractions, ...country.attractions };
  });
  return attractions;
};

const attractions: IAttraction[] = Object.values(generateAttractions());

const themeParks: IAttraction[] = attractions.filter(
  ({ themePark }: IAttraction): boolean => !!themePark
);

const highlights: IAttraction[] = attractions.filter(
  ({ highlight }: IAttraction): boolean => !!highlight
);

export const HIGHLIGHTS: MiniCardProps[] = highlights.map(
  (highlight: IAttraction): MiniCardProps => {
    const { name } = highlight;
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({
      item: { attraction: highlight },
      data: { tripLegs: DATA }
    });
    return {
      primaryText: name,
      primaryCount,
      secondaryCount,
      sort: [name]
    };
  }
);

export const THEME_PARKS: MiniCardProps[] = themeParks.map(
  (themePark: IAttraction): MiniCardProps => {
    const { name } = themePark;
    const {
      pastCount: primaryCount,
      futureCount: secondaryCount
    } = getItemCounts({
      item: { attraction: themePark },
      data: { tripLegs: DATA }
    });
    return {
      primaryText: name,
      sort: [name],
      primaryCount,
      secondaryCount
    };
  }
);
