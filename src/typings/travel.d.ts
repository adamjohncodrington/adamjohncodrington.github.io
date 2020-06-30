interface ITravelCard {
  title: Array<ILocation>;
  subtitle?: Array<ILocation>;
  favourite?: boolean;
  hidden?: Array<ILocation>;
  dates: Array<Date>;
  notAbroad?: boolean;
  company: Array<IFriend>;
}

interface ILocation extends INameFavourite {
  island?: boolean;
  insignificant?: boolean;
  englishName?: string;
  foreignName?: string;
  excludeFromBucketList?: boolean;
}

type IIsland = ILocation;
type IIslandsObject = { [island: string]: IIsland };
type IIslands = { islands: IIslandsObject };

type ITown = ILocation;
type ITownsObject = { [town: string]: ITown };
type ITowns = { towns: ITownsObject };

interface IAttraction extends ILocation {
  themePark?: boolean;
  highlight?: boolean;
}
interface IAttractionCounted extends IAttraction, IFuturePastCounts {}

type IAttractionsObject = { [attraction: string]: IAttraction };
type IAttractions = { attractions: IAttractionsObject };

interface IRegion extends ILocation {}
type IRegionsObject = { [region: string]: IRegion };
type IRegions = { regions: IRegionsObject };

interface ICity extends ILocation {
  capital?: boolean;
}

interface ICityCounted extends ICity, IFuturePastCounts {}

type ICitiesObject = { [city: string]: ICity };
type ICities = { cities: ICitiesObject };

interface IVillage extends ILocation {}
type IVillagesObject = { [village: string]: IVillage };
type IVillages = { villages: IVillagesObject };

interface IState extends ILocation {}
type IStatesObject = { [state: string]: IState };
type IStates = { states: IStatesObject };

interface ICountry extends ILocation {
  attractions?: IAttractionsObject;
  cities?: ICitiesObject;
  islands?: IIslandsObject;
  regions?: IRegionsObject;
  states?: IStatesObject;
  towns?: ITownsObject;
  villages?: IVillagesObject;
}

interface ICountryCounted extends ICountry, IFuturePastCounts {}

interface ICountry_A extends ILocation, IAttractions {}
interface ICountry_C extends ILocation, ICities {}
interface ICountry_AC extends ILocation, IAttractions, ICities {}
interface ICountry_ACI extends ILocation, IAttractions, ICities, IIslands {}
interface ICountry_ACIRS
  extends ILocation,
    IAttractions,
    ICities,
    IIslands,
    IRegions,
    IStates {}
interface ICountry_ACIT
  extends ILocation,
    IAttractions,
    ICities,
    IIslands,
    ITowns {}
interface ICountry_ACRT
  extends ILocation,
    IAttractions,
    ICities,
    IRegions,
    ITowns {}
interface ICountry_ACT extends ILocation, IAttractions, ICities, ITowns {}
interface ICountry_ACTV
  extends ILocation,
    IAttractions,
    ICities,
    ITowns,
    IVillages {}
interface ICountry_ACITR
  extends ILocation,
    IAttractions,
    ICities,
    IIslands,
    ITowns,
    IRegions {}
interface ICountry_CI extends ILocation, ICities, IIslands {}
interface ICountry_CT extends ILocation, ICities, ITowns {}
interface ICountry_IR extends ILocation, IIslands, IRegions {}

interface IAllCountries {
  ARGENTINA: ICountry_C;
  AUSTRALIA: ILocation;
  AUSTRIA: ICountry_C;
  BARBADOS: ICountry_A;
  BELGIUM: ICountry_AC;
  BELIZE: ICountry_ACI;
  BOLIVIA: ILocation;
  BRAZIL: ICountry_ACI;
  CANADA: ICountry_AC;
  COLOMBIA: ILocation;
  COSTA_RICA: ICountry_ACT;
  CROATIA: ICountry_AC;
  CUBA: ICountry_CT;
  CYPRUS: ICountry_AC;
  CZECH_REPUBLIC: ICountry_AC;
  DENMARK: ICountry_AC;
  ECUADOR: ICountry_ACI;
  EGYPT: ICountry_AC;
  FRANCE: ICountry_AC;
  GERMANY: ICountry_AC;
  GREECE: ICountry_IR;
  HUNGARY: ICountry_AC;
  INDONESIA: ILocation;
  IRELAND: ICountry_AC;
  ITALY: ICountry_ACRT;
  JAPAN: ILocation;
  LAOS: ICountry_AC;
  MEXICO: ILocation;
  NETHERLANDS: ICountry_AC;
  NEW_ZEALAND: ILocation;
  NORWAY: ICountry_CI;
  PERU: ICountry_ACTV;
  PHILLIPINES: ILocation;
  POLAND: ICountry_ACT;
  PORTUGAL: ICountry_ACT;
  SPAIN: ICountry_ACI;
  SWEDEN: ICountry_C;
  TANZANIA: ILocation;
  THAILAND: ICountry_ACIT;
  UGANDA: ICountry_AC;
  UAE: ICountry_AC;
  UK: ICountry_ACITR;
  USA: ICountry_ACIRS;
  ZIMBABWE: ICountry_A;
}
