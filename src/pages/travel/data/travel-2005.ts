import { FRIENDS, COUNTRIES } from "@constants";

const PORTAVENTURA: ITrip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.attractions.PORTAVENTURA],
    country: COUNTRIES.SPAIN,
    dates: [new Date("2005-07-26"), new Date("2005-08-02")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];

const HALKIDIKI: ITrip = [
  {
    primaryLocations: [COUNTRIES.GREECE.regions.HALKIDIKI],
    country: COUNTRIES.GREECE,
    dates: [new Date("2005-08-18"), new Date("2005-08-23")],
    company: [
      FRIENDS.EMMA_CODRINGTON,
      FRIENDS.LOUISE_BLACKBURN,
      FRIENDS.MEGAN_BLACKBURN,
      FRIENDS.MUM,
      FRIENDS.CAMERON_BLACKBURN
    ]
  }
];

const LAKE_DISTRICT_2005: ITrip = [
  {
    primaryLocations: [COUNTRIES.UK.attractions.LAKE_DISTRICT],
    notAbroad: true,
    country: COUNTRIES.UK,
    dates: [new Date("2005-10-22"), new Date("2005-10-24")],
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM]
  }
];

export const TRAVEL_2005: Array<ITrip> = [
  PORTAVENTURA,
  HALKIDIKI,
  LAKE_DISTRICT_2005
];
