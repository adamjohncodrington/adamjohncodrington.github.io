interface IMusician extends INameFavourite {}
interface IMusicVenue extends INameFavourite {}
interface IFestival extends INameFavourite {
  festival?: boolean;
}

interface IGigData {
  headline?: IMusician;
  event?: IMusician;
  lineup?: Array<IMusician>;
  support?: Array<IMusician>;
  venue: IMusicVenue;
  dates: Array<Date>;
  company: Array<IFriend>;
  solo?: boolean;
  ticketType?: string;
  favourite?: boolean;
}
