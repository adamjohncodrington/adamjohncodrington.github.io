import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2007: Array<ITrip> = [
  {
    primaryLocations: [
      COUNTRIES.USA.cities.SAN_FRANCISCO,
      COUNTRIES.USA.cities.LOS_ANGELES
    ],
    country: COUNTRIES.USA,
    favourite: true,
    secondaryLocations: [
      COUNTRIES.USA.attractions.GOLDEN_GATE_BRIDGE,
      COUNTRIES.USA.attractions.FISHERMANS_WHARF,
      COUNTRIES.USA.attractions.ALCATRAZ_PRISON,
      COUNTRIES.USA.attractions.KNOTTS_BERRY_FARM,
      COUNTRIES.USA.attractions.HOLLYWOOD_WALK_OF_FAME,
      COUNTRIES.USA.islands.ALCATRAZ,
      COUNTRIES.USA.attractions.DISNEYLAND_CALIFORNIA_ADVENTURE
    ],
    dates: [new Date("2007-07-24"), new Date("2007-08-05")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    primaryLocations: [COUNTRIES.UK.regions.CORNWALL],
    notAbroad: true,
    country: COUNTRIES.UK,
    dates: [new Date("2007-08-11"), new Date("2007-08-18")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
