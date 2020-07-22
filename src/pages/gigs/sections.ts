import { PAGE_SECTION } from "@constants";
import { SVG } from "resources";

import { FACTORY } from "./factory";

const BUCKET_LIST: IPageSection = {
  title: PAGE_SECTION.TITLES.BUCKET_LIST,
  SvgIcon: SVG.STARS,
  data: { countedListItems: FACTORY.BUCKET_LIST },
  count: FACTORY.BUCKET_LIST.length
};

// const FESTIVALS: IPageSection = {
//   SvgIcon: SVG.PEACE_SIGN,
//   title: PAGE_SECTION.TITLES.FESTIVALS,
//   data: { countedListItems: FACTORY.FESTIVALS }
// };

const ARTISTS: IPageSection = {
  title: PAGE_SECTION.TITLES.ARTISTS,
  SvgIcon: SVG.ARTIST,
  data: { countedListItems: FACTORY.MUSICIANS },
  count: FACTORY.MUSICIANS.length
};

const FRIENDS_GIGS: IPageSection = {
  SvgIcon: SVG.PEOPLE,
  title: PAGE_SECTION.TITLES.FRIENDS,
  data: { countedListItems: FACTORY.FRIENDS }
};

const UP_NEXT_GIGS: IPageSection = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION.TITLES.UP_NEXT,
  data: { gigs: FACTORY.UP_NEXT },
  count: FACTORY.UP_NEXT.length
};

const VENUES_GIGS: IPageSection = {
  SvgIcon: SVG.STADIUM,
  title: PAGE_SECTION.TITLES.VENUES,
  data: { countedListItems: FACTORY.VENUES },
  count: FACTORY.VENUES.length
};

const VIDEOS_GIGS: IPageSection = {
  SvgIcon: SVG.VIDEO_CAMERA,
  title: PAGE_SECTION.TITLES.VIDEOS,
  data: { gigs: FACTORY.VIDEOS },
  count: FACTORY.VIDEOS.length
};

const SECTIONS_YEARS: Array<IPageSection> = FACTORY.SPLIT_BY_YEAR.map(
  (year: Array<IGig>): IPageSection => ({
    title: year[0].dates[0].getFullYear().toString(),
    count: year.length,
    data: { gigs: year }
  })
);

export const sections: Array<IPageSection> = [
  ARTISTS,
  BUCKET_LIST,
  // FESTIVALS,
  FRIENDS_GIGS,
  UP_NEXT_GIGS,
  VENUES_GIGS,
  VIDEOS_GIGS,
  ...SECTIONS_YEARS
];
