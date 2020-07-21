import { FRIENDS, COUNTRIES } from "@constants";
import { PHOTOS } from "resources";

const OSLO: ITrip = [
  {
    primaryLocations: [COUNTRIES.NORWAY.cities.OSLO],
    country: COUNTRIES.NORWAY,
    secondaryLocations: [
      COUNTRIES.NORWAY.islands.HOVEDOYA,
      COUNTRIES.NORWAY.attractions.OSLO_FJORD_SAUNA
    ],
    dates: [new Date("2020-02-27"), new Date("2020-03-01")],
    company: [
      FRIENDS.RYAN_MILLS,
      FRIENDS.CAITLIN_MCCAIG,
      FRIENDS.TOM_CHINDA_COUTTS,
      FRIENDS.TONYA_FRANCE
    ],
    photos: PHOTOS.TRAVEL.OSLO
  }
];

export const TRAVEL_2020: Array<ITrip> = [OSLO];
