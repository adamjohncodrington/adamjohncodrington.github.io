const attractions: IAttractionsBelize = {
  BARRIER_REEF: { name: "Belize Barrier Reef", highlight: true }
};

const cities: ICitiesBelize = {
  BELIZE_CITY: {
    name: "Belize City",
    capital: true,
    excludeFromBucketList: true
  }
};

const islands: IIslandsBelize = {
  AMBERGRIS_CAYE: { name: "Ambergris Caye" },
  CAYE_CAULKER: { name: "Caye Caulker" }
};

export const BELIZE: IBelize = { name: "Belize", attractions, cities, islands };
