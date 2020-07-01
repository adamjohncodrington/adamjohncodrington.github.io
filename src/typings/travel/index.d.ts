interface ILocation extends INameFavourite {
  island?: boolean;
  insignificant?: boolean;
  englishName?: string;
  foreignName?: string;
  excludeFromBucketList?: boolean;
}

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
