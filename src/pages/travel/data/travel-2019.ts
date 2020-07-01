import { FRIENDS, LOCATIONS } from "@constants";

export const TRAVEL_2019: Array<ITravelCard> = [
  {
    title: [LOCATIONS.NETHERLANDS.cities.AMSTERDAM],
    subtitle: [LOCATIONS.NETHERLANDS],
    hidden: [
      LOCATIONS.NETHERLANDS.attractions.SEX_MUSEUM,
      LOCATIONS.NETHERLANDS.attractions.STEDELIJK_MUSEUM
    ],
    dates: [new Date("2019-02-01"), new Date("2019-02-04")],
    company: [
      FRIENDS.CAITLIN_MCCAIG,
      FRIENDS.TONYA_FRANCE,
      FRIENDS.RYAN_MILLS,
      FRIENDS.TOM_CHINDA_COUTTS
    ]
  },
  {
    title: [LOCATIONS.PORTUGAL.cities.LISBON],
    subtitle: [LOCATIONS.PORTUGAL],
    hidden: [LOCATIONS.PORTUGAL.attractions.OCENARIO_DE_LISBOA],
    dates: [new Date("2019-02-08"), new Date("2019-02-10")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [LOCATIONS.BELGIUM.cities.BRUGES],
    subtitle: [LOCATIONS.BELGIUM],
    hidden: [LOCATIONS.BELGIUM.attractions.BELFRY_OF_BRUGES],
    dates: [new Date("2019-05-17"), new Date("2019-05-19")],
    company: [FRIENDS.JAMIE_HALKET]
  },
  {
    title: [LOCATIONS.ITALY.cities.CATANIA],
    subtitle: [LOCATIONS.ITALY.regions.SICILY],
    hidden: [LOCATIONS.ITALY, LOCATIONS.ITALY.attractions.ETNA],
    dates: [new Date("2019-07-10"), new Date("2019-07-15")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [LOCATIONS.FRANCE.cities.NICE],
    subtitle: [LOCATIONS.FRANCE],
    hidden: [LOCATIONS.FRANCE.cities.MONACO],
    dates: [new Date("2019-06-08"), new Date("2019-06-14")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  }
];
