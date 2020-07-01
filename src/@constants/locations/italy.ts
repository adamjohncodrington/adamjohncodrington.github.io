const regions = { SICILY: { name: "Sicily" } };

const cities = {
  FLORENCE: { name: "Florence" },
  NAPLES: { name: "Naples" },
  MILAN: { name: "Milan" },
  ROME: { name: "Rome", capital: true },
  VATICAN: { name: "Vatican City" },
  CATANIA: { name: "Catania" },
  VENICE: { name: "Venice" },
  POMPEII: { name: "Pompeii" }
};

export const towns = {
  JESOLO: { name: "Jesolo" },
  SORRENTO: { name: "Sorrento" }
};

export const attractions = {
  ARCO_DELLA_PACE: { name: "Arco della Pace" },
  SEMPIONE_PARK: { name: "Sempione Park" },
  MILAN_MALL: { name: "Galleria Vittorio Emanuele II" },
  COLOSSEUM: { name: "Colosseum" },
  TREVI_FOUNTAIN: { name: "Trevi Fountain" },
  VESUVIUS: { name: "Mount Vesuvius" },
  ETNA: { name: "Mount Etna" }
};

export const ITALY = {
  name: "Italy",
  regions,
  cities,
  towns,
  attractions
};
