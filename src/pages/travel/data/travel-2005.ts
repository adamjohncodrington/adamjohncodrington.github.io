import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2005: Array<ITrip> = [
  {
    title: [COUNTRIES.SPAIN.attractions.PORTAVENTURA],
    subtitle: [COUNTRIES.SPAIN],
    dates: [new Date("2005-07-26"), new Date("2005-08-02")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [COUNTRIES.GREECE.regions.HALKIDIKI],
    subtitle: [COUNTRIES.GREECE],
    dates: [new Date("2005-08-18"), new Date("2005-08-23")],
    company: [
      FRIENDS.EMMA_CODRINGTON,
      FRIENDS.LOUISE_BLACKBURN,
      FRIENDS.MEGAN_BLACKBURN,
      FRIENDS.MUM,
      FRIENDS.CAMERON_BLACKBURN
    ]
  },
  {
    title: [COUNTRIES.UK.attractions.LAKE_DISTRICT],
    notAbroad: true,
    subtitle: [COUNTRIES.UK],
    dates: [new Date("2005-10-22"), new Date("2005-10-24")],
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM]
  }
];
