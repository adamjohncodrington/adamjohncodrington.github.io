type ITicketType = string;
type ITicketTypes = { [ticketType: string]: ITicketType };

interface IMusician extends INameFavourite {
  passedAway?: boolean;
}
type IMusicians = { [musician: string]: IMusician };

interface IMusicVenue extends INameFavourite {
  insignificant?: boolean;
}
type IMusicVenues = { [musicVenue: string]: IMusicVenue };

interface IFestival extends INameFavourite {
  festival?: boolean;
}
type IFestivals = { [festival: string]: IFestival };

interface IGigCard {
  headline?: IMusician;
  festival?: IMusician;
  lineup?: Array<IMusician>;
  support?: Array<IMusician>;
  venue: IMusicVenue;
  dates: Array<Date>;
  company: Array<IFriend>;
  ticketType?: string;
  favourite?: boolean;
}
