interface IGig extends IDates, IEventCardCommon {
  headline?: IMusician;
  festival?: IMusician;
  lineup?: Array<IMusician>;
  support?: Array<IMusician>;
  venue: IMusicVenue;
  ticketType?: string;
}
