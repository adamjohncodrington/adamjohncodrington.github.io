import { PAGE_SECTION } from "@constants";
import { SVG } from "resources";
import { isInFuture } from "utils";

import { FACTORY } from "./factory";

const SECTION_ACTORS: IPageSection = {
  title: PAGE_SECTION.TITLES.ACTORS,
  SvgIcon: SVG.ARTIST,
  data: { countedListItems: FACTORY.ACTORS }
};

const SECTION_FRIENDS_THEATRE: IPageSection = {
  title: PAGE_SECTION.TITLES.FRIENDS,
  SvgIcon: SVG.PEOPLE,
  data: { countedListItems: FACTORY.FRIENDS }
};

const SECTION_PLAYS: IPageSection = {
  title: PAGE_SECTION.TITLES.PLAYS,
  SvgIcon: SVG.BOOK,
  data: { countedListItems: FACTORY.PLAYS },
  count: FACTORY.PLAYS.length
};

const SECTION_THEATRES: IPageSection = {
  title: PAGE_SECTION.TITLES.THEATRES,
  SvgIcon: SVG.THEATRE,
  data: { countedListItems: FACTORY.VENUES },
  count: FACTORY.VENUES.length
};

const SECTION_UP_NEXT_THEATRE: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION.TITLES.UP_NEXT,
  data: { theatreVisits: FACTORY.UP_NEXT }
};

const SECTIONS_YEARS: Array<IPageSection> = FACTORY.SPLIT_BY_YEAR.map(
  (year: Array<ITheatreVisit>): IPageSection => ({
    title: year[0].date.getFullYear().toString(),
    count: year.length,
    data: {
      theatreVisits: year.filter(
        ({ date }: ITheatreVisit): boolean => !isInFuture(date)
      )
    }
  })
);

export const sections: Array<IPageSection> = [
  SECTION_ACTORS,
  SECTION_FRIENDS_THEATRE,
  SECTION_PLAYS,
  SECTION_THEATRES,
  SECTION_UP_NEXT_THEATRE,
  ...SECTIONS_YEARS
];
