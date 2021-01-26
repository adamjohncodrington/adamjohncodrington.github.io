import { FRIENDS, COUNTRIES } from "@constants";

export const DUBAI: Trip = [
  {
    primaryLocations: [COUNTRIES.UAE.cities.DUBAI],
    country: COUNTRIES.UAE,
    secondaryLocations: [
      COUNTRIES.UAE.attractions.AQUAVENTURE,
      COUNTRIES.UAE.attractions.BURJ_KHALIFA
    ],
    dates: [new Date("2010-07-26"), new Date("2010-08-03")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];

export const FERRAGUDO: Trip = [
  {
    primaryLocations: [COUNTRIES.PORTUGAL.towns.FERRAGUDO],
    country: COUNTRIES.PORTUGAL,
    dates: [new Date("2010-08-13"), new Date("2010-08-18")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON],
    secondaryLocations: [COUNTRIES.PORTUGAL.cities.PORTIMAO]
  }
];

export const CORNWALL_2011: Trip = [
  {
    primaryLocations: [COUNTRIES.UK.regions.CORNWALL],
    notAbroad: true,
    country: COUNTRIES.UK,
    dates: [new Date("2011-07-01"), new Date("2011-07-04")],
    company: [
      FRIENDS.BLAINE_PEARSON,
      FRIENDS.GRACE_HULME,
      FRIENDS.POOJA_DHIR,
      FRIENDS.JESS_SMITH,
      FRIENDS.ELLIE_GURKIN,
      FRIENDS.CARMEN_DALGLISH,
      FRIENDS.KYLE_HOUGH
    ]
  }
];

export const FLORIDA_KEYS: Trip = [
  {
    primaryLocations: [COUNTRIES.USA.regions.FLORIDA_KEYS],
    secondaryLocations: [
      COUNTRIES.USA.regions.ISLAMORADA,
      COUNTRIES.USA.cities.KEY_WEST
    ],
    dates: [new Date("2011-08-02"), new Date("2011-08-10")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON],
    country: COUNTRIES.USA
  }
];

export const EGYPT: Trip = [
  {
    country: COUNTRIES.EGYPT,
    primaryLocations: [COUNTRIES.EGYPT.cities.SHARM_EL_SHEIKH],
    secondaryLocations: [
      COUNTRIES.EGYPT.cities.CAIRO,
      COUNTRIES.EGYPT.attractions.GIZA_PYRAMIDS_SPHINX
    ],
    showCountryAsTitle: true,
    dates: [new Date("2012-07-22"), new Date("2012-07-29")],
    company: [FRIENDS.DAD]
  }
];

export const VENICE: Trip = [
  {
    primaryLocations: [
      COUNTRIES.ITALY.towns.JESOLO,
      COUNTRIES.ITALY.cities.VENICE
    ],
    country: COUNTRIES.ITALY,
    dates: [new Date("2012-08-20"), new Date("2012-08-26")],
    company: [FRIENDS.MUM, FRIENDS.EMMA_CODRINGTON]
  }
];

export const CUBA: Trip = [
  {
    country: COUNTRIES.CUBA,
    primaryLocations: [
      COUNTRIES.CUBA.cities.HAVANA,
      COUNTRIES.CUBA.towns.VARADERO
    ],
    showCountryAsTitle: true,
    dates: [new Date("2013-08-16"), new Date("2013-08-26")],
    company: [FRIENDS.DAD, FRIENDS.EMMA_CODRINGTON]
  }
];
