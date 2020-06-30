interface IActor extends INameFavourite {}
type IActors = { [actor: string]: IActor };

interface IPlay extends INameFavourite {}
type IPlays = { [play: string]: IPlay };

interface ITheatreVenue extends INameFavourite {}
type ITheatreVenues = { [theatreVenue: string]: ITheatreVenue };

interface ITheatreCard {
  play: IPlay;
  theatre: ITheatreVenue;
  company: Array<IFriend>;
  date: Date;
  favourite?: boolean;
  cast?: Array<IActor>;
}
