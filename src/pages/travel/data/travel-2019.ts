import { FRIENDS, COUNTRIES } from "@constants";

export const TRAVEL_2019: Array<ITrip> = [
  {
    title: [COUNTRIES.NETHERLANDS.cities.AMSTERDAM],
    subtitle: [COUNTRIES.NETHERLANDS],
    body: [
      COUNTRIES.NETHERLANDS.attractions.SEX_MUSEUM,
      COUNTRIES.NETHERLANDS.attractions.STEDELIJK_MUSEUM
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
    title: [COUNTRIES.PORTUGAL.cities.LISBON],
    subtitle: [COUNTRIES.PORTUGAL],
    body: [COUNTRIES.PORTUGAL.attractions.OCENARIO_DE_LISBOA],
    dates: [new Date("2019-02-08"), new Date("2019-02-10")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [COUNTRIES.BELGIUM.cities.BRUGES],
    subtitle: [COUNTRIES.BELGIUM],
    body: [COUNTRIES.BELGIUM.attractions.BELFRY_OF_BRUGES],
    dates: [new Date("2019-05-17"), new Date("2019-05-19")],
    company: [FRIENDS.JAMIE_HALKET]
  },
  {
    title: [COUNTRIES.ITALY.cities.CATANIA],
    subtitle: [COUNTRIES.ITALY.regions.SICILY],
    body: [COUNTRIES.ITALY, COUNTRIES.ITALY.attractions.ETNA],
    dates: [new Date("2019-07-10"), new Date("2019-07-15")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  },
  {
    title: [COUNTRIES.FRANCE.cities.NICE],
    subtitle: [COUNTRIES.FRANCE],
    body: [COUNTRIES.FRANCE.cities.MONACO],
    dates: [new Date("2019-06-08"), new Date("2019-06-14")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  }
];
