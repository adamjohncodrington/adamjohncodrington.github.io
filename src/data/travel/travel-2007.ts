import { FRIENDS, LOCATIONS } from "CONSTANTS";

export const TRAVEL_2007: Array<ITravelData> = [
  {
    title: [
      LOCATIONS.USA.cities.SAN_FRANCISCO,
      LOCATIONS.USA.cities.LOS_ANGELES
    ],
    subtitle: [LOCATIONS.USA],
    hidden: [
      LOCATIONS.USA.attractions.GOLDEN_GATE_BRIDGE,
      LOCATIONS.USA.attractions.FISHERMANS_WHARF,
      LOCATIONS.USA.attractions.ALCATRAZ_PRISON,
      LOCATIONS.USA.attractions.KNOTTS_BERRY_FARM,
      LOCATIONS.USA.attractions.HOLLYWOOD_WALK_OF_FAME,
      LOCATIONS.USA.islands.ALCATRAZ,
      LOCATIONS.USA.attractions.DISNEYLAND_CALIFORNIA_ADVENTURE
    ],
    dates: [new Date("2007-07-24"), new Date("2007-08-05")],
    company: [FRIENDS.DAD, FRIENDS.EMMA]
  },
  {
    title: [LOCATIONS.UK.regions.CORNWALL],
    notAbroad: true,
    subtitle: [LOCATIONS.UK],
    dates: [new Date("2007-08-11"), new Date("2007-08-18")],
    company: [FRIENDS.MUM, FRIENDS.EMMA]
  }
];
