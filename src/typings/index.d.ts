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

interface ICardAll extends I_Company, I__Favourite {
  hideSubtitle?: boolean;
  photos?: Array<IPhoto>;
  video?: IVideo;

  hideCompanySymbols?: boolean;
  hideBody?: boolean;
  hideSecondaryBody?: boolean;
  hideFavouriteIcon?: boolean;
  hidePhotosIcon?: boolean;
  hideVideoIcon?: boolean;
}

interface ICard extends ICardAll {
  title: string;
  subtitle?: string;
  body?: string;
  secondaryBody?: string;
  countdownText?: string;
  note?: string;
  headerPhoto?: IPhotoLink;
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

interface IPhotoLink extends IPhoto {
  href: string;
}

interface I_OrientationQuality {
  orientation: "portrait" | "landscape";
  quality: "720p" | "1080p";
}

interface IVideo extends I_OrientationQuality {
  youtubeId: string;
}

interface IVideoCard extends IVideo, I_Dates {
  title: string;
  subtitle?: string;
}

interface IVideoCards {
  videoCards: Array<IVideoCard>;
}

interface IBasicListItemDetail extends I__Favourite {
  video?: IVideo;
  mainText?: Array<string>;
  dates: Array<Date>;
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

interface IBasicListItem
  extends I__SecondaryText,
    I_PastFutureCounts,
    I__Favourite,
    I__Star {
  text: string;
  doNotIncludeInList?: boolean;
  countInfoIrrelevant?: boolean;
  noLongerExists?: boolean;
  isLeaderboardItem?: boolean;
  details?: Array<IBasicListItemDetail>;
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
  basicListItems?: Array<IBasicListItem>;
  photoGrid?: { photos: Array<IPhoto>; columnCount: number };
  gigsAndFestivals?: Array<IGigOrFestival>;
  recipes?: Array<IRecipe>;
  theatreVisits?: Array<ITheatreVisit>;
  trips?: Array<ITripLeg>;
  videoCards?: Array<IVideoCard>;
  vinylCards?: IVinylCards;
}

interface IPageSectionDataTypesExtended extends IPageSectionDataTypes {
  festivals?: Array<IFestival>;
  gigs?: Array<IGig>;
}

interface IPageSection extends IPageSectionDisclosure {
  title: string;
  SvgIcon?: ISvgIcon;
  data: IPageSectionDataTypes;
  count?: number;
  starCount?: number;
  hide?: boolean;
}

interface IFestivalTitle extends I_Name, I__Insignificant {}

interface IGigAndFestival extends ICardAll {
  venue: IMusicVenue;
  ticketType?: ITicketType;
}

interface IFestival extends IGigAndFestival, I_Dates {
  title: IFestivalTitle;
  lineup: Array<Array<IMusician>>;
}

interface IGig extends IGigAndFestival, I_Date {
  headline: IMusician;
  support?: Array<IMusician>;
}

interface IGigOrFestival extends IGigAndFestival {
  gig?: IGig;
  festival?: IFestival;
  title: string;
  subtitle?: string;
  dates: Array<IDate>;
  musicians: Array<IMusician>;
}

interface IMusicVenue extends I_Name, I__Favourite, I__Insignificant {}

interface IMusician extends I_Name, I__Favourite, I__ExcludeFromBucketList {
  previousStageName?: { name: string; yearDeprecated: number };
  noLongerExists?: boolean;
}

interface IGigVideo extends IVideo {
  date: Date;
  musician: IMusician;
}

interface ITravelVideo extends IVideo {
  dates: IStartEndDate;
  locations: Array<ILocation>;
}

interface I_Bold {
  bold: boolean;
}

interface ICardHeader extends ICard, IDisclosureHeader {}

type IPoleCategory =
  | "contemporary"
  | "exotic"
  | "improv"
  | "non-pole"
  | "showcase"
  | "tricks";

interface ISong {
  musician: IMusician;
  title: string;
  year: number;
}

interface IPoleVideo extends IVideo {
  date: Date;
  song: ISong;
  category: IPoleCategory;
  studio: IPoleStudio;
  instructor: IPoleInstructor | "none";
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

interface ITheatreVisit extends I_Date, ICardAll {
  play: IPlay;
  theatre: ITheatre;
  cast?: Array<IActor>;
}

interface IAlbum {
  musician: IMusician;
  title: string;
  year: number;
  artwork: IPhoto;
  appleMusicId: string;
}

interface IVinyl extends IAlbum {
  signed: boolean;
  color:
    | "black"
    | "photo"
    | "clear"
    | "pink"
    | "black-and-clear"
    | "yellow"
    | "red"
    | "teal"
    | "blue-mist";
  sides: 2 | 4;
  inches: 10 | 12;
}

interface IVinylCard extends IAlbum {
  hideYear?: boolean;
}

interface IVinylCards {
  vinyls: Array<IVinylCard>;
  shuffle: boolean;
}

interface I__ExcludeFromBucketList {
  excludeFromBucketList?: boolean;
}

interface ILocation
  extends I_Name,
    I__Favourite,
    I__Insignificant,
    I__ExcludeFromBucketList {
  island?: boolean;
  insignificant?: boolean;
  englishName?: string;
  shortName?: string;
  foreignName?: string;
}
