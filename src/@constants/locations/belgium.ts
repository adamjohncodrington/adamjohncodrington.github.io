const cities: ICitiesBeligum = {
  BRUGES: { name: "Bruges" },
  YPRES: { name: "Ypres" }
};

const attractions: IAttractionsBelgium = {
  BATTLEFIELDS: { name: "Battlefields" },
  BELFRY_OF_BRUGES: { name: "Belfry of Bruges" }
};

export const BELGIUM: IBelgium = { name: "Belgium", cities, attractions };
