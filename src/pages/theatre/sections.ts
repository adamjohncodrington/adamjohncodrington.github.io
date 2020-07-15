import { PAGE_SECTION_TITLES } from "@constants";
import {
  SvgArtist,
  SvgFriends,
  SvgBook,
  SvgTheatre,
  SvgNotepad
} from "resources";
import { isInFuture } from "utils";

import { FACTORY } from "./factory";
import { DATA } from "./data";

const SECTION_ACTORS: IPageSection = {
  title: "Actors",
  SvgIcon: SvgArtist,
  data: { countedListItems: FACTORY.ACTORS }
};

const SECTION_FRIENDS_THEATRE: IPageSection = {
  title: PAGE_SECTION_TITLES.FRIENDS,
  SvgIcon: SvgFriends,
  data: { countedListItems: FACTORY.FRIENDS }
};

const SECTION_PLAYS: IPageSection = {
  title: "Plays",
  SvgIcon: SvgBook,
  data: { countedListItems: FACTORY.PLAYS },
  count: FACTORY.PLAYS.length
};

const SECTION_THEATRES: IPageSection = {
  title: "Theatres",
  SvgIcon: SvgTheatre,
  data: { countedListItems: FACTORY.VENUES },
  count: FACTORY.VENUES.length
};

const SECTION_UP_NEXT_THEATRE: IPageSection = {
  SvgIcon: SvgNotepad,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  data: { theatreVisits: FACTORY.UP_NEXT }
};

const SECTIONS_YEARS: Array<IPageSection> = DATA.SPLIT_BY_YEAR.map(
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
