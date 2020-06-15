import { ICONS } from "../resources";
import { PAGE_DATA } from "../pages";

export const HOMEPAGE_ROUTE: IHomepageRoute = {
  title: "Home",
  dest: "/"
};

export const PAGE_ROUTES: Array<IRoute> = [
  {
    dest: "/gigs",
    icon: ICONS.MICROPHONE,
    title: "gigs",
    pageData: PAGE_DATA.GIGS
  },
  {
    dest: "/recipes",
    icon: ICONS.VEG_BOWL,
    title: "recipes",
    pageData: PAGE_DATA.RECIPES
  },
  {
    dest: "/theatre",
    icon: ICONS.MASKS,
    title: "theatre",
    pageData: PAGE_DATA.THEATRE
  },
  {
    dest: "/travel",
    icon: ICONS.TRAVEL,
    title: "travel",
    pageData: PAGE_DATA.TRAVEL
  }
];
