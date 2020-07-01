const cities: ICitiesThailand = {
  BANGKOK: { name: "Bangkok", capital: true },
  CHIANG_MAI: { name: "Chiang Mai" },
  CHIANG_RAI: { name: "Chiang Rai" }
};

const islands: IIslandsThailand = {
  KOH_PHI_PHI: { name: "Koh Phi Phi" },
  KOH_PHANGAN: { name: "Koh Phangan" },
  KOH_TAO: { name: "Koh Tao" }
};

const attractions: IAttractionsThailand = {
  WHITE_TEMPLE: { name: "Wat Rong Khun" },
  MAYA_BAY: { name: "Maya Bay" },
  PAI_CANYON: { name: "Pai Canyon", highlight: true },
  TIGER_KINGDOM: { name: "Tiger Kingdom" },
  GRAND_PALACE: { name: "Grand Palace Bangkok", highlight: true },
  SKY_BAR: { name: "Sky Bar Bangkok" }
};

const towns: ITownsThailand = {
  KRABI: { name: "Krabi" },
  PAI: { name: "Pai" }
};

export const THAILAND: IThailand = {
  name: "Thailand",
  cities,
  islands,
  attractions,
  towns
};
