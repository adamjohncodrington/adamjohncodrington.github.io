import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2005: Array<ITravelCard> = [
  {
    title: [LOCATIONS.SPAIN.attractions.PORTAVENTURA],
    subtitle: [LOCATIONS.SPAIN],
    dates: [new Date("2005-07-26"), new Date("2005-08-02")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [LOCATIONS.GREECE.regions.HALKIDIKI],
    subtitle: [LOCATIONS.GREECE],
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
    title: [LOCATIONS.UK.attractions.LAKE_DISTRICT],
    notAbroad: true,
    subtitle: [LOCATIONS.UK],
    dates: [new Date("2005-10-22"), new Date("2005-10-24")],
    company: [FRIENDS.EMMA_CODRINGTON, FRIENDS.MUM]
  }
];
