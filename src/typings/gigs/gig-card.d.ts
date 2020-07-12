interface IGig {
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
