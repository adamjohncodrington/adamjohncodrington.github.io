interface IAttraction extends ILocation {
  themePark?: boolean;
  highlight?: boolean;
}

interface IAttractionCounted extends IAttraction, I_PastFutureCounts {}

interface IAttractionsNorway {
  OSLO_FJORD_SAUNA: IAttraction;
}

interface IAttractionsIreland {
  ST_STEPHENS_GREEN_PARK: IAttraction;
  DUBLIN_PRISON: IAttraction;
  GUINNESS_STOREHOUSE: IAttraction;
}

interface IAttractionsZimbabwe {
  VICTORIA_FALLS: IAttraction;
}

interface IAttractionsUSA {
  ALCATRAZ_PRISON: IAttraction;
  FISHERMANS_WHARF: IAttraction;
  FARMERS_MARKET: IAttraction;
  HOLLYWOOD_WALK_OF_FAME: IAttraction;
  WHITE_HOUSE: IAttraction;
  CAPITOL_BUILDING: IAttraction;
  WASHINGTON_MONUMENT: IAttraction;
  LINCOLN_MEMORIAL: IAttraction;
  TIMES_SQUARE: IAttraction;
  BROOKLYN_BRIDGE: IAttraction;
  WORLD_TRADE_CENTER: IAttraction;
  GOLDEN_GATE_BRIDGE: IAttraction;
  CENTRAL_PARK: IAttraction;
  VENICE_BEACH: IAttraction;
  DISNEYLAND_CALIFORNIA_ADVENTURE: IAttraction;
  DISNEY_MGM_STUDIOS: IAttraction;
  DISNEY_ANIMAL_KINGDOM: IAttraction;
  DISNEY_EPCOT: IAttraction;
  WET_N_WILD_ORLANDO: IAttraction;
  BLIZZARD_BEACH: IAttraction;
  DISNEY_MAGIC_KINGDOM: IAttraction;
  UNIVERSAL_STUDIOS_FLORIDA: IAttraction;
  UNIVERSALS_ISLANDS_OF_ADVENTURE: IAttraction;
  GRAND_CANYON: IAttraction;
  KNOTTS_BERRY_FARM: IAttraction;
  SEAWORLD_ORLANDO: IAttraction;
  BUSCH_GARDENS_WILLIAMSBURG: IAttraction;
  BUSCH_GARDENS_TAMPA: IAttraction;
  SIX_FLAGS_AMERICA: IAttraction;
  SIX_FLAGS_MAGIC_MOUNTAIN: IAttraction;
  SIX_FLAGS_NEW_ENGLAND: IAttraction;
}

interface IAttractionsUK {
  ALTON_TOWERS: IAttraction;
  BLACKPOOL_PLEASURE_BEACH: IAttraction;
  WINTER_WONDERLAND: IAttraction;
  THORPE_PARK: IAttraction;
  EDEN_PROJECT: IAttraction;
  TATE_BRITAIN: IAttraction;
  LONDON_EYE: IAttraction;
  RICHMOND_PARK: IAttraction;
  SHERWOOD_FOREST: IAttraction;
  CALKE_ABBEY: IAttraction;
  BATTERSEA_PARK: IAttraction;
  CRYSTAL_PALACE_PARK: IAttraction;
  QUEEN_ELIZABETH_OAKESLYMPIC_PARK: IAttraction;
  VICTORIA_PARK: IAttraction;
  GREENWICH_PARK: IAttraction;
  KEW_GARDENS: IAttraction;
  EPPING_FOREST: IAttraction;
  HAMPSTEAD_HEATH: IAttraction;
  V_A_MUSEUM: IAttraction;
  SCIENCE_MUSEUM: IAttraction;
  TATE_MODERN: IAttraction;
  NATURAL_HISTORY_MUSEUM: IAttraction;
  LAKE_DISTRICT: IAttraction;
  HADRIANS_WALL: IAttraction;
}

interface IAttractionsSpain {
  CIUTADELLA_PARK: IAttraction;
  PARK_GUELL: IAttraction;
  PARQUE_WARNER: IAttraction;
  SIAM_PARK: IAttraction;
  PORTAVENTURA: IAttraction;
}

interface IAttractionsPoland {
  AUSCHWITZ_BIRKENAU: IAttraction;
  WIELICZKA_SALT_MINE: IAttraction;
}

interface IAttractionsPeru {
  COLCA_CANYON: IAttraction;
  LAGUNA_69: IAttraction;
  JUNGLE_ZIPLINE: IAttraction;
  MACHU_PICCHU: IAttraction;
  HUACACHINA: IAttraction;
  HUASCARAN_PARK: IAttraction;
  MANU: IAttraction;
  RAINBOW_MOUNTAIN: IAttraction;
}

