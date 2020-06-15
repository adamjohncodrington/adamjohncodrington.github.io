interface IActor extends INameFavourite {}
interface ITheatreVenue extends INameFavourite {}
interface IPlay extends INameFavourite {}
interface ITheatreVenue extends INameFavourite {}

interface ITheatreData {
  play: IPlay;
  theatre: ITheatreVenue;
  company: Array<IFriend>;
  dates: Array<Date>;
  favourite?: boolean;
  cast?: Array<IActor>;
}
