import { PAGE_SECTION_TITLES } from "@constants";
import { GIGS as DATA } from "data-ui";
import { SVG } from "resources";

const BUCKET_LIST: PageSectionProps = {
  title: PAGE_SECTION_TITLES.BUCKET_LIST,
  SvgIcon: SVG.STARS,
  data: { miniCards: DATA.BUCKET_LIST }
};

const FESTIVALS: PageSectionProps = {
  SvgIcon: SVG.PEACE_SIGN,
  title: PAGE_SECTION_TITLES.FESTIVALS,
  data: { miniCards: DATA.FESTIVALS }
};

const MUSICIANS: PageSectionProps = {
  title: PAGE_SECTION_TITLES.MUSICIANS,
  SvgIcon: SVG.ARTIST,
  data: { miniCards: DATA.MUSICIANS },
  count: DATA.MUSICIANS.length
};

const WITH: PageSectionProps = {
  SvgIcon: SVG.PEOPLE,
  title: PAGE_SECTION_TITLES.WITH,
  data: { miniCards: DATA.WITH }
};

const SOLO: PageSectionProps = {
  SvgIcon: SVG.SOLO,
  title: PAGE_SECTION_TITLES.SOLO,
  data: { cards: DATA.SOLO },
  hide: true
};

const FAVOURITES: PageSectionProps = {
  SvgIcon: SVG.HEART,
  shuffle: true,
  title: PAGE_SECTION_TITLES.FAVOURITES,
  data: { cards: DATA.FAVOURITES },
  hide: true
};

const PHOTOS: PageSectionProps = {
  SvgIcon: SVG.CAMERA,
  title: PAGE_SECTION_TITLES.PHOTOS,
  data: { photoGrid: { photos: DATA.PHOTOS } }
};

const UP_NEXT: PageSectionProps = {
  SvgIcon: SVG.NOTEPAD,
  title: PAGE_SECTION_TITLES.UP_NEXT,
  data: { cards: DATA.UP_NEXT },
  count: DATA.UP_NEXT.length
};

const MAYBE: PageSectionProps = {
  SvgIcon: SVG.QUESTION_MARK,
  title: PAGE_SECTION_TITLES.MAYBE,
  data: { cards: DATA.MAYBE }
};

const POSTPONED: PageSectionProps = {
  title: PAGE_SECTION_TITLES.POSTPONED,
  data: { cards: DATA.POSTPONED },
  count: DATA.POSTPONED.length
};

const VENUES: PageSectionProps = {
  SvgIcon: SVG.STADIUM,
  title: PAGE_SECTION_TITLES.VENUES,
  data: { miniCards: DATA.VENUES },
  count: DATA.VENUES.length
};

const VIDEOS: PageSectionProps = {
  SvgIcon: SVG.VIDEO_CAMERA,
  title: PAGE_SECTION_TITLES.VIDEOS,
  data: { miniCards: DATA.VIDEOS },
  count: DATA.VIDEOS.length
};

const YEARS: PageSectionProps[] = DATA.YEARS.map(
  (year: ICard[]): PageSectionProps => ({
    title: year[0].year.toString(),
    count: year.length,
    data: { cards: year }
  })
);

export const GIGS: PageSectionProps[] = [
  MUSICIANS,
  BUCKET_LIST,
  FAVOURITES,
  FESTIVALS,
  WITH,
  PHOTOS,
  MAYBE,
  POSTPONED,
  SOLO,
  UP_NEXT,
  VENUES,
  VIDEOS
]
  .sort((a: PageSectionProps, b: PageSectionProps): number =>
    a.title.localeCompare(b.title)
  )
  .concat(YEARS);
