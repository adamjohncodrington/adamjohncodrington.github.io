import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2006: Array<ITrip> = [
  {
    title: [COUNTRIES.USA.states.FLORIDA],
    subtitle: [COUNTRIES.USA],
    body: [
      COUNTRIES.USA.attractions.BUSCH_GARDENS_TAMPA,
      COUNTRIES.USA.attractions.VENICE_BEACH,
      COUNTRIES.USA.attractions.UNIVERSALS_ISLANDS_OF_ADVENTURE,
      COUNTRIES.USA.attractions.SEAWORLD_ORLANDO,
      COUNTRIES.USA.attractions.DISNEY_MGM_STUDIOS,
      COUNTRIES.USA.attractions.WET_N_WILD_ORLANDO
    ],
    dates: [new Date("2006-07-25"), new Date("2006-08-05")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [COUNTRIES.ITALY.towns.SORRENTO, COUNTRIES.ITALY.cities.POMPEII],
    subtitle: [COUNTRIES.ITALY],
    body: [COUNTRIES.ITALY.attractions.VESUVIUS, COUNTRIES.ITALY.cities.NAPLES],
    dates: [new Date("2006-08-18"), new Date("2006-08-25")],
    company: [
      FRIENDS.MUM,
      FRIENDS.EMMA_CODRINGTON,
      FRIENDS.LOUISE_BLACKBURN,
      FRIENDS.MEGAN_BLACKBURN,
      FRIENDS.CAMERON_BLACKBURN
    ]
  }
];