interface IAttractionsPortugal {
  ZOOMARINE: IAttraction;
  OCENARIO_DE_LISBOA: IAttraction;
}

interface IAttractionsUganda {
  RAFTING_NALUBALE: IAttraction;
  NILE_SOURCE: IAttraction;
}

interface IAttractionsNetherlands {
  SEX_MUSEUM: IAttraction;
  STEDELIJK_MUSEUM: IAttraction;
  GRONINGEN_MUSEUM: IAttraction;
}

interface IAttractionsLaos {
  KUANG_SI_FALLS: IAttraction;
  ELEPHANT_VILLAGE: IAttraction;
  BUDDHA_PARK: IAttraction;
}

interface IAttractionsItaly {
  ARCO_DELLA_PACE: IAttraction;
  SEMPIONE_PARK: IAttraction;
  MILAN_MALL: IAttraction;
  COLOSSEUM: IAttraction;
  TREVI_FOUNTAIN: IAttraction;
  VESUVIUS: IAttraction;
  ETNA: IAttraction;
}

interface IAttractionsFrance {
  SACRE_COEUR: IAttraction;
  LOUVRE: IAttraction;
  ARC_DE_TRIOMPHE: IAttraction;
  AIR_SPACE_MUSEUM: IAttraction;
  SCIENCE_MUSEUM: IAttraction;
  EIFFEL_TOWER: IAttraction;
  NOTRE_DAME: IAttraction;
  DISNEYLAND_PARIS: IAttraction;
  PARC_ASTERIX: IAttraction;
}

interface IAttractionsHungary {
  PARLIAMENT_BUILDING: IAttraction;
  THERMAL_BATH_SZECHENYI: IAttraction;
  CITADELLA: IAttraction;
}

interface IAttractionsDenmark {
  LOUISIANA_ART_MUSEUM: IAttraction;
}

interface IAttractionsCzechRepublic {
  JOHN_LENNON_WALL: IAttraction;
  VYSEHRAD: IAttraction;
}

interface IAttractionsGermany {
  REICHSTAG: IAttraction;
  HOLOCAUST_MEMORIAL: IAttraction;
  BRANDENBURG_GATE: IAttraction;
  BERLIN_WALL: IAttraction;
  EAST_SIDE_GALLERY: IAttraction;
}

interface IAttractionsEcuador {
  EQUATOR_MONUMENT: IAttraction;
  OTAVALO_MARKET: IAttraction;
  TORTOISE_PARK: IAttraction;
  PAILON_DEL_DIABLO: IAttraction;
  COTOPAXI: IAttraction;
}

interface IAttractionsEgypt {
  GIZA_PYRAMIDS_SPHINX: IAttraction;
}

interface IAttractionsThailand {
  WHITE_TEMPLE: IAttraction;
  MAYA_BAY: IAttraction;
  PAI_CANYON: IAttraction;
  TIGER_KINGDOM: IAttraction;
  GRAND_PALACE: IAttraction;
  SKY_BAR: IAttraction;
}

interface IAttractionsBrazil {
  MODERN_ART_MUSEUM_RIO: IAttraction;
  COPACABANA_BEACH: IAttraction;
  ROCINHA_FAVELA: IAttraction;
  CHRIST_THE_REDEEMER: IAttraction;
  SELARON_STEPS: IAttraction;
  HANG_GLIDING: IAttraction;
  PICO_DO_PAPAGAIO: IAttraction;
}

interface IAttractionsCanada {
  NIAGARA_FALLS: IAttraction;
}

interface IAttractionsCostaRica {
  CORCOVADO: IAttraction;
  JAGUAR_RESCUE_CENTER: IAttraction;
}

interface IAttractionsUAE {
  AQUAVENTURE: IAttraction;
  BURJ_KHALIFA: IAttraction;
}

interface IAttractionsCroatia {
  DUBROVNIK_CABLE_CAR: IAttraction;
  DUBROVNIK_WALLS: IAttraction;
}

interface IAttractionsCyprus {
  PAPHOS_ARCHAEOLOGICAL_PARK: IAttraction;
}

interface IAttractionsBelgium {
  BATTLEFIELDS: IAttraction;
  BELFRY_OF_BRUGES: IAttraction;
}

interface IAttractionsBarbados {
  HARRISONS_CAVE: IAttraction;
}

interface IAttractionsBelize {
  BARRIER_REEF: IAttraction;
}
