interface IMusician extends INameFavourite {}
interface IMusicVenue extends INameFavourite {}
interface IFestival extends INameFavourite {
  festival?: boolean;
}

interface IGigData {
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
