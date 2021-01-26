import { PAGE_SECTION_TITLES } from "@constants";
import { THEATRE as DATA } from "data-ui";
import { SVG } from "resources";

const ACTORS: PageSectionProps = {
  title: PAGE_SECTION_TITLES.ACTORS,
  SvgIcon: SVG.ARTIST,
  data: { miniCards: DATA.ACTORS }
};

const WITH: PageSectionProps = {
  title: PAGE_SECTION_TITLES.WITH,
  SvgIcon: SVG.PEOPLE,
  data: { miniCards: DATA.WITH }
};

const PLAYS: PageSectionProps = {
  title: PAGE_SECTION_TITLES.PLAYS,
  SvgIcon: SVG.BOOK,
  data: { miniCards: DATA.PLAYS },
  count: DATA.PLAYS.length
};

const THEATRES: PageSectionProps = {
  title: PAGE_SECTION_TITLES.THEATRES,
  SvgIcon: SVG.THEATRE,
  data: { miniCards: DATA.VENUES },
  count: DATA.VENUES.length
};

const UP_NEXT: PageSectionProps = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  data: { cards: DATA.UP_NEXT }
};

const YEARS: PageSectionProps[] = DATA.YEARS.map(
  (year: CardProps[]): PageSectionProps => ({
    title: year[0].year.toString(),
    count: year.length,
    data: {
      cards: year
    }
  })
);

export const THEATRE: PageSectionProps[] = [
  ACTORS,
  WITH,
  PLAYS,
  THEATRES,
  UP_NEXT
]
  .sort((a: PageSectionProps, b: PageSectionProps): number =>
    a.title.localeCompare(b.title)
  )
  .concat(YEARS);
