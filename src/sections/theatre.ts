import { PAGE_SECTION_TITLES } from "@constants";
import { THEATRE as DATA } from "data-ui";
import { SVG } from "resources";
import { isInFuture } from "utils";

const ACTORS: IPageSection = {
  title: PAGE_SECTION_TITLES.ACTORS,
  SvgIcon: SVG.ARTIST,
  data: { miniCards: DATA.ACTORS }
};

const FRIENDS: IPageSection = {
  title: PAGE_SECTION_TITLES.FRIENDS,
  SvgIcon: SVG.PEOPLE,
  data: { miniCards: DATA.FRIENDS }
};

const PLAYS: IPageSection = {
  title: PAGE_SECTION_TITLES.PLAYS,
  SvgIcon: SVG.BOOK,
  data: { miniCards: DATA.PLAYS },
  count: DATA.PLAYS.length
};

const THEATRES: IPageSection = {
  title: PAGE_SECTION_TITLES.THEATRES,
  SvgIcon: SVG.THEATRE,
  data: { miniCards: DATA.VENUES },
  count: DATA.VENUES.length
};

const UP_NEXT: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  data: { theatreVisits: DATA.UP_NEXT }
};

const YEARS: Array<IPageSection> = DATA.YEARS.map(
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

export const THEATRE: Array<IPageSection> = [
  ACTORS,
  FRIENDS,
  PLAYS,
  THEATRES,
  UP_NEXT,
  ...YEARS
];
