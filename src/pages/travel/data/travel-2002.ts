import { FRIENDS, COUNTRIES } from "@constants";

const FLORIDA_2002: ITrip = [
  {
    primaryLocations: [COUNTRIES.USA.states.FLORIDA],
    country: COUNTRIES.USA,
    secondaryLocations: [
      COUNTRIES.USA.attractions.BUSCH_GARDENS_TAMPA,
      COUNTRIES.USA.attractions.DISNEY_EPCOT,
      COUNTRIES.USA.attractions.UNIVERSALS_ISLANDS_OF_ADVENTURE,
      COUNTRIES.USA.attractions.UNIVERSAL_STUDIOS_FLORIDA,
      COUNTRIES.USA.attractions.DISNEY_ANIMAL_KINGDOM,
      COUNTRIES.USA.attractions.DISNEY_MGM_STUDIOS,
      COUNTRIES.USA.attractions.DISNEY_MAGIC_KINGDOM,
      COUNTRIES.USA.attractions.BLIZZARD_BEACH,
      COUNTRIES.USA.attractions.SEAWORLD_ORLANDO
    ],
    dates: [new Date("2002-05-23"), new Date("2002-06-12")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const TRAVEL_2002: Array<ITrip> = [FLORIDA_2002];
