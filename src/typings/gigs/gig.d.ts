interface IGig extends IDates, IEventCardCommon {
  headline?: IMusician;
  festival?: IMusician;
  lineup?: Array<Array<IMusician>>;
  support?: Array<IMusician>;
  venue: IMusicVenue;
  ticketType?: string;
}
