import { PAGE_SECTION_TITLES } from "@constants";
import { THEATRE as DATA } from "data-ui";
import { SVG } from "resources";

const ACTORS: IPageSection = {
  title: PAGE_SECTION_TITLES.ACTORS,
  SvgIcon: SVG.ARTIST,
  panelData: { miniCards: DATA.ACTORS }
};

const FRIENDS: IPageSection = {
  title: PAGE_SECTION_TITLES.FRIENDS,
  SvgIcon: SVG.PEOPLE,
  panelData: { miniCards: DATA.FRIENDS }
};

const PLAYS: IPageSection = {
  title: PAGE_SECTION_TITLES.PLAYS,
  SvgIcon: SVG.BOOK,
  panelData: { miniCards: DATA.PLAYS },
  count: DATA.PLAYS.length
};

const THEATRES: IPageSection = {
  title: PAGE_SECTION_TITLES.THEATRES,
  SvgIcon: SVG.THEATRE,
  panelData: { miniCards: DATA.VENUES },
  count: DATA.VENUES.length
};

const UP_NEXT: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  panelData: { cards: DATA.UP_NEXT }
};

const YEARS: Array<IPageSection> = DATA.YEARS.map(
  (year: Array<ICard>): IPageSection => ({
    title: year[0].dates
      ? year[0].dates[0].getFullYear().toString()
      : "ERROR RETRIEVING PAGE SECTION YEAR",
    count: year.length,
    panelData: {
      cards: year
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
