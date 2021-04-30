interface FestivalTitle extends I_Name, I__Insignificant {}

interface IGigOrFestival extends I__Favourite, I_Company {
  photos?: Photo[];
  venue: MusicVenue;
  ticketType?: TicketType;
  postponedWithNoNewDate?: boolean;
}

interface IFestivalWithoutVideo extends IGigOrFestival, I_Dates {
  title: FestivalTitle;
  lineup: Musician[][];
}
interface IFestivalWithVideo extends IFestivalWithoutVideo, I_Video {}
interface Festival extends IFestivalWithoutVideo, I__Video {}

interface IGigWithoutDate extends IGigOrFestival {
  headline: Musician;
  video?: GigVideo;
  support?: Musician[];
}

interface Gig extends IGigWithoutDate, I_Date {}

interface MusicEvent extends IGigOrFestival, I__Video {
  title: string;
  subtitle?: string;
  dates: IDate[];
  musicians: Musician[];

  gig?: Gig;
  festival?: Festival;
}

interface IMusicEventPostponed extends MusicEvent {
  dates: undefined;
}

interface MusicVenue extends I_Name, I__Favourite, I__Insignificant {}

interface GigVideo extends IVideo {
  date: Date;
  musician: Musician;
}
