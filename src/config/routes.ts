import { SVG_ICONS } from "resources";
import { PAGES } from "pages";

const { GIGS, RECIPES, THEATRE, TRAVEL, VINYL } = PAGES;

export const HOMEPAGE_ROUTE: IHomepageRoute = {
  title: "Home",
  dest: "/"
};

export const PAGE_ROUTES: Array<IRoute> = [
  {
    dest: "/gigs",
    icon: SVG_ICONS.MICROPHONE,
    title: "Gigs",
    page: GIGS
  },
  {
    dest: "/recipes",
    icon: SVG_ICONS.VEG_BOWL,
    title: "Recipes",
    page: RECIPES
  },
  {
    dest: "/theatre",
    icon: SVG_ICONS.MASKS,
    title: "Theatre",
    page: THEATRE
  },
  {
    dest: "/travel",
    icon: SVG_ICONS.TRAVEL,
    title: "Travel",
    page: TRAVEL
  },
  {
    dest: "/vinyl",
    icon: SVG_ICONS.VINYL,
    title: "Vinyl",
    hide: true,
    page: VINYL
  }
].filter((route: IRoute) => !route.hide);
