type ITicketType = string;
type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

interface IPerson extends I_Name {
  initials: string;
}

interface IFriend extends IPerson {
  gigs?: boolean;
  travel?: boolean;
  theatre?: boolean;
}

interface IPage extends I__Hide {
  title: string;
  path: string;
  SvgIcon: ISvgIcon;
  sections: Array<IPageSection>;
  count?: number;
  color?: ColorValue;
}

//TODO: make date prop and title for alt purposes
interface IPhoto extends I__Hide, I__Date {
  title?: string;
  freeimagehostId: string;
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

interface IStartEndDate {
  start: Date;
  end: Date;
}

interface IFestivalTitle extends I_Name, I__Insignificant {}

interface IGigOrFestival extends I__Favourite, I_Company {
  venue: IMusicVenue;
  ticketType?: ITicketType;
}

interface IFestival extends IGigOrFestival, I_Dates {
  title: IFestivalTitle;
  video?: IFestivalVideo;
  lineup: Array<Array<IMusician>>;
}

interface IGig extends IGigOrFestival, I_Date {
  headline: IMusician;
  video?: IGigVideo;
  support?: Array<IMusician>;
}

interface IMusicEvent extends IGigOrFestival, I__Video {
  title: string;
  subtitle?: string;
  dates: Array<IDate>;
  musicians: Array<IMusician>;

  gig?: IGig;
  festival?: IFestival;
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

interface IFestivalVideo extends IVideo {
  festival: IFestivalTitle;
  dates: IStartEndDate;
}

interface ITravelVideo extends IVideo {
  dates: IStartEndDate;
  locations: Array<ILocation>;
}

interface IRecipeHeader extends IRecipe, IDisclosureHeader {}

type IPoleCategory =
  | "contemporary-class"
  | "contemporary-improv"
  | "exotic-class"
  | "exotic-improv"
  | "non-pole"
  | "showcase"
  | "tricks";

interface ISong {
  musician: IMusician;
  title: string;
  year: number;
}

interface IPoleRoutine extends I_Video {
  date: Date;
  song: ISong;
  category: IPoleCategory;
  studio: IPoleStudio;
  choreographer: IPoleInstructor;
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

interface ITheatreVisit extends I_Date, I__Favourite, I_Company {
  play: IPlay;
  theatre: ITheatre;
  cast?: Array<IActor>;
}

interface IAlbum {
  musician: IMusician;
  title: string;
  year: number;
  photo: IPhoto;
  appleMusicId: string;
}

interface ISymbol extends I_Background, I__Border, I__BorderRadius {
  svgFill?: string;
  content: {
    text?: string;
    icon?: "photo" | "video" | "pen";
  };
}

interface IRetailer extends I_Name {
  online: boolean;
  branch?: string;
}

interface IVinyl extends I_Colors, IAlbum, I_Signed {
  costExcDelivery: number;
  retailer: IRetailer;
  sides: 2 | 4;
  inches: 10 | 12;
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
