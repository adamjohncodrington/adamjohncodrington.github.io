interface ITravelData {
  title: Array<IBaseLocation>;
  subtitle?: Array<IBaseLocation>;
  favourite?: boolean;
  hidden?: Array<IBaseLocation>;
  dates: Array<Date>;
  notAbroad?: boolean;
  company: Array<IFriend>;
}

interface IBaseLocation extends INameFavourite {
  island?: boolean;
  insignificant?: boolean;
  englishName?: string;
  foreignName?: string;
}

type IIsland = IBaseLocation;
type IIslandsObject = { [island: string]: IIsland };
type IIslands = { islands: IIslandsObject };

type ITown = IBaseLocation;
type ITownsObject = { [town: string]: ITown };
type ITowns = { towns: ITownsObject };

interface IAttraction extends IBaseLocation {
  themePark?: boolean;
  highlight?: boolean;
}
type IAttractionsObject = { [attraction: string]: IAttraction };
type IAttractions = { attractions: IAttractionsObject };

interface IRegion extends IBaseLocation {}
type IRegionsObject = { [region: string]: IRegion };
type IRegions = { regions: IRegionsObject };

interface ICity extends IBaseLocation {
  capital?: boolean;
}
type ICitiesObject = { [city: string]: ICity };
type ICities = { cities: ICitiesObject };

interface IVillage extends IBaseLocation {}
type IVillagesObject = { [village: string]: IVillage };
type IVillages = { villages: IVillagesObject };

interface IState extends IBaseLocation {}
type IStatesObject = { [state: string]: IState };
type IStates = { states: IStatesObject };

// interface ICountry_Attractions extends IBasicCountry, IAttractions {}
// interface ICountry_AttractionsCities extends ICountry_Attractions, ICities {}
// interface ICountry_Cities extends IBasicCountry, ICities {}
// interface ICountry_CitiesIslands extends ICountry_Cities, IIslands {}
// interface ICountry_CitiesTowns extends ICountry_Cities, ITowns {}
// interface ICountry_CitiesTownsRegions extends ICountry_CitiesTowns, IRegions {}
// interface ICountry_CitiesTownsVillages
//   extends ICountry_CitiesTowns,
//     IVillages {}
// interface ICountry_CitiesIslands extends ICountry_Cities, IIslands {}

// interface ICountry_AttractionsCitiesIslands
//   extends ICountry_AttractionsCities,
//     IIslands {}
// interface ICountry_AttractionsCitiesIslandsTowns
//   extends ICountry_AttractionsCitiesIslands,
//     ITowns {}
// interface ICountry_AttractionsCitiesIslandsTownsRegions
//   extends ICountry_AttractionsCitiesIslandsTowns,
//     IRegions {}
// interface ICountry_AttractionsCitiesTowns
//   extends ICountry_AttractionsCities,
//     ITowns {}
// interface ICountry_IslandRegions extends IBasicCountry, IIslands, IRegions {}

interface ICountry_Attractions extends IBaseLocation, IAttractions {}
interface ICountry_AttractionsCities
  extends IBaseLocation,
    IAttractions,
    ICities {}
interface ICountry_AttractionsCitiesIslands
  extends IBaseLocation,
    IAttractions,
    ICities,
    IIslands {}
interface ICountry_AttractionsCitiesRegionsTowns
  extends IBaseLocation,
    IAttractions,
    ICities,
    IRegions,
    ITowns {}
interface ICountry_AttractionsCitiesIslands
  extends IBaseLocation,
    IAttractions,
    ICities,
    IIslands {}
interface ICountry_AttractionsCitiesTowns
  extends IBaseLocation,
    IAttractions,
    ICities,
    ITowns {}
interface ICountry_AttractionsCitiesTownsVillages
  extends IBaseLocation,
    IAttractions,
    ICities,
    ITowns,
    IVillages {}
interface ICountry_AttractionsCitiesIslandsTowns
  extends IBaseLocation,
    IAttractions,
    ICities,
    IIslands,
    ITowns {}
interface ICountry_AttractionsCitiesIslandsTownsRegions
  extends IBaseLocation,
    IAttractions,
    ICities,
    IIslands,
    ITowns,
    IRegions {}
interface ICountry_AttractionsCitiesIslandsRegionsStates
  extends IBaseLocation,
    IAttractions,
    ICities,
    IIslands,
    IRegions,
    IStates {}
interface ICountry_CitiesIslands extends IBaseLocation, ICities, IIslands {}
interface ICountry_CitiesTowns extends IBaseLocation, ICities, ITowns {}
interface ICountry_IslandsRegions extends IBaseLocation, IIslands, IRegions {}

interface IAllCountries {
  BARBADOS: ICountry_Attractions;
  BELGIUM: ICountry_AttractionsCities;
  BRAZIL: ICountry_AttractionsCitiesIslands;
  CANADA: ICountry_AttractionsCities;
  CROATIA: ICountry_AttractionsCities;
  CUBA: ICountry_CitiesTowns;
  CYPRUS: ICountry_AttractionsCities;
  CZECH_REPUBLIC: ICountry_AttractionsCities;
  DENMARK: ICountry_AttractionsCities;
  ECUADOR: ICountry_AttractionsCitiesIslands;
  EGYPT: ICountry_AttractionsCities;
  FRANCE: ICountry_AttractionsCities;
  GERMANY: ICountry_AttractionsCities;
  GREECE: ICountry_IslandsRegions;
  HUNGARY: ICountry_AttractionsCities;
  IRELAND: ICountry_AttractionsCities;
  ITALY: ICountry_AttractionsCitiesRegionsTowns;
  LAOS: ICountry_AttractionsCities;
  NETHERLANDS: ICountry_AttractionsCities;
  NORWAY: ICountry_CitiesIslands;
  PERU: ICountry_AttractionsCitiesTownsVillages;
  POLAND: ICountry_AttractionsCitiesTowns;
  PORTUGAL: ICountry_AttractionsCitiesTowns;
  SPAIN: ICountry_AttractionsCitiesIslands;
  THAILAND: ICountry_AttractionsCitiesIslandsTowns;
  UGANDA: ICountry_AttractionsCities;
  UAE: ICountry_AttractionsCities;
  UK: ICountry_AttractionsCitiesIslandsTownsRegions;
  USA: ICountry_AttractionsCitiesIslandsRegionsStates;
}
