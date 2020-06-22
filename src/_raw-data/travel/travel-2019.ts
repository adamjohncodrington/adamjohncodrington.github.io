import { FRIENDS, LOCATIONS } from "_constants";

export const TRAVEL_2019: Array<ITravelData> = [
  {
    title: [LOCATIONS.NETHERLANDS.cities.AMSTERDAM],
    subtitle: [LOCATIONS.NETHERLANDS],
    hidden: [
      LOCATIONS.NETHERLANDS.attractions.SEX_MUSEUM,
      LOCATIONS.NETHERLANDS.attractions.STEDELIJK_MUSEUM
    ],
    dates: [new Date("2019-02-01"), new Date("2019-02-04")],
    company: [FRIENDS.CAITLIN, FRIENDS.TONYA, FRIENDS.RYAN, FRIENDS.TOM]
  },
  {
    title: [LOCATIONS.PORTUGAL.cities.LISBON],
    subtitle: [LOCATIONS.PORTUGAL],
    hidden: [LOCATIONS.PORTUGAL.attractions.OCENARIO_DE_LISBOA],
    dates: [new Date("2019-02-08"), new Date("2019-02-10")],
    company: [FRIENDS.MUM, FRIENDS.EMMA]
  },
  {
    title: [LOCATIONS.BELGIUM.cities.BRUGES],
    subtitle: [LOCATIONS.BELGIUM],
    hidden: [LOCATIONS.BELGIUM.attractions.BELFRY_OF_BRUGES],
    dates: [new Date("2019-05-17"), new Date("2019-05-19")],
    company: [FRIENDS.JAMIE]
  },
  {
    title: [LOCATIONS.ITALY.cities.CATANIA],
    subtitle: [LOCATIONS.ITALY.regions.SICILY],
    hidden: [LOCATIONS.ITALY, LOCATIONS.ITALY.attractions.ETNA],
    dates: [new Date("2019-07-10"), new Date("2019-07-15")],
    company: [FRIENDS.DAD, FRIENDS.EMMA]
  },
  {
    title: [LOCATIONS.FRANCE.cities.NICE],
    subtitle: [LOCATIONS.FRANCE],
    hidden: [LOCATIONS.FRANCE.cities.MONACO],
    dates: [new Date("2019-06-08"), new Date("2019-06-14")],
    company: [FRIENDS.SIAN]
  }
];
