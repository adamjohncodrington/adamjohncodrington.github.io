const cities: ICitiesBrazil = { RIO_DE_JANEIRO: { name: "Rio de Janeiro" } };

const attractions: IAttractionsBrazil = {
  MODERN_ART_MUSEUM_RIO: {
    name: "Modern Art Museum Rio",
    foreignName: "Museu de Arte Moderna do Rio de Janeiro"
  },
  COPACABANA_BEACH: { name: "Copacabana Beach" },
  ROCINHA_FAVELA: { name: "Rocinha Favela" },
  CHRIST_THE_REDEEMER: { name: "Cristo Redentor" },
  SELARON_STEPS: {
    name: "Selarón Steps",
    foreignName: "Escadaria Selarón"
  },
  HANG_GLIDING: { name: "São Conrado Hang-Gliding", highlight: true },
  PICO_DO_PAPAGAIO: {
    name: "Pico do Papagaio",
    englishName: "Parrot's Peak",
    foreignName: "Pico do Papagaio",
    highlight: true
  }
};

const islands: IIslandsBrazil = { ILHA_GRANDE: { name: "Ilha Grande" } };

export const BRAZIL: IBrazil = {
  name: "Brazil",
  cities,
  attractions,
  islands
};
