import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2002: Array<ITravelCard> = [
  {
    title: [LOCATIONS.USA.states.FLORIDA],
    subtitle: [LOCATIONS.USA],
    hidden: [
      LOCATIONS.USA.attractions.BUSCH_GARDENS_TAMPA,
      LOCATIONS.USA.attractions.DISNEY_EPCOT,
      LOCATIONS.USA.attractions.UNIVERSALS_ISLANDS_OF_ADVENTURE,
      LOCATIONS.USA.attractions.UNIVERSAL_STUDIOS_FLORIDA,
      LOCATIONS.USA.attractions.DISNEY_ANIMAL_KINGDOM,
      LOCATIONS.USA.attractions.DISNEY_MGM_STUDIOS,
      LOCATIONS.USA.attractions.DISNEY_MAGIC_KINGDOM,
      LOCATIONS.USA.attractions.BLIZZARD_BEACH,
      LOCATIONS.USA.attractions.SEAWORLD_ORLANDO
    ],
    dates: [new Date("2002-05-23"), new Date("2002-06-12")],
    company: [FRIENDS.DAD, FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];
