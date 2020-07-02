const attractions: IAttractionsUK = {
  ALTON_TOWERS: { name: "Alton Towers", insignificant: true, themePark: true },
  BLACKPOOL_PLEASURE_BEACH: {
    name: "Blackpool Pleasure Beach",
    insignificant: true,
    themePark: true
  },
  WINTER_WONDERLAND: {
    name: "Winter Wonderland",
    insignificant: true,
    themePark: true
  },
  THORPE_PARK: { name: "Thorpe Park", insignificant: true, themePark: true },
  EDEN_PROJECT: { name: "Eden Project", insignificant: true },
  TATE_BRITAIN: { name: "Tate Britain", insignificant: true },
  LONDON_EYE: { name: "London Eye", insignificant: true },
  RICHMOND_PARK: { name: "Richmond Park", insignificant: true },
  SHERWOOD_FOREST: { name: "Sherwood Forest", insignificant: true },
  CALKE_ABBEY: { name: "Calke Abbey", insignificant: true },
  BATTERSEA_PARK: { name: "Battersea Park", insignificant: true },
  CRYSTAL_PALACE_PARK: { name: "Crystal Palace Park", insignificant: true },
  QUEEN_ELIZABETH_OAKESLYMPIC_PARK: {
    name: "Queen Elizabeth Olympic Park",
    insignificant: true
  },
  VICTORIA_PARK: { name: "Victoria Park", insignificant: true },
  GREENWICH_PARK: { name: "Greenwich Park", insignificant: true },
  KEW_GARDENS: { name: "Kew Gardens", insignificant: true },
  EPPING_FOREST: { name: "Epping Forest", insignificant: true },
  HAMPSTEAD_HEATH: { name: "Hampstead Heath", insignificant: true },
  V_A_MUSEUM: { name: "Victoria and Albert Museum", insignificant: true },
  SCIENCE_MUSEUM: { name: "Science Museum", insignificant: true },
  TATE_MODERN: { name: "Tate Modern", insignificant: true },
  NATURAL_HISTORY_MUSEUM: {
    name: "Natural History Museum London",
    insignificant: true
  },
  LAKE_DISTRICT: { name: "Lake District" },
  HADRIANS_WALL: { name: "Hadrian's Wall", insignificant: true }
};

const islands: IIslandsUK = {
  ANGLESEY: { name: "Anglesey", insignificant: true }
};

const cities: ICitiesUK = {
  BATH: { name: "Bath", insignificant: true },
  BLACKPOOL: { name: "Blackpool", insignificant: true },
  BRIGHTON: { name: "Brighton", insignificant: true },
  BRISTOL: { name: "Bristol", insignificant: true },
  BIRMINGHAM: { name: "Birmingham", insignificant: true },
  CAMBRIDGE: { name: "Cambridge", insignificant: true },
  COVENTRY: { name: "Coventry", insignificant: true },
  DERBY: { name: "Derby", insignificant: true },
  EDINBURGH: { name: "Edinburgh" },
  HULL: { name: "Hull", insignificant: true },
  LEEDS: { name: "Leeds", insignificant: true },
  LEICESTER: { name: "Leicester", insignificant: true },
  LINCOLN: { name: "Lincoln", insignificant: true },
  LONDON: { name: "London", capital: true, insignificant: true },
  LIVERPOOL: { name: "Liverpool", insignificant: true },
  MANCHESTER: { name: "Manchester", insignificant: true },
  NEWCASTLE: { name: "Newcastle", insignificant: true },
  NORWICH: { name: "Norwich", insignificant: true },
  NOTTINGHAM: { name: "Nottingham", insignificant: true },
  OXFORD: { name: "Oxford", insignificant: true },
  SHEFFIELD: { name: "Sheffield", insignificant: true },
  WOLVERHAMPTON: { name: "Wolverhampton", insignificant: true },
  YORK: { name: "York", insignificant: true }
};

const regions: IRegionsUK = { CORNWALL: { name: "Cornwall" } };

const towns: ITownsUK = {
  DONCASTER: { name: "Doncaster", insignificant: true },
  HARROGATE: { name: "Harrogate", insignificant: true },
  ILKLEY: { name: "Ilkley", insignificant: true },
  MILTON_KEYNES: { name: "Milton Keynes", insignificant: true },
  STRATFORD: { name: "Stratford-upon-Avon", insignificant: true },
  MANSFIELD: { name: "Mansfield", insignificant: true },
  NEWARK: { name: "Newark", insignificant: true },
  NEWQUAY: { name: "Newquay", insignificant: true },
  PADSTOW: { name: "Padstow", insignificant: true },
  TENBY: { name: "Tenby", insignificant: true },
  SCARBOROUGH: { name: "Scarborough", insignificant: true }
};

export const UK: IUK = {
  name: "United Kingdom",
  insignificant: true,
  attractions,
  islands,
  cities,
  regions,
  towns
};
