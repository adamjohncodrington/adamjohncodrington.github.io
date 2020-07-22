interface I_Favourite {
  favourite?: boolean;
}

interface I_NameFavourite extends I_Favourite {
  name: string;
  insignificant?: boolean;
}

interface I_Name {
  name: string;
  insignificant?: boolean;
}

interface IPastAndFutureCounts {
  futureCount: number;
  pastCount: number;
}

interface IDetailItem {
  text: string;
  isInFuture: boolean;
}

interface ICompany {
  company: Array<IFriend>;
}

interface IDate {
  date: Date;
}

interface IDates {
  dates: Array<Date>;
}

interface IEventCardCommon extends ICompany, I_Favourite {
  hideSubtitle?: boolean;
  photos?: Array<IPhoto>;
  video?: IVideo;

  hideCompany?: boolean;
  hideSecondaryBody?: boolean;
  hidePhotosIcon?: boolean;
  hideVideoIcon?: boolean;
}

interface IEventCard extends IEventCardCommon {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  countdownText?: string;
  note?: string;
}

interface IPhotoGrid {
  photos: Array<IPhoto>;
  columnCount: number;
  randomise?: boolean;
}

interface IPerson extends I_NameFavourite {
  initials: string;
}

interface IFriend extends IPerson {
  gigs?: boolean;
  travel?: boolean;
  theatre?: boolean;
}

interface IPage {
  title: string;
  path: string;
  SvgIcon: ISvgIcon;
  sections: Array<IPageSection>;
  count?: number;
  hide?: boolean;
  color?: ColorValue;
}

type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

interface IPhoto {
  date?: Date;
  title?: string;
  url: string;
}

interface I_OrientationQuality {
  orientation: "portrait" | "landscape";
  quality: "720p" | "1080p";
}

interface IVideo extends I_OrientationQuality {
  youtubeId: string;
}

interface ICountedListItemDetail extends I_Favourite {
  video?: IVideo;

  index?: number;
  mainText?: Array<string>;
  dateText: string;
  isInFuture: boolean;
}

interface IStar {
  star?: boolean;
}

interface ISecondaryText {
  secondaryText?: string;
}

interface IColumnCount {
  columnCount?: number;
}

interface ICountedListItem
  extends ISecondaryText,
    IPastAndFutureCounts,
    I_Favourite,
    IStar {
  text: string;
  doNotIncludeInList?: boolean;
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
  comingSoon?: boolean;
  countedListItems?: Array<ICountedListItem>;
  photoGrid?: { photos: Array<IPhoto>; columnCount: number };
  gigs?: Array<IGig>;
  recipes?: Array<IRecipe>;
  theatreVisits?: Array<ITheatreVisit>;
  trips?: Array<ITripLeg>;
  videos?: Array<IVideo>;
  vinyls?: Array<IVinylCards>;
}

interface IPageSection extends IPageSectionDisclosure {
  title: string;
  SvgIcon?: ISvgIcon;
  data: IPageSectionDataTypes;
  count?: number;
  starCount?: number;
  hide?: boolean;
}
