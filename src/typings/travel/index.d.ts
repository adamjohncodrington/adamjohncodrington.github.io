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

interface IRegion extends ILocation {}
type IRegionsObject = { [region: string]: IRegion };
type IRegions = { regions: IRegionsObject };

interface IVillage extends ILocation {}
type IVillagesObject = { [village: string]: IVillage };
type IVillages = { villages: IVillagesObject };

interface IState extends ILocation {}
type IStatesObject = { [state: string]: IState };
type IStates = { states: IStatesObject };
