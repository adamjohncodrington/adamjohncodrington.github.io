import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2006: Array<ITravelCard> = [
  {
    title: [LOCATIONS.USA.states.FLORIDA],
    subtitle: [LOCATIONS.USA],
    hidden: [
      LOCATIONS.USA.attractions.BUSCH_GARDENS_TAMPA,
      LOCATIONS.USA.attractions.VENICE_BEACH,
      LOCATIONS.USA.attractions.UNIVERSALS_ISLANDS_OF_ADVENTURE,
      LOCATIONS.USA.attractions.SEAWORLD_ORLANDO,
      LOCATIONS.USA.attractions.DISNEY_MGM_STUDIOS,
      LOCATIONS.USA.attractions.WET_N_WILD_ORLANDO
    ],
    dates: [new Date("2006-07-25"), new Date("2006-08-05")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [LOCATIONS.ITALY.towns.SORRENTO, LOCATIONS.ITALY.cities.POMPEII],
    subtitle: [LOCATIONS.ITALY],
    hidden: [
      LOCATIONS.ITALY.attractions.VESUVIUS,
      LOCATIONS.ITALY.cities.NAPLES
    ],
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
