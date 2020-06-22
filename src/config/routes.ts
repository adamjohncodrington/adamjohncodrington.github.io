import { ICONS } from "resources";
import {
  DATA_PAGE_GIGS,
  DATA_PAGE_RECIPES,
  DATA_PAGE_THEATRE,
  DATA_PAGE_TRAVEL
} from "pages";

export const HOMEPAGE_ROUTE: IHomepageRoute = {
  title: "Home",
  dest: "/"
};

export const PAGE_ROUTES: Array<IRoute> = [
  {
    dest: "/gigs",
    icon: ICONS.MICROPHONE,
    title: "gigs",
    pageData: DATA_PAGE_GIGS
  },
  {
    dest: "/recipes",
    icon: ICONS.VEG_BOWL,
    title: "recipes",
    pageData: DATA_PAGE_RECIPES
  },
  {
    dest: "/theatre",
    icon: ICONS.MASKS,
    title: "theatre",
    pageData: DATA_PAGE_THEATRE
  },
  {
    dest: "/travel",
    icon: ICONS.TRAVEL,
    title: "travel",
    pageData: DATA_PAGE_TRAVEL
  }
];
