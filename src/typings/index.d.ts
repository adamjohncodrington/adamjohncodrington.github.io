type ITicketType = string;
type ISvgIcon = React.FC<React.SVGProps<SVGSVGElement>>;

interface IPhotoGrid {
  photos: Array<IPhoto>;
  columnCount: number;
  shuffle?: boolean;
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

interface IVideoCard extends I_Dates {
  title: string;
  video: IVideo;
  subtitle?: string;
}

interface IStartEndDate {
  start: Date;
  end: Date;
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

interface IMusicEvent extends IGigAndFestival {
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

interface IPoleRoutine {
  video: IVideo;
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
