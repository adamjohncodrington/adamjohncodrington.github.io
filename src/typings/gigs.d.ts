interface IGig extends IDates, IEventCardCommon {
  headline?: IMusician;
  festival?: IMusician;
  lineup?: Array<Array<IMusician>>;
  support?: Array<IMusician>;
  venue: IMusicVenue;
  ticketType?: string;
}

interface IFestival extends INameFavourite {
  festival?: boolean;
}

interface IMusicVenue extends INameFavourite {
  insignificant?: boolean;
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

interface IMusician extends INameFavourite {
  previousStageName?: { name: string; yearDeprecated: number };
  noLongerExists?: boolean;
}

type ITicketType = string;

interface ITicketTypes {
  AXS_MOBILE_APP: ITicketType;
  DICE: ITicketType;
  GIGS_AND_TOURS_POSTAL: ITicketType;
  KABOODLE_ETICKET: ITicketType;
  SEE_TICKETS_POSTAL: ITicketType;
  SEE_TICKETS_PRINT_AT_HOME: ITicketType;
  TICKETWEB: ITicketType;
  TICKETMASTER_POSTAL: ITicketType;
  TICKETMASTER_ETICKET: ITicketType;
}
