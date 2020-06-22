import { FRIENDS, LOCATIONS } from "_constants";

export const TRAVEL_2005: Array<ITravelData> = [
  {
    title: [LOCATIONS.SPAIN.attractions.PORTAVENTURA],
    subtitle: [LOCATIONS.SPAIN],
    dates: [new Date("2005-07-26"), new Date("2005-08-02")],
    company: [FRIENDS.DAD, FRIENDS.EMMA]
  },
  {
    title: [LOCATIONS.GREECE.regions.HALKIDIKI],
    subtitle: [LOCATIONS.GREECE],
    dates: [new Date("2005-08-18"), new Date("2005-08-23")],
    company: [
      FRIENDS.EMMA,
      FRIENDS.LOUISE,
      FRIENDS.MEGAN,
      FRIENDS.MUM,
      FRIENDS.CAMERON
    ]
  },
  {
    title: [LOCATIONS.UK.attractions.LAKE_DISTRICT],
    notAbroad: true,
    subtitle: [LOCATIONS.UK],
    dates: [new Date("2005-10-22"), new Date("2005-10-24")],
    company: [FRIENDS.EMMA, FRIENDS.MUM]
  }
];
