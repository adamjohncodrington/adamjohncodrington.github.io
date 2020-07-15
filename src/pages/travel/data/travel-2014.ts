import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2014: Array<ITrip> = [
  {
    title: [COUNTRIES.BARBADOS],
    dates: [new Date("2014-06-16"), new Date("2014-06-24")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON],
    body: [COUNTRIES.BARBADOS.attractions.HARRISONS_CAVE]
  },
  {
    title: [COUNTRIES.THAILAND],
    subtitle: [
      COUNTRIES.THAILAND.cities.BANGKOK,
      COUNTRIES.THAILAND.islands.KOH_PHANGAN,
      COUNTRIES.THAILAND.islands.KOH_TAO,
      COUNTRIES.THAILAND.islands.KOH_PHI_PHI,
      COUNTRIES.THAILAND.cities.CHIANG_MAI,
      COUNTRIES.THAILAND.towns.PAI
    ],
    body: [
      COUNTRIES.THAILAND.attractions.SKY_BAR,
      COUNTRIES.THAILAND.attractions.GRAND_PALACE,
      COUNTRIES.THAILAND.attractions.TIGER_KINGDOM,
      COUNTRIES.THAILAND.attractions.WHITE_TEMPLE,
      COUNTRIES.THAILAND.attractions.MAYA_BAY,
      COUNTRIES.THAILAND.towns.KRABI,
      COUNTRIES.THAILAND.attractions.PAI_CANYON,
      COUNTRIES.THAILAND.cities.CHIANG_RAI
    ],
    dates: [new Date("2014-07-07"), new Date("2014-07-27")],
    company: [FRIENDS.TONYA_FRANCE]
  },
  {
    title: [COUNTRIES.LAOS],
    subtitle: [
      COUNTRIES.LAOS.cities.LUANG_PRABANG,
      COUNTRIES.LAOS.cities.VIENTIANE
    ],
    body: [
      COUNTRIES.LAOS.attractions.BUDDHA_PARK,
      COUNTRIES.LAOS.attractions.ELEPHANT_VILLAGE,
      COUNTRIES.LAOS.attractions.KUANG_SI_FALLS
    ],
    dates: [new Date("2014-07-28"), new Date("2014-08-01")],
    company: [FRIENDS.TONYA_FRANCE]
  }
];
