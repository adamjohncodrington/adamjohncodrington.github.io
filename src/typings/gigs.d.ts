interface IFestivalTitle extends I_Name, I__Insignificant {}

interface IGigOrFestival extends I__Favourite, I_Company {
  photos?: Array<IPhoto>;
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

interface IFestivalVideo extends IVideo, I_StartEndDates {
  dates: IStartEndDate;
}
