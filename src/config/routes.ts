import { ICONS } from "resources";
import { PAGE_GIGS, PAGE_RECIPES, PAGE_THEATRE, PAGE_TRAVEL } from "pages";

export const HOMEPAGE_ROUTE: IHomepageRoute = {
  title: "Home",
  dest: "/"
};

export const PAGE_ROUTES: Array<IRoute> = [
  {
    dest: "/gigs",
    icon: ICONS.MICROPHONE,
    title: "gigs",
    page: PAGE_GIGS
  },
  {
    dest: "/recipes",
    icon: ICONS.VEG_BOWL,
    title: "recipes",
    page: PAGE_RECIPES
  },
  {
    dest: "/theatre",
    icon: ICONS.MASKS,
    title: "theatre",
    page: PAGE_THEATRE
  },
  {
    dest: "/travel",
    icon: ICONS.TRAVEL,
    title: "travel",
    page: PAGE_TRAVEL
  }
];
