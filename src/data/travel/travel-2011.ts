import { FRIENDS, LOCATIONS } from "../../constants";

export const TRAVEL_2011: Array<ITravelData> = [
  {
    title: [LOCATIONS.UK.regions.CORNWALL],
    notAbroad: true,
    subtitle: [LOCATIONS.UK],
    dates: [new Date("2011-07-01"), new Date("2011-07-04")],
    company: [
      FRIENDS.BLAINE,
      FRIENDS.GRACE,
      FRIENDS.POOJA,
      FRIENDS.JESS,
      FRIENDS.ELLIE_G,
      FRIENDS.CARMEN,
      FRIENDS.KYLE
    ]
  },
  {
    title: [LOCATIONS.USA.regions.FLORIDA_KEYS],
    subtitle: [LOCATIONS.USA.regions.ISLAMORADA, LOCATIONS.USA.cities.KEY_WEST],
    dates: [new Date("2011-08-02"), new Date("2011-08-10")],
    company: [FRIENDS.DAD, FRIENDS.EMMA],
    hidden: [LOCATIONS.USA]
  }
];
