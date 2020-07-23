type ITicketType = string;
type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

interface I__Favourite {
  favourite?: boolean;
}

interface I_Name {
  name: string;
}

interface I__Insignificant {
  insignificant?: boolean;
}

interface I_PastFutureCounts {
  futureCount: number;
  pastCount: number;
}

interface IDetailItem {
  text: string;
  isInFuture: boolean;
}

interface I_Company {
  company: Array<IFriend>;
}

interface I_Date {
  date: Date;
}

interface I_Dates {
  dates: Array<Date>;
}

interface IEventCardAll extends I_Company, I__Favourite {
  hideSubtitle?: boolean;
  photos?: Array<IPhoto>;
  video?: IVideo;

  hideCompany?: boolean;
  hideBody?: boolean;
  hideSecondaryBody?: boolean;
  hidePhotosIcon?: boolean;
  hideVideoIcon?: boolean;
}

interface IEventCard extends IEventCardAll {
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

interface IPerson extends I_Name {
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
  color?: ColorValue;
}

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

interface ICountedListItemDetail extends I__Favourite {
  video?: IVideo;
  index?: number;
  mainText?: Array<string>;
  dateText: string;
  isInFuture: boolean;
}

interface I__Star {
  star?: boolean;
}

interface I__SecondaryText {
  secondaryText?: string;
}

interface I__ColumnCount {
  columnCount?: number;
}

interface ICountedListItem
  extends I__SecondaryText,
    I_PastFutureCounts,
    I__Favourite,
    I__Star {
  text: string;
  doNotIncludeInList?: boolean;
  countInfoIrrelevant?: boolean;
  noLongerExists?: boolean;
  isLeaderboardItem?: boolean;
  details?: Array<ICountedListItemDetail>;
}

interface IStartEndDate {
  start: Date;
  end: Date;
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

interface IFestivalTitle extends I_Name {}

interface IGigAndFestival extends IEventCardAll {
  venue: IMusicVenue;
  ticketType?: ITicketType;
}

interface IFestival extends IGigAndFestival, I_Dates {
  title: IFestivalTitle;
  lineup: Array<Array<IMusician>>;
}

interface IGig extends IGigAndFestival, I_Dates {
  headline: IMusician;
  support?: Array<IMusician>;
}

interface IGigCard extends IGigAndFestival {
  title: string;
  subtitle?: string;
  dates: Array<IDate>;
  musicians: Array<IMusician>;
}

interface IMusicVenue extends I_Name, I__Favourite, I__Insignificant {}

interface IMusician extends I_Name, I__Favourite {
  previousStageName?: { name: string; yearDeprecated: number };
  noLongerExists?: boolean;
}

interface IGigVideo extends IVideo {
  date: Date;
  musician: IMusician;
}

interface IPoleStudio {
  name: string;
  location?: string;
}

interface IPoleInstructor extends IPerson {
  stageName?: string;
}

interface IActor extends I_Name, I__Favourite {}

interface IPlay extends I_Name, I__Favourite {}

interface ITheatre extends I_Name, I__Favourite {}

interface ITheatreVisit extends I_Date, IEventCardAll {
  play: IPlay;
  theatre: ITheatre;
  cast?: Array<IActor>;
}

interface IVinyl {
  musician: IMusician;
  title: string;
  year: number;
  artwork: IPhoto;
  appleMusicId: string;
  signed?: true;
  notes?: string;
  purchased?: boolean;
}

interface IVinylCard extends IVinyl {
  hideYear?: boolean;
}

interface ILocation extends I_Name, I__Favourite, I__Insignificant {
  island?: boolean;
  insignificant?: boolean;
  englishName?: string;
  foreignName?: string;
  excludeFromBucketList?: boolean;
}
