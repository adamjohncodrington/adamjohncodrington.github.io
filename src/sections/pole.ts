import { PAGE_SECTION_TITLES } from "@constants";
import { POLE as DATA } from "data-ui";
import { SVG } from "resources";

const INSTRUCTORS: PageSectionProps = {
  SvgIcon: SVG.PEOPLE,
  title: PAGE_SECTION_TITLES.INSTRUCTORS,
  data: { miniCards: DATA.INSTRUCTORS }
};

const STUDIOS: PageSectionProps = {
  SvgIcon: SVG.MAP_PIN,
  title: PAGE_SECTION_TITLES.STUDIOS,
  data: { miniCards: DATA.STUDIOS }
};

const CONTEMPORARY: PageSectionProps = {
  title: PAGE_SECTION_TITLES.CONTEMPORARY,
  SvgIcon: SVG.DANCER_MALE_2,
  data: { cards: DATA.CONTEMPORARY }
};

const EXOTIC: PageSectionProps = {
  SvgIcon: SVG.HEELS,
  title: PAGE_SECTION_TITLES.EXOTIC,
  data: { cards: DATA.EXOTIC }
};

const QUARANTINE: PageSectionProps = {
  SvgIcon: SVG.HOME,
  title: PAGE_SECTION_TITLES.QUARANTINE,
  data: { cards: DATA.QUARANTINE }
};

const SONGS: PageSectionProps = {
  SvgIcon: SVG.MUSIC,
  title: PAGE_SECTION_TITLES.SONGS,
  data: { miniCards: DATA.SONGS }
};

const IMPROVISATION: PageSectionProps = {
  SvgIcon: SVG.DANCER_MALE_1,
  title: PAGE_SECTION_TITLES.IMPROVISATION,
  data: { cards: DATA.IMPROVISATION }
};

const PHOTOS: PageSectionProps = {
  SvgIcon: SVG.CAMERA,
  title: PAGE_SECTION_TITLES.PHOTOS,
  data: { photoGrid: { photos: DATA.PHOTOS, columnCount: 2 } }
};

const TRICKS: PageSectionProps = {
  SvgIcon: SVG.POLE_VAULT,
  title: PAGE_SECTION_TITLES.TRICKS,
  data: { cards: DATA.TRICKS }
};

const SHOWCASE: PageSectionProps = {
  SvgIcon: SVG.STARS,
  title: PAGE_SECTION_TITLES.SHOWCASE,
  data: { cards: DATA.SHOWCASE }
};

const YEARS: PageSectionProps[] = DATA.YEARS.map(
  (year: CardProps[]): PageSectionProps => ({
    title: year[0].year.toString(),
    data: { cards: year }
  })
);

export const POLE: PageSectionProps[] = [
  TRICKS,
  CONTEMPORARY,
  EXOTIC,
  IMPROVISATION,
  PHOTOS,
  SHOWCASE,
  SONGS,
  STUDIOS,
  INSTRUCTORS,
  QUARANTINE
]
  .sort((a: PageSectionProps, b: PageSectionProps): number =>
    a.title.localeCompare(b.title)
  )
  .concat(YEARS);
