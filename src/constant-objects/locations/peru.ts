const cities: ICitiesPeru = {
  AREQUIPA: { name: "Arequipa" },
  CUSCO: { name: "Cusco" },
  LIMA: { name: "Lima", capital: true },
  HUARAZ: { name: "Huaraz" }
};

const attractions: IAttractionsPeru = {
  COLCA_CANYON: { name: "Colca Canyon" },
  LAGUNA_69: { name: "Laguna 69", highlight: true },
  JUNGLE_ZIPLINE: {
    name: "Santa Teresa Vertikal Zipline",
    highlight: true
  },
  MACHU_PICCHU: { name: "Machu Picchu", highlight: true },
  HUACACHINA: { name: "Huacachina Sand Dunes", highlight: true },
  HUASCARAN_PARK: { name: "Huascaran National Park" },
  MANU: { name: "Manú National Park" },
  RAINBOW_MOUNTAIN: { name: "Rainbow Mountain", highlight: true }
};

const towns: ITownsPeru = {
  MANCORA: { name: "Mancora" },
  PARACAS: { name: "Paracas" }
};

const villages: IVillagesPeru = { HUACACHINA: { name: "Huacachina" } };

export const PERU: IPeru = {
  name: "Peru",
  cities,
  attractions,
  towns,
  villages
};
