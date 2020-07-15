interface IPastAndFutureCounts {
  futureCount: number;
  pastCount: number;
}

interface IDetailItem {
  text: string;
  isInFuture: boolean;
}

interface ICountedListItemDetail {
  index?: number;
  mainText?: string;
  dateText: string;
  isInFuture: boolean;
}

interface ICountedListItem extends IPastAndFutureCounts, IFavourite {
  text: string;
  doNotIncludeInList?: boolean;
  star?: boolean;
  countInfoIrrelevant?: boolean;
  noLongerExists?: boolean;
  isLeaderboardItem?: boolean;
  details?: Array<ICountedListItemDetail>;
}

interface IPageSectionDisclosure extends IOnlyHeaderClicable {
  autoExpandAlways?: boolean;
  autoExpandIf2Columns?: boolean;
  staticAlways?: boolean;
  staticIf2Columns?: boolean;
}

interface IPageSectionDataTypes {
  countedListItems?: Array<ICountedListItem>;
  gigs?: Array<IGig>;
  recipes?: Array<IRecipe>;
  theatreVisits?: Array<ITheatreVisit>;
  trips?: Array<ITrip>;
  vinyls?: Array<IVinyl | undefined>;
}

interface IPageSection extends IPageSectionDisclosure {
  title: string;
  SvgIcon?: ISvgIcon;
  data: IPageSectionDataTypes;
  count?: number;
  starCount?: number;
  hide?: boolean;
}
