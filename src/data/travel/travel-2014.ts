import { FRIENDS, LOCATIONS } from "CONSTANTS";

export const TRAVEL_2014: Array<ITravelData> = [
  {
    title: [LOCATIONS.BARBADOS],
    dates: [new Date("2014-06-16"), new Date("2014-06-24")],
    company: [FRIENDS.DAD, FRIENDS.EMMA],
    hidden: [LOCATIONS.BARBADOS.attractions.HARRISONS_CAVE]
  },
  {
    title: [LOCATIONS.THAILAND, LOCATIONS.LAOS],
    subtitle: [
      LOCATIONS.THAILAND.cities.BANGKOK,
      LOCATIONS.THAILAND.islands.KOH_PHANGAN,
      LOCATIONS.THAILAND.islands.KOH_TAO,
      LOCATIONS.THAILAND.islands.KOH_PHI_PHI,
      LOCATIONS.THAILAND.cities.CHIANG_MAI,
      LOCATIONS.THAILAND.towns.PAI,
      LOCATIONS.LAOS.cities.LUANG_PRABANG,
      LOCATIONS.LAOS.cities.VIENTIANE
    ],
    hidden: [
      LOCATIONS.THAILAND.attractions.SKY_BAR,
      LOCATIONS.THAILAND.attractions.GRAND_PALACE,
      LOCATIONS.THAILAND.attractions.TIGER_KINGDOM,
      LOCATIONS.THAILAND.attractions.WHITE_TEMPLE,
      LOCATIONS.LAOS.attractions.BUDDHA_PARK,
      LOCATIONS.LAOS.attractions.ELEPHANT_VILLAGE,
      LOCATIONS.THAILAND.attractions.MAYA_BAY,
      LOCATIONS.THAILAND.towns.KRABI,
      LOCATIONS.THAILAND.attractions.PAI_CANYON,
      LOCATIONS.THAILAND.cities.CHIANG_RAI,
      LOCATIONS.LAOS.attractions.KUANG_SI_FALLS
    ],
    dates: [new Date("2014-07-07"), new Date("2014-08-04")],
    company: [FRIENDS.TONYA]
  }
];
