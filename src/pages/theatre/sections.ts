import { PAGE_SECTION_TITLES } from "constant-objects";
import { SVG_ICON_STRINGS } from "resources";
import { isInFuture } from "utils";

import { FACTORY } from "./factory";
import { DATA } from "./data";

const SECTION_ACTORS: IPageSection = {
  title: "Actors",
  icon: SVG_ICON_STRINGS.ARTIST,
  data: { countedListItems: FACTORY.ACTORS }
};

const SECTION_FRIENDS_THEATRE: IPageSection = {
  title: PAGE_SECTION_TITLES.FRIENDS,
  icon: SVG_ICON_STRINGS.PEOPLE,
  data: { countedListItems: FACTORY.FRIENDS }
};

const SECTION_PLAYS: IPageSection = {
  title: "Plays",
  icon: SVG_ICON_STRINGS.BOOK,
  data: { countedListItems: FACTORY.PLAYS },
  count: FACTORY.PLAYS.length
};

const SECTION_THEATRES: IPageSection = {
  title: "Theatres",
  icon: SVG_ICON_STRINGS.THEATRE,
  data: { countedListItems: FACTORY.VENUES },
  count: FACTORY.VENUES.length
};

const SECTION_UP_NEXT_THEATRE: IPageSection = {
  title: PAGE_SECTION_TITLES.UP_NEXT,
  icon: SVG_ICON_STRINGS.NOTEPAD,
  data: { theatreCards: FACTORY.UP_NEXT }
};

const SECTIONS_YEARS: Array<IPageSection> = DATA.SPLIT_BY_YEAR.map(
  (year: Array<ITheatreCard>): IPageSection => ({
    title: year[0].date.getFullYear().toString(),
    count: year.length,
    data: {
      theatreCards: year.filter(({ date }: ITheatreCard) => !isInFuture(date))
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
