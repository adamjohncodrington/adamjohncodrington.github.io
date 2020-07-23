import { FRIENDS, COUNTRIES } from "@constants";
import { PHOTOS, VIDEOS } from "resources";

export const MILAN: ITrip = [
  {
    primaryLocations: [COUNTRIES.ITALY.cities.MILAN],
    country: COUNTRIES.ITALY,
    dates: [new Date("2017-05-12"), new Date("2017-05-14")],
    company: [
      FRIENDS.AISHA_SAEED,
      FRIENDS.JOE_EDWARDS,
      FRIENDS.JAMIE_HALKET,
      FRIENDS.PATRICIA_DIACONESCU,
      FRIENDS.JAZZ_THIND,
      FRIENDS.JHC
    ],
    video: VIDEOS.TRAVEL.MILAN,
    secondaryLocations: [
      COUNTRIES.ITALY.attractions.MILAN_MALL,
      COUNTRIES.ITALY.attractions.SEMPIONE_PARK,
      COUNTRIES.ITALY.attractions.ARCO_DELLA_PACE
    ]
  }
];

export const BARCELONA: ITrip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.cities.BARCELONA],
    country: COUNTRIES.SPAIN,
    dates: [new Date("2017-06-15"), new Date("2017-06-18")],
    company: [
      FRIENDS.SIAN_RODWAY_SMITH,
      FRIENDS.LINDSEY_SKELTON,
      FRIENDS.BETH_OAKES,
      FRIENDS.ELLIE_FORMAN,
      FRIENDS.HARRIET_KESTERTON
    ],
    secondaryLocations: [
      COUNTRIES.SPAIN.attractions.PARK_GUELL,
      COUNTRIES.SPAIN.attractions.CIUTADELLA_PARK
    ]
  }
];

export const TENERIFE_2017: ITrip = [
  {
    primaryLocations: [COUNTRIES.SPAIN.islands.TENERIFE],
    country: COUNTRIES.SPAIN,
    dates: [new Date("2017-06-15"), new Date("2017-06-18")],
    company: [FRIENDS.LUKE_STERN],
    secondaryLocations: [COUNTRIES.SPAIN.attractions.SIAM_PARK]
  }
];

export const COPENHAGEN: ITrip = [
  {
    primaryLocations: [COUNTRIES.DENMARK.cities.COPENHAGEN],
    country: COUNTRIES.DENMARK,
    dates: [new Date("2018-01-19"), new Date("2018-01-22")],
    company: [FRIENDS.LUKE_STERN],
    secondaryLocations: [COUNTRIES.DENMARK.attractions.LOUISIANA_ART_MUSEUM]
  }
];

export const PAPHOS: ITrip = [
  {
    primaryLocations: [COUNTRIES.CYPRUS.cities.PAPHOS],
    country: COUNTRIES.CYPRUS,
    dates: [new Date("2018-05-17"), new Date("2018-05-21")],
    company: [FRIENDS.SIAN_RODWAY_SMITH],
    secondaryLocations: [
      COUNTRIES.CYPRUS.attractions.PAPHOS_ARCHAEOLOGICAL_PARK
    ]
  }
];

export const DUBROVNIK: ITrip = [
  {
    primaryLocations: [COUNTRIES.CROATIA.cities.DUBROVNIK],
    favourite: true,
    country: COUNTRIES.CROATIA,
    dates: [new Date("2018-06-02"), new Date("2018-06-09")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON],
    secondaryLocations: [
      COUNTRIES.CROATIA.attractions.DUBROVNIK_WALLS,
      COUNTRIES.CROATIA.attractions.DUBROVNIK_CABLE_CAR
    ]
  }
];

export const GRONINGEN: ITrip = [
  {
    primaryLocations: [COUNTRIES.NETHERLANDS.cities.GRONINGEN],
    country: COUNTRIES.NETHERLANDS,
    secondaryLocations: [COUNTRIES.NETHERLANDS.attractions.GRONINGEN_MUSEUM],
    dates: [new Date("2018-07-14"), new Date("2018-07-16")],
    company: [FRIENDS.CARMEN_DALGLISH]
  }
];

export const AMSTERDAM: ITrip = [
  {
    primaryLocations: [COUNTRIES.NETHERLANDS.cities.AMSTERDAM],
    country: COUNTRIES.NETHERLANDS,
    secondaryLocations: [
      COUNTRIES.NETHERLANDS.attractions.SEX_MUSEUM,
      COUNTRIES.NETHERLANDS.attractions.STEDELIJK_MUSEUM
    ],
    dates: [new Date("2019-02-01"), new Date("2019-02-04")],
    company: [
      FRIENDS.CAITLIN_MCCAIG,
      FRIENDS.TONYA_FRANCE,
      FRIENDS.RYAN_MILLS,
      FRIENDS.TOM_CHINDA_COUTTS
    ],
    photos: PHOTOS.TRAVEL.AMSTERDAM
  }
];

export const LISBON: ITrip = [
  {
    primaryLocations: [COUNTRIES.PORTUGAL.cities.LISBON],
    country: COUNTRIES.PORTUGAL,
    photos: PHOTOS.TRAVEL.LISBON,
    secondaryLocations: [COUNTRIES.PORTUGAL.attractions.OCENARIO_DE_LISBOA],
    dates: [new Date("2019-02-08"), new Date("2019-02-10")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const BRUGES: ITrip = [
  {
    primaryLocations: [COUNTRIES.BELGIUM.cities.BRUGES],
    photos: PHOTOS.TRAVEL.LISBON,
    country: COUNTRIES.BELGIUM,
    secondaryLocations: [COUNTRIES.BELGIUM.attractions.BELFRY_OF_BRUGES],
    dates: [new Date("2019-05-17"), new Date("2019-05-19")],
    company: [FRIENDS.JAMIE_HALKET]
  }
];

export const CATANIA: ITrip = [
  {
    primaryLocations: [COUNTRIES.ITALY.cities.CATANIA],
    country: COUNTRIES.ITALY,
    secondaryLocations: [COUNTRIES.ITALY.attractions.ETNA],
    hiddenLocations: [COUNTRIES.ITALY.regions.SICILY],
    dates: [new Date("2019-07-10"), new Date("2019-07-15")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON],
    photos: PHOTOS.TRAVEL.CATANIA
  }
];

export const NICE: ITrip = [
  {
    primaryLocations: [COUNTRIES.FRANCE.cities.NICE],
    photos: PHOTOS.TRAVEL.NICE,
    country: COUNTRIES.FRANCE,
    secondaryLocations: [COUNTRIES.FRANCE.cities.MONACO],
    dates: [new Date("2019-06-08"), new Date("2019-06-14")],
    company: [FRIENDS.SIAN_RODWAY_SMITH]
  }
];
