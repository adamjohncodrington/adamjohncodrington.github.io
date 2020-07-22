import { PAGE_SECTION } from "@constants";
import { THEATRE } from "factories";
import { SVG } from "resources";
import { isInFuture } from "utils";

const ACTORS: IPageSection = {
  title: PAGE_SECTION.TITLES.ACTORS,
  SvgIcon: SVG.ARTIST,
  data: { countedListItems: THEATRE.ACTORS }
};

const FRIENDS_THEATRE: IPageSection = {
  title: PAGE_SECTION.TITLES.FRIENDS,
  SvgIcon: SVG.PEOPLE,
  data: { countedListItems: THEATRE.FRIENDS }
};

const PLAYS: IPageSection = {
  title: PAGE_SECTION.TITLES.PLAYS,
  SvgIcon: SVG.BOOK,
  data: { countedListItems: THEATRE.PLAYS },
  count: THEATRE.PLAYS.length
};

const THEATRES: IPageSection = {
  title: PAGE_SECTION.TITLES.THEATRES,
  SvgIcon: SVG.THEATRE,
  data: { countedListItems: THEATRE.VENUES },
  count: THEATRE.VENUES.length
};

const UP_NEXT_THEATRE: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION.TITLES.UP_NEXT,
  data: { theatreVisits: THEATRE.UP_NEXT }
};

const SECTIONS_YEARS: Array<IPageSection> = THEATRE.SPLIT_BY_YEAR.map(
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
  ACTORS,
  FRIENDS_THEATRE,
  PLAYS,
  THEATRES,
  UP_NEXT_THEATRE,
  ...SECTIONS_YEARS
];
