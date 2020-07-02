const cities: ICitiesGermany = { BERLIN: { name: "Berlin", capital: true } };

const attractions: IAttractionsGermany = {
  REICHSTAG: { name: "Reichstag Building" },
  HOLOCAUST_MEMORIAL: { name: "Holocaust Memorial" },
  BRANDENBURG_GATE: { name: "Brandenburg Gate" },
  BERLIN_WALL: { name: "Berlin Wall" },
  EAST_SIDE_GALLERY: { name: "East Side Gallery" }
};

export const GERMANY: IGermany = { name: "Germany", cities, attractions };
