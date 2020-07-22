import { PAGE_SECTION } from "@constants";
import { THEATRE as FACTORY } from "factories";
import { SVG } from "resources";
import { isInFuture } from "utils";

const ACTORS: IPageSection = {
  title: PAGE_SECTION.TITLES.ACTORS,
  SvgIcon: SVG.ARTIST,
  data: { countedListItems: FACTORY.ACTORS }
};

const FRIENDS: IPageSection = {
  title: PAGE_SECTION.TITLES.FRIENDS,
  SvgIcon: SVG.PEOPLE,
  data: { countedListItems: FACTORY.FRIENDS }
};

const PLAYS: IPageSection = {
  title: PAGE_SECTION.TITLES.PLAYS,
  SvgIcon: SVG.BOOK,
  data: { countedListItems: FACTORY.PLAYS },
  count: FACTORY.PLAYS.length
};

const THEATRES: IPageSection = {
  title: PAGE_SECTION.TITLES.THEATRES,
  SvgIcon: SVG.THEATRE,
  data: { countedListItems: FACTORY.VENUES },
  count: FACTORY.VENUES.length
};

const UP_NEXT: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION.TITLES.UP_NEXT,
  data: { theatreVisits: FACTORY.UP_NEXT }
};

const YEARS: Array<IPageSection> = FACTORY.YEARS.map(
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
