const cities: ICitiesNorway = { OSLO: { name: "Oslo", capital: true } };

const islands: IIslandsNorway = { HOVEDOYA: { name: "Hovedøya" } };

const attractions: IAttractionsNorway = {
  OSLO_FJORD_SAUNA: { name: "Oslo Fjord Sauna", highlight: true }
};

export const NORWAY: INorway = { name: "Norway", cities, islands, attractions };
