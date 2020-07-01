const LONDON: ITheatreVenuesLondon = {
  // A
  ADELPHI: { name: "Adelphi Theatre" },
  APOLLO: { name: "Apollo Theatre" },
  APOLLO_VICTORIA: { name: "Apollo Victoria Theatre" },
  // B
  BRIDGE: { name: "Bridge Theatre" },
  // C
  CAMBRIDGE: { name: "Cambridge Theatre" },
  // D
  DUKE_OF_YORKS: { name: "Duke of York's Theatre" },
  // G
  GIELGUD: { name: "Gielgud Theatre" },
  // H
  HAROLD_PINTER: { name: "Harold Pinter Theatre" },
  // L
  LYRIC: { name: "Lyric Hammersmith" },
  // N
  NATIONAL: { name: "National Theatre" },
  NOEL_COWARD: { name: "Noël Coward Theatre" },
  // O
  OLD_RED_LION: { name: "Old Red Lion Theatre" },
  OLD_VIC: { name: "The Old Vic" },
  // P
  PLAYHOUSE: { name: "Playhouse Theatre" },
  // R
  ROYAL_HAYMARKET: { name: "Theatre Royal Haymarket" },
  // T
  TRAFALGAR_STUDIOS: { name: "Trafalgar Studios" },
  // W
  WATERLOO_EAST: { name: "Waterloo East Theatre" },
  WHITE_BEAR: { name: "White Bear Theatre" }
};

const STRATFORD: ITheatreVenuesStratford = {
  ROYAL_SHAKESPEARE: { name: "Royal Shakespeare Theatre" }
};

export const THEATRE_VENUES: ITheatreVenues = {
  ...LONDON,
  ...STRATFORD
};
