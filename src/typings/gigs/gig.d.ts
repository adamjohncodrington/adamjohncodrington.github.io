interface IGig extends IDates, IFavourite, ICompany, IVideo {
  headline?: IMusician;
  festival?: IMusician;
  lineup?: Array<IMusician>;
  support?: Array<IMusician>;
  venue: IMusicVenue;
  ticketType?: string;
}
