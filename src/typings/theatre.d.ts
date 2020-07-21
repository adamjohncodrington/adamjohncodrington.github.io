interface IActor extends INameFavourite {}

interface IPlay extends INameFavourite {}

interface ITheatre extends INameFavourite {}

interface ITheatreVisit extends IDate, IEventCardCommon {
  play: IPlay;
  theatre: ITheatre;
  cast?: Array<IActor>;
}
