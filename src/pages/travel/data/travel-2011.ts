import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2011: Array<ITravelCard> = [
  {
    title: [COUNTRIES.UK.regions.CORNWALL],
    notAbroad: true,
    subtitle: [COUNTRIES.UK],
    dates: [new Date("2011-07-01"), new Date("2011-07-04")],
    company: [
      FRIENDS.BLAINE_PEARSON,
      FRIENDS.GRACE_HULME,
      FRIENDS.POOJA_DHIR,
      FRIENDS.JESS_SMITH,
      FRIENDS.ELLIE_GURKIN,
      FRIENDS.CARMEN_DALGLISH,
      FRIENDS.KYLE_HOUGH
    ]
  },
  {
    title: [COUNTRIES.USA.regions.FLORIDA_KEYS],
    subtitle: [COUNTRIES.USA.regions.ISLAMORADA, COUNTRIES.USA.cities.KEY_WEST],
    dates: [new Date("2011-08-02"), new Date("2011-08-10")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON],
    hidden: [COUNTRIES.USA]
  }
];
