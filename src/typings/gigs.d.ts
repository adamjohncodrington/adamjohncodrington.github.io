interface IGig extends IDates, IEventCardCommon {
  headline: IMusician;
  support?: Array<IMusician>;
  venue: IMusicVenue;
  ticketType?: ITicketType;
}

interface IFestivalTitle extends I_NameFavourite {}

interface IFestival extends IDates, IEventCardCommon {
  title: IFestivalTitle;
  lineup: Array<Array<IMusician>> | "TBC";
  venue: IMusicVenue;
  ticketType?: ITicketType;
}

interface IMusicVenue extends I_NameFavourite {
  insignificant?: boolean;
}

interface IMusician extends I_NameFavourite {
  previousStageName?: { name: string; yearDeprecated: number };
  noLongerExists?: boolean;
}

type ITicketType = string;

interface IGigVideo extends IVideo {
  musician: IMusician;
}
