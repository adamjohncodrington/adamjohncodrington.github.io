import { PAGE_SECTION_TITLES } from "@constants";
import { SVG_ICONS } from "resources";
import { isInFuture } from "utils";

import { FACTORY } from "./factory";
import { DATA } from "./data";

const { ACTORS, FRIENDS, PLAYS, VENUES, UP_NEXT } = FACTORY;

const SECTIONS_STATS: Array<IPageSection> = [
  {
    title: "Actors",
    icon: SVG_ICONS.ARTIST,
    data: { countedItems: ACTORS }
  },
  {
    title: PAGE_SECTION_TITLES.FRIENDS,
    icon: SVG_ICONS.PEOPLE,
    data: { countedItems: FRIENDS }
  },
  {
    title: "Plays",
    icon: SVG_ICONS.BOOK,
    data: { countedItems: PLAYS },
    count: PLAYS.length
  },
  {
    title: "Theatres",
    icon: SVG_ICONS.THEATRE,
    data: { countedItems: VENUES },
    count: VENUES.length
  },
  {
    title: PAGE_SECTION_TITLES.UP_NEXT,
    icon: SVG_ICONS.NOTEPAD,
    data: { theatreCards: UP_NEXT }
  }
];

const SECTIONS_YEARS: Array<IPageSection> = DATA.SPLIT_BY_YEAR.map(
  (year: Array<ITheatreCard>) => ({
    title: year[0].dates[0].getFullYear().toString(),
    count: year.length,
    data: {
      theatreCards: year.filter(
        (theatreVisit: ITheatreCard) => !isInFuture(theatreVisit.dates)
      )
    }
  })
);

export const sections: Array<IPageSection> = [
  ...SECTIONS_STATS,
  ...SECTIONS_YEARS
];
