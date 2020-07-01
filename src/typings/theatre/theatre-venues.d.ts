interface ITheatreVenue extends INameFavourite {}

interface ITheatreVenuesLondon {
  ADELPHI: ITheatreVenue;
  APOLLO: ITheatreVenue;
  APOLLO_VICTORIA: ITheatreVenue;
  BRIDGE: ITheatreVenue;
  CAMBRIDGE: ITheatreVenue;
  DUKE_OF_YORKS: ITheatreVenue;
  GIELGUD: ITheatreVenue;
  HAROLD_PINTER: ITheatreVenue;
  LYRIC: ITheatreVenue;
  NATIONAL: ITheatreVenue;
  NOEL_COWARD: ITheatreVenue;
  OLD_RED_LION: ITheatreVenue;
  OLD_VIC: ITheatreVenue;
  PLAYHOUSE: ITheatreVenue;
  ROYAL_HAYMARKET: ITheatreVenue;
  TRAFALGAR_STUDIOS: ITheatreVenue;
  WATERLOO_EAST: ITheatreVenue;
  WHITE_BEAR: ITheatreVenue;
}

interface ITheatreVenuesStratford {
  ROYAL_SHAKESPEARE: ITheatreVenue;
}

interface ITheatreVenues
  extends ITheatreVenuesLondon,
    ITheatreVenuesStratford {}
