const KEY_WEST = { name: "Key West" };

export const LOCATIONS: IAllCountries = {
  // A
  ARGENTINA: {
    name: "Argentina",
    excludeFromBucketList: true,
    cities: { BUENOS_AIRES: { name: "Buenos Aires", capital: true } }
  },
  AUSTRALIA: { name: "Australia" },
  AUSTRIA: {
    name: "Austria",
    excludeFromBucketList: true,
    cities: { VIENNA: { name: "Vienna", capital: true } }
  },
  // B
  BARBADOS: {
    name: "Barbados",
    island: true,
    attractions: { HARRISONS_CAVE: { name: "Harrison's Cave" } }
  },
  BELGIUM: {
    name: "Belgium",
    cities: { BRUGES: { name: "Bruges" }, YPRES: { name: "Ypres" } },
    attractions: {
      BATTLEFIELDS: { name: "Battlefields" },
      BELFRY_OF_BRUGES: { name: "Belfry of Bruges" }
    }
  },
  BELIZE: {
    name: "Belize",
    attractions: {
      BARRIER_REEF: { name: "Belize Barrier Reef", highlight: true }
    },
    cities: {
      BELIZE_CITY: {
        name: "Belize City",
        capital: true,
        excludeFromBucketList: true
      }
    },
    islands: {
      AMBERGRIS_CAYE: { name: "Ambergris Caye" },
      CAYE_CAULKER: { name: "Caye Caulker" }
    }
  },
  BOLIVIA: { name: "Bolivia" },
  BRAZIL: {
    name: "Brazil",
    cities: { RIO_DE_JANEIRO: { name: "Rio de Janeiro" } },
    attractions: {
      MODERN_ART_MUSEUM_RIO: {
        name: "Modern Art Museum Rio",
        foreignName: "Museu de Arte Moderna do Rio de Janeiro"
      },
      COPACABANA_BEACH: { name: "Copacabana Beach" },
      ROCINHA_FAVELA: { name: "Rocinha Favela" },
      CHRIST_THE_REDEEMER: { name: "Cristo Redentor" },
      SELARON_STEPS: {
        name: "Selarón Steps",
        foreignName: "Escadaria Selarón"
      },
      HANG_GLIDING: { name: "São Conrado Hang-Gliding", highlight: true },
      PICO_DO_PAPAGAIO: {
        name: "Pico do Papagaio",
        englishName: "Parrot's Peak",
        foreignName: "Pico do Papagaio",
        highlight: true
      }
    },
    islands: { ILHA_GRANDE: { name: "Ilha Grande" } }
  },
  // C
  CANADA: {
    name: "Canada",
    cities: { NIAGARA_FALLS: { name: "Niagara Falls" } },
    attractions: { NIAGARA_FALLS: { name: "Niagara Falls", highlight: true } }
  },
  COLOMBIA: { name: "Colombia" },
  COSTA_RICA: {
    name: "Costa Rica",
    attractions: {
      CORCOVADO: { name: "Corcovado National Park", highlight: true },
      JAGUAR_RESCUE_CENTER: { name: "Jaguar Rescue Center" }
    },
    cities: {
      SAN_JOSE: { name: "San Jose", capital: true, excludeFromBucketList: true }
    },
    towns: {
      MONTEVERDE: { name: "Monteverde" },
      PUERTO_VIEJO: { name: "Puerto Viejo" }
    }
  },
  CROATIA: {
    name: "Croatia",
    cities: { DUBROVNIK: { name: "Dubrovnik" } },
    attractions: {
      DUBROVNIK_CABLE_CAR: { name: "Dubrovnik Cable Car" },
      DUBROVNIK_WALLS: { name: "Walls of Dubrovnik", highlight: true }
    }
  },
  CUBA: {
    name: "Cuba",
    island: true,
    cities: { HAVANA: { name: "Havana", capital: true } },
    towns: { VARADERO: { name: "Varadero" } }
  },
  CYPRUS: {
    name: "Cyprus",
    cities: { PAPHOS: { name: "Paphos" } },
    attractions: {
      PAPHOS_ARCHAEOLOGICAL_PARK: { name: "Paphos Archaeological Park" }
    }
  },
  CZECH_REPUBLIC: {
    name: "Czech Republic",
    cities: { PRAGUE: { name: "Prague", capital: true } },
    attractions: {
      JOHN_LENNON_WALL: { name: "John Lennon Wall" },
      VYSEHRAD: { name: "Vyšehrad" }
    }
  },
  // D
  DENMARK: {
    name: "Denmark",
    cities: { COPENHAGEN: { name: "Copenhagen" } },
    attractions: {
      LOUISIANA_ART_MUSEUM: { name: "Louisiana Museum of Modern Art" }
    }
  },
  // E
  ECUADOR: {
    name: "Ecuador",
    cities: {
      BANOS: { name: "Baños" },
      GUAYAQUIL: { name: "Guayaquil" },
      OTAVALO: { name: "Otavalo" },
      QUITO: { name: "Quito", capital: true }
    },
    attractions: {
      EQUATOR_MONUMENT: {
        name: "Equator Monument",
        foreignName: "Ciudad Mitad del Mundo"
      },
      OTAVALO_MARKET: { name: "Otavalo Market" },
      TORTOISE_PARK: {
        name: "Giant Tortoise Reserve",
        foreignName: "Reserva el Chato"
      },
      PAILON_DEL_DIABLO: { name: "Pailon del Diablo", highlight: true },
      COTOPAXI: { name: "Cotopaxi Volcano", highlight: true }
    },
    islands: { GALAPAGOS: { name: "Galápagos Islands" } }
  },
  EGYPT: {
    name: "Egypt",
    cities: {
      CAIRO: { name: "Cairo", capital: true },
      SHARM_EL_SHEIKH: { name: "Sharm El Sheikh" }
    },
    attractions: {
      GIZA_PYRAMIDS_SPHINX: {
        name: "Giza Pyramids & Great Sphinx",
        highlight: true
      }
    }
  },
  // F
  FRANCE: {
    name: "France",
    cities: {
      MONACO: { name: "Monaco" },
      NICE: { name: "Nice" },
      PARIS: { name: "Paris", capital: true }
    },
    attractions: {
      SACRE_COEUR: { name: "Sacré-Cœur" },
      LOUVRE: { name: "Louvre" },
      ARC_DE_TRIOMPHE: { name: "Arc de Triomphe" },
      AIR_SPACE_MUSEUM: { name: "National Air and Space Museum of France" },
      SCIENCE_MUSEUM: { name: "Paris Science Museum" },
      EIFFEL_TOWER: { name: "Eiffel Tower" },
      NOTRE_DAME: { name: "Notre-Dame de Paris" },
      DISNEYLAND_PARIS: { name: "Disneyland Paris", themePark: true },
      PARC_ASTERIX: { name: "Parc Astérix", themePark: true }
    }
  },
  // G
  GERMANY: {
    name: "Germany",
    cities: { BERLIN: { name: "Berlin", capital: true } },
    attractions: {
      REICHSTAG: { name: "Reichstag Building" },
      HOLOCAUST_MEMORIAL: { name: "Holocaust Memorial" },
      BRANDENBURG_GATE: { name: "Brandenburg Gate" },
      BERLIN_WALL: { name: "Berlin Wall" },
      EAST_SIDE_GALLERY: { name: "East Side Gallery" }
    }
  },
  GREECE: {
    name: "Greece",
    islands: { KOS: { name: "Kos" } },
    regions: { HALKIDIKI: { name: "Halkidiki" } }
  },
  // H
  HUNGARY: {
    name: "Hungary",
    cities: { BUDAPEST: { name: "Budapest", capital: true } },
    attractions: {
      PARLIAMENT_BUILDING: { name: "Hungarian Parliament Building" },
      THERMAL_BATH_SZECHENYI: { name: "Széchenyi Thermal Bath" },
      CITADELLA: { name: "Citadella" }
    }
  },
  // I
  INDONESIA: { name: "Indonesia" },
  IRELAND: {
    name: "Ireland",
    attractions: {
      ST_STEPHENS_GREEN_PARK: { name: "St. Stephen's Green Park" },
      DUBLIN_PRISON: { name: "Kilmainham Gaol" },
      GUINNESS_STOREHOUSE: { name: "Guinness Storehouse" }
    },
    cities: { DUBLIN: { name: "Dublin", capital: true } }
  },
  ITALY: {
    name: "Italy",
    regions: {
      SICILY: { name: "Sicily" }
    },
    cities: {
      FLORENCE: { name: "Florence" },
      NAPLES: { name: "Naples" },
      MILAN: { name: "Milan" },
      ROME: { name: "Rome", capital: true },
      VATICAN: { name: "Vatican City" },
      CATANIA: { name: "Catania" },
      VENICE: { name: "Venice" },
      POMPEII: { name: "Pompeii" }
    },
    towns: { JESOLO: { name: "Jesolo" }, SORRENTO: { name: "Sorrento" } },
    attractions: {
      ARCO_DELLA_PACE: { name: "Arco della Pace" },
      SEMPIONE_PARK: { name: "Sempione Park" },
      MILAN_MALL: { name: "Galleria Vittorio Emanuele II" },
      COLOSSEUM: { name: "Colosseum" },
      TREVI_FOUNTAIN: { name: "Trevi Fountain" },
      VESUVIUS: { name: "Mount Vesuvius" },
      ETNA: { name: "Mount Etna" }
    }
  },
  // J
  JAPAN: { name: "Japan" },
  // L
  LAOS: {
    name: "Laos",
    cities: {
      LUANG_PRABANG: { name: "Luang Prabang" },
      VIENTIANE: { name: "Vientiane", capital: true }
    },
    attractions: {
      KUANG_SI_FALLS: { name: "Kuang Si Falls", highlight: true },
      ELEPHANT_VILLAGE: { name: "Elephant Village" },
      BUDDHA_PARK: { name: "Buddha Park" }
    }
  },
  // M
  MEXICO: { name: "Mexico" },
  // N
  NETHERLANDS: {
    name: "Netherlands",
    cities: {
      AMSTERDAM: { name: "Amsterdam", capital: true },
      GRONINGEN: { name: "Groningen" }
    },
    attractions: {
      STEDELIJK_MUSEUM: { name: "Stedelijk Museum Amsterdam" },
      SEX_MUSEUM: { name: "Venustempel Sex Museum" },
      GRONINGEN_MUSEUM: { name: "Groninger Museum" }
    }
  },
  NEW_ZEALAND: { name: "New Zealand" },
  NORWAY: {
    name: "Norway",
    cities: { OSLO: { name: "Oslo", capital: true } },
    islands: { HOVEDOYA: { name: "Hovedøya" } }
  },
  // P
  PERU: {
    name: "Peru",
    cities: {
      AREQUIPA: { name: "Arequipa" },
      CUSCO: { name: "Cusco" },
      LIMA: { name: "Lima", capital: true },
      HUARAZ: { name: "Huaraz" }
    },
    attractions: {
      COLCA_CANYON: { name: "Colca Canyon" },
      LAGUNA_69: { name: "Laguna 69", highlight: true },
      JUNGLE_ZIPLINE: {
        name: "Santa Teresa Vertikal Zipline",
        highlight: true
      },
      MACHU_PICCHU: { name: "Machu Picchu", highlight: true },
      HUACACHINA: { name: "Huacachina Sand Dunes", highlight: true },
      HUASCARAN_PARK: { name: "Huascaran National Park" },
      MANU: { name: "Manú National Park" },
      RAINBOW_MOUNTAIN: { name: "Rainbow Mountain", highlight: true }
    },
    towns: { MANCORA: { name: "Mancora" }, PARACAS: { name: "Paracas" } },
    villages: { HUACACHINA: { name: "Huacachina" } }
  },
  PHILLIPINES: { name: "Phillipines" },
  POLAND: {
    name: "Poland",
    cities: { KRAKOW: { name: "Kraków" } },
    attractions: {
      AUSCHWITZ_BIRKENAU: { name: "Auschwitz-Birkenau", highlight: true },
      WIELICZKA_SALT_MINE: { name: "Wieliczka Salt Mine" }
    },
    towns: { WIELICZKA: { name: "Wieliczka" } }
  },
  PORTUGAL: {
    name: "Portugal",
    cities: {
      LISBON: { name: "Lisbon", capital: true },
      PORTIMAO: { name: "Portimão" },
      PORTO: { name: "Porto" }
    },
    attractions: {
      ZOOMARINE: { name: "Zoomarine Algarve" },
      OCENARIO_DE_LISBOA: {
        name: "Lisbon Oceanarium",
        foreignName: "Oceanário de Lisboa"
      }
    },
    towns: {
      FERRAGUDO: { name: "Ferragudo" },
      TAVIRA: { name: "Tavira" },
      VILAMOURA: { name: "Vilamoura" }
    }
  },
  // S
  SPAIN: {
    name: "Spain",
    cities: {
      BARCELONA: { name: "Barcelona" },
      MADRID: { name: "Madrid", capital: true },
      VALENCIA: { name: "Valencia" }
    },
    attractions: {
      CIUTADELLA_PARK: { name: "Ciutadella Park" },
      PARK_GUELL: { name: "Park Güell", highlight: true },
      PARQUE_WARNER: { name: "Parque Warner Madrid", themePark: true },
      SIAM_PARK: { name: "Siam Park", themePark: true },
      PORTAVENTURA: { name: "PortAventura", themePark: true }
    },
    islands: {
      TENERIFE: { name: "Tenerife" },
      IBIZA: { name: "Ibiza" },
      MINORCA: { name: "Minorca" },
      LANZAROTE: { name: "Lanzarote" }
    }
  },
  SWEDEN: {
    name: "Sweden",
    excludeFromBucketList: true,
    cities: { STOCKHOLM: { name: "Stockholm", capital: true } }
  },
  // T
  TANZANIA: { name: "Tanzania" },
  THAILAND: {
    name: "Thailand",
    cities: {
      BANGKOK: { name: "Bangkok", capital: true },
      CHIANG_MAI: { name: "Chiang Mai" },
      CHIANG_RAI: { name: "Chiang Rai" }
    },
    islands: {
      KOH_PHI_PHI: { name: "Koh Phi Phi" },
      KOH_PHANGAN: { name: "Koh Phangan" },
      KOH_TAO: { name: "Koh Tao" }
    },
    attractions: {
      WHITE_TEMPLE: { name: "Wat Rong Khun" },
      MAYA_BAY: { name: "Maya Bay" },
      PAI_CANYON: { name: "Pai Canyon", highlight: true },
      TIGER_KINGDOM: { name: "Tiger Kingdom" },
      GRAND_PALACE: { name: "Grand Palace Bangkok", highlight: true },
      SKY_BAR: { name: "Sky Bar Bangkok" }
    },
    towns: { KRABI: { name: "Krabi" }, PAI: { name: "Pai" } }
  },
  // U
  UGANDA: {
    name: "Uganda",
    cities: { JINJA: { name: "Jinja" } },
    attractions: {
      RAFTING_NALUBALE: {
        name: "River Nile Nalubale Rafting",
        highlight: true
      },
      NILE_SOURCE: { name: "Source of the Nile" }
    }
  },
  UAE: {
    name: "United Arab Emirates",
    cities: { DUBAI: { name: "Dubai" } },
    attractions: {
      AQUAVENTURE: { name: "Aquaventure Waterpark", themePark: true },
      BURJ_KHALIFA: { name: "Burj Khalifa" }
    }
  },
  UK: {
    name: "United Kingdom",
    insignificant: true,
    attractions: {
      ALTON_TOWERS: {
        name: "Alton Towers",
        insignificant: true,
        themePark: true
      },
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
      THORPE_PARK: {
        name: "Thorpe Park",
        insignificant: true,
        themePark: true
      },
      EDEN_PROJECT: { name: "Eden Project", insignificant: true },
      TATE_BRITAIN: { name: "Tate Britain", insignificant: true },
      LONDON_EYE: { name: "London Eye", insignificant: true },
      RICHMOND_PARK: { name: "Richmond Park", insignificant: true },
      SHERWOOD_FOREST: { name: "Sherwood Forest", insignificant: true },
      CALKE_ABBEY: { name: "Calke Abbey", insignificant: true },
      BATTERSEA_PARK: { name: "Battersea Park", insignificant: true },
      CRYSTAL_PALACE_PARK: { name: "Crystal Palace Park", insignificant: true },
      QUEEN_ELIZABETH_OLYMPIC_PARK: {
        name: "Queen Elizabeth Olympic Park",
        insignificant: true
      },
      VICTORIA_PARK: { name: "Victoria Park", insignificant: true },
      GREENWICH_PARK: { name: "Greenwich Park", insignificant: true },
      KEW_GARDENS: { name: "Kew Gardens", insignificant: true },
      EPPING_FOREST: { name: "Epping Forest", insignificant: true },
      HAMPSTEAD_HEATH: { name: "Hampstead Heath", insignificant: true },
      V_A_MUSEUM: {
        name: "Victoria and Albert Museum",
        insignificant: true
      },
      SCIENCE_MUSEUM: { name: "Science Museum", insignificant: true },
      TATE_MODERN: { name: "Tate Modern", insignificant: true },
      NATURAL_HISTORY_MUSEUM: {
        name: "Natural History Museum London",
        insignificant: true
      },
      LAKE_DISTRICT: { name: "Lake District" },
      HADRIANS_WALL: { name: "Hadrian's Wall", insignificant: true }
    },
    islands: {
      ANGLESEY: { name: "Anglesey", insignificant: true }
    },
    cities: {
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
      LONDON: { name: "London", insignificant: true },
      LIVERPOOL: { name: "Liverpool", insignificant: true },
      MANCHESTER: { name: "Manchester", insignificant: true },
      NEWCASTLE: { name: "Newcastle", insignificant: true },
      NORWICH: { name: "Norwich", insignificant: true },
      NOTTINGHAM: { name: "Nottingham", insignificant: true },
      OXFORD: { name: "Oxford", insignificant: true },
      SHEFFIELD: { name: "Sheffield", insignificant: true },
      WOLVERHAMPTON: { name: "Wolverhampton", insignificant: true },
      YORK: { name: "York", insignificant: true }
    },
    regions: { CORNWALL: { name: "Cornwall" } },
    towns: {
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
    }
  },
  USA: {
    name: "United States",
    attractions: {
      ALCATRAZ_PRISON: {
        name: "Alcatraz Federal Penitentiary",
        highlight: true
      },
      FISHERMANS_WHARF: { name: "Fisherman's Wharf" },
      FARMERS_MARKET: { name: "Farmers Market" },
      HOLLYWOOD_WALK_OF_FAME: { name: "Hollywood Walk of Fame" },
      WHITE_HOUSE: { name: "White House" },
      CAPITOL_BUILDING: { name: "Capitol Building" },
      WASHINGTON_MONUMENT: { name: "Washington Monument" },
      LINCOLN_MEMORIAL: { name: "Lincoln Memorial" },
      TIMES_SQUARE: { name: "Times Square" },
      BROOKLYN_BRIDGE: { name: "Brooklyn Bridge" },
      WORLD_TRADE_CENTER: { name: "World Trade Center" },
      GOLDEN_GATE_BRIDGE: { name: "Golden Gate Bridge", highlight: true },
      CENTRAL_PARK: { name: "Central Park", highlight: true },
      VENICE_BEACH: { name: "Venice Beach" },
      DISNEYLAND_CALIFORNIA_ADVENTURE: {
        name: "Disneyland California Adventure",
        themePark: true
      },
      DISNEY_MGM_STUDIOS: { name: "Disney-MGM Studios", themePark: true },
      DISNEY_ANIMAL_KINGDOM: {
        name: "Disney's Animal Kingdom",
        themePark: true
      },
      DISNEY_EPCOT: { name: "Epcot", themePark: true },
      WET_N_WILD_ORLANDO: { name: "Wet 'n Wild Orlando", themePark: true },
      BLIZZARD_BEACH: { name: "Blizzard Beach Water Park", themePark: true },
      DISNEY_MAGIC_KINGDOM: { name: "Magic Kingdom Park", themePark: true },
      UNIVERSAL_STUDIOS_FLORIDA: {
        name: "Universal Studios Florida",
        themePark: true
      },
      UNIVERSALS_ISLANDS_OF_ADVENTURE: {
        name: "Universal's Islands of Adventure",
        themePark: true
      },
      GRAND_CANYON: { name: "Grand Canyon", highlight: true },
      KNOTTS_BERRY_FARM: { name: "Knott's Berry Farm", themePark: true },
      SEAWORLD_ORLANDO: { name: "SeaWorld Orlando", themePark: true },
      BUSCH_GARDENS_WILLIAMSBURG: {
        name: "Busch Gardens Williamsburg",
        themePark: true
      },
      BUSCH_GARDENS_TAMPA: { name: "Busch Gardens Tampa", themePark: true },
      SIX_FLAGS_AMERICA: { name: "Six Flags America", themePark: true },
      SIX_FLAGS_MAGIC_MOUNTAIN: {
        name: "Six Flags Magic Mountain",
        themePark: true
      },
      SIX_FLAGS_NEW_ENGLAND: { name: "Six Flags New England", themePark: true }
    },
    cities: {
      BOSTON_MASSACHUSETTS: { name: "Boston" },
      KEY_WEST,
      LAS_VEGAS: { name: "Las Vegas" },
      VIRGINIA_BEACH: { name: "Virginia Beach" },
      LOS_ANGELES: { name: "Los Angeles" },
      NEW_YORK_CITY: { name: "New York City" },
      SAN_FRANCISCO: { name: "San Francisco" },
      SPRINGFIELD_MASSACHUSETTS: { name: "Springfield" },
      WASHINGTON_DC: { name: "Washington DC", capital: true }
    },
    islands: {
      KEY_WEST,
      ALCATRAZ: { name: "Alcatraz" },
      MARTHAS_VINEYARD: { name: "Martha's Vineyard" }
    },
    regions: {
      CAPE_COD: { name: "Cape Cod" },
      FLORIDA_KEYS: { name: "Florida Keys" },
      ISLAMORADA: { name: "Islamorada" }
    },
    states: {
      FLORIDA: { name: "Florida" },
      NEW_YORK: { name: "New York" },
      MASSACHUSETTS: { name: "Massachusetts" },
      VIRGINIA: { name: "Virginia" }
    }
  },
  // Z
  ZIMBABWE: {
    name: "Zimbabwe",
    excludeFromBucketList: true,
    attractions: { VICTORIA_FALLS: { name: "Victoria Falls" } }
  }
};
