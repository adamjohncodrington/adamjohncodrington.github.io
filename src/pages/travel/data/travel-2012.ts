import { FRIENDS, COUNTRIES } from "@constants";

const EGYPT: ITrip = [
  {
    country: COUNTRIES.EGYPT,
    primaryLocations: [COUNTRIES.EGYPT.cities.SHARM_EL_SHEIKH],
    secondaryLocations: [
      COUNTRIES.EGYPT.cities.CAIRO,
      COUNTRIES.EGYPT.attractions.GIZA_PYRAMIDS_SPHINX
    ],
    showCountryAsTitle: true,
    dates: [new Date("2012-07-22"), new Date("2012-07-29")],
    company: [FRIENDS.DAD]
  }
];

const VENICE: ITrip = [
  {
    primaryLocations: [
      COUNTRIES.ITALY.towns.JESOLO,
      COUNTRIES.ITALY.cities.VENICE
    ],
    country: COUNTRIES.ITALY,
    dates: [new Date("2012-08-20"), new Date("2012-08-26")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const TRAVEL_2012: Array<ITrip> = [EGYPT, VENICE];
