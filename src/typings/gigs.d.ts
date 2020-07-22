interface IGig extends IDates, IEventCardCommon {
  headline?: IMusician;
  festival?: IMusician;
  lineup?: Array<Array<IMusician>>;
  support?: Array<IMusician>;
  venue: IMusicVenue;
  ticketType?: string;
}

interface IFestival extends I_NameFavourite {
  festival?: boolean;
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
