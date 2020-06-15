interface INameFavourite {
  name: string;
  favourite?: boolean;
  insignificant?: boolean;
}
interface IFriend extends INameFavourite {
  initials: string;
  gigs?: boolean;
  travel?: boolean;
  theatre?: boolean;
}

type IInputData =
  | IActor
  | IFriend
  | IMusician
  | IPlay
  | IFestival
  | IMusicVenue
  | IAttraction
  | ITheatreVenue
  | ILocationItem;

interface ISectionData {}

interface IPageSectionType {
  title: string;
  id: string;
}

interface IPageSection {
  type: IPageSectionType;
  icon: IImageSrc;
  data: any;
  leaderboard?: true;
  showSectionLength?: boolean;
  listOfEventCards?: boolean;
  expandedAutomatically?: boolean;
  recipes?: Array<IRecipeCard>;
  onlySectionHeaderClickable?: boolean;
}

interface IPageData {
  pastCount?: number;
  futureCount?: number;
  sections: Array<IPageSection>;
}

interface IHomepageRoute {
  title: string;
  dest: string;
}

interface IRoute extends IHomepageRoute {
  icon: IImageSrc;
  pageData: IPageData;
}

type ITheme = any;

type IEventType = string;
