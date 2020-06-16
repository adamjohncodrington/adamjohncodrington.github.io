interface ITravelData {
  title: Array<IBasicLocation>;
  subtitle?: Array<IBasicLocation>;
  favourite?: boolean;
  hidden?: Array<IBasicLocation>;
  dates: Array<Date>;
  notAbroad?: boolean;
  company: Array<IFriend>;
}

interface IBasicLocation extends INameFavourite {
  highlight?: boolean;
  island?: boolean;
  englishName?: string;
  foreignName?: string;
}

interface IIsland extends IBasicLocation {}
type IIslands = { [island: string]: IIsland };

interface ITown extends IBasicLocation {}
type ITowns = { [town: string]: ITown };

interface IAttraction extends IBasicLocation {
  themePark?: boolean;
  highlight?: boolean;
}
type IAttractions = { [attraction: string]: IAttraction };

interface IRegion extends IBasicLocation {}
type IRegions = { [region: string]: IRegion };

interface ICity extends IBasicLocation {
  capital?: boolean;
}
type ICities = { [city: string]: ICity };

interface IVillage extends IBasicLocation {}
type IVillages = { [village: string]: IVillage };

interface IState extends IBasicLocation {}
type IStates = { [state: string]: IState };

interface ICountry extends IBasicLocation {
  cities: ICities;
  regions: IRegions;
  islands: IIslands;
  attractions: IAttractions;
  villages: IVillages;
  states: IStates;
  towns: ITowns;
}
type ICountries = { [country: string]: ICountry };

type ILocationItem =
  | ICountry
  | IRegion
  | ICity
  | ITown
  | IState
  | IVillage
  | IIsland
  | IAttraction;
