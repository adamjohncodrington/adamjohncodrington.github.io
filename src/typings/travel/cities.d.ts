interface ICity extends ILocation {
  capital?: boolean;
}

interface ICityCounted extends ICity, IPastAndFutureCounts {}

interface ICitiesArgentina {
  BUENOS_AIRES: ICity;
}

interface ICitiesAustria {
  VIENNA: ICity;
}

interface ICitiesBeligum {
  BRUGES: ICity;
  YPRES: ICity;
}

interface ICitiesBelize {
  BELIZE_CITY: ICity;
}

interface ICitiesBrazil {
  RIO_DE_JANEIRO: ICity;
}

interface ICitiesCanada {
  NIAGARA_FALLS: ICity;
}

interface ICitiesCostaRica {
  SAN_JOSE: ICity;
}

interface ICitiesCroatia {
  DUBROVNIK: ICity;
}

interface ICitiesCuba {
  HAVANA: ICity;
}

interface ICitiesCyprus {
  PAPHOS: ICity;
}

interface ICitiesCzechRepublic {
  PRAGUE: ICity;
}

interface ICitiesDenmark {
  COPENHAGEN: ICity;
}

interface ICitiesEcuador {
  BANOS: ICity;
  GUAYAQUIL: ICity;
  OTAVALO: ICity;
  QUITO: ICity;
}

interface ICitiesEgypt {
  CAIRO: ICity;
  SHARM_EL_SHEIKH: ICity;
}

interface ICitiesFrance {
  MONACO: ICity;
  NICE: ICity;
  PARIS: ICity;
}

interface ICitiesGermany {
  BERLIN: ICity;
}

interface ICitiesHungary {
  BUDAPEST: ICity;
}

interface ICitiesIreland {
  DUBLIN: ICity;
}

interface ICitiesItaly {
  FLORENCE: ICity;
  NAPLES: ICity;
  MILAN: ICity;
  ROME: ICity;
  VATICAN: ICity;
  CATANIA: ICity;
  VENICE: ICity;
  POMPEII: ICity;
}

interface ICitiesLaos {
  LUANG_PRABANG: ICity;
  VIENTIANE: ICity;
}

interface ICitiesNetherlands {
  AMSTERDAM: ICity;
  GRONINGEN: ICity;
}

interface ICitiesNorway {
  OSLO: ICity;
}

interface ICitiesPeru {
  AREQUIPA: ICity;
  CUSCO: ICity;
  LIMA: ICity;
  HUARAZ: ICity;
}

interface ICitiesPoland {
  KRAKOW: ICity;
}

interface ICitiesPortugal {
  LISBON: ICity;
  PORTIMAO: ICity;
  PORTO: ICity;
}

interface ICitiesSpain {
  BARCELONA: ICity;
  MADRID: ICity;
  VALENCIA: ICity;
}

interface ICitiesSweden {
  STOCKHOLM: ICity;
}

interface ICitiesThailand {
  BANGKOK: ICity;
  CHIANG_MAI: ICity;
  CHIANG_RAI: ICity;
}

interface ICitiesUganda {
  JINJA: ICity;
}

interface ICitiesUAE {
  DUBAI: ICity;
}

interface ICitiesUK {
  BATH: ICity;
  BLACKPOOL: ICity;
  BRIGHTON: ICity;
  BRISTOL: ICity;
  BIRMINGHAM: ICity;
  CAMBRIDGE: ICity;
  COVENTRY: ICity;
  DERBY: ICity;
  EDINBURGH: ICity;
  HULL: ICity;
  LEEDS: ICity;
  LEICESTER: ICity;
  LINCOLN: ICity;
  LONDON: ICity;
  LIVERPOOL: ICity;
  MANCHESTER: ICity;
  NEWCASTLE: ICity;
  NORWICH: ICity;
  NOTTINGHAM: ICity;
  OXFORD: ICity;
  SHEFFIELD: ICity;
  WOLVERHAMPTON: ICity;
  YORK: ICity;
}

interface ICitiesUSA {
  BOSTON_MASSACHUSETTS: ICity;
  KEY_WEST: ICity;
  LAS_VEGAS: ICity;
  VIRGINIA_BEACH: ICity;
  LOS_ANGELES: ICity;
  NEW_YORK_CITY: ICity;
  SAN_FRANCISCO: ICity;
  SPRINGFIELD_MASSACHUSETTS: ICity;
  WASHINGTON_DC: ICity;
}

interface ICities
  extends ICitiesArgentina,
    ICitiesAustria,
    ICitiesBeligum,
    ICitiesBelize,
    ICitiesBrazil,
    ICitiesCanada,
    ICitiesCostaRica,
    ICitiesCroatia,
    ICitiesCuba,
    ICitiesCyprus,
    ICitiesCzechRepublic,
    ICitiesDenmark,
    ICitiesEcuador,
    ICitiesEgypt,
    ICitiesFrance,
    ICitiesGermany,
    ICitiesHungary,
    ICitiesIreland,
    ICitiesItaly,
    ICitiesLaos,
    ICitiesNetherlands,
    ICitiesNorway,
    ICitiesPeru,
    ICitiesPoland,
    ICitiesPortugal,
    ICitiesSpain,
    ICitiesSweden,
    ICitiesThailand,
    ICitiesUAE,
    ICitiesUganda,
    ICitiesUK,
    ICitiesUSA {}
