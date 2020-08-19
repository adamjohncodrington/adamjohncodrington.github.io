interface IFestivalTitle extends I_Name, I__Insignificant {}

interface IGigOrFestival extends I__Favourite, I_Company {
  photos?: IPhoto[];
  venue: IMusicVenue;
  ticketType?: ITicketType;
}

interface IFestivalWithoutVideo extends IGigOrFestival, I_Dates {
  title: IFestivalTitle;
  lineup: IMusician[][];
}
interface IFestivalWithVideo extends IFestivalWithoutVideo, I_Video {}
interface IFestival extends IFestivalWithoutVideo, I__Video {}

interface IGig extends IGigOrFestival, I_Date {
  headline: IMusician;
  video?: IGigVideo;
  support?: IMusician[];
}

interface IMusicEvent extends IGigOrFestival, I__Video {
  title: string;
  subtitle?: string;
  dates: IDate[];
  musicians: IMusician[];

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
