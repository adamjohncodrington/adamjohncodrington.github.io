interface FestivalTitle extends I_Name, I__Insignificant {}

interface IGigOrFestival extends I__Favourite, I_Company {
  maybe?: boolean;
  photos?: IPhoto[];
  venue: MusicVenue;
  ticketType?: ITicketType;
}

interface IFestivalWithoutVideo extends IGigOrFestival, I_Dates {
  title: FestivalTitle;
  lineup: Musician[][];
}
interface IFestivalWithVideo extends IFestivalWithoutVideo, I_Video {}
interface Festival extends IFestivalWithoutVideo, I__Video {}

interface IGigWithoutDate extends IGigOrFestival {
  headline: Musician;
  video?: IGigVideo;
  support?: Musician[];
}

interface Gig extends IGigWithoutDate, I_Date {}

interface IMusicEvent extends IGigOrFestival, I__Video {
  title: string;
  subtitle?: string;
  dates: IDate[];
  musicians: Musician[];

  gig?: Gig;
  festival?: Festival;
}

interface IMusicEventPostponed extends IMusicEvent {
  dates: undefined;
}

interface MusicVenue extends I_Name, I__Favourite, I__Insignificant {}

interface Musician extends I_Name, I__Favourite, I__ExcludeFromBucketList {
  previousStageName?: { name: string; yearDeprecated: number };
  noLongerExists?: boolean;
}

interface IGigVideo extends IVideo {
  date: Date;
  musician: Musician;
}
