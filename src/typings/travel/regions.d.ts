interface IRegion extends ILocation {}

interface IRegionsUSA {
  CAPE_COD: IRegion;
  FLORIDA_KEYS: IRegion;
  ISLAMORADA: IRegion;
}

interface IRegionsGreece {
  HALKIDIKI: IRegion;
}

interface IRegionsUK {
  CORNWALL: IRegion;
}

interface IRegionsItaly {
  SICILY: IRegion;
}

interface IRegions
  extends IRegionsItaly,
    IRegionsGreece,
    IRegionsUSA,
    IRegionsUK {}
