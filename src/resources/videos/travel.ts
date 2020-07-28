import { LANDSCAPE_720P, COUNTRIES, DATES } from "@constants";

export const UGANDA: ITravelVideo = {
  youtubeId: "ennXFiXhoAw",
  ...LANDSCAPE_720P,
  dates: DATES.TRAVEL.UGANDA,
  locations: [COUNTRIES.UGANDA]
};

export const ECUADOR_PERU: ITravelVideo = {
  youtubeId: "lteCbkamhcQ",
  ...LANDSCAPE_720P,
  dates: DATES.TRAVEL.ECUADOR_PERU,
  locations: [COUNTRIES.ECUADOR, COUNTRIES.PERU]
};

export const RIO_ILHA_GRANDE: ITravelVideo = {
  youtubeId: "EvCJY_bq6rk",
  ...LANDSCAPE_720P,
  dates: DATES.TRAVEL.RIO_ILHA_GRANDE,
  locations: [
    COUNTRIES.BRAZIL.cities.RIO_DE_JANEIRO,
    COUNTRIES.BRAZIL.islands.ILHA_GRANDE
  ]
};

export const MILAN: ITravelVideo = {
  youtubeId: "Dqq4RY6ZYF8",
  ...LANDSCAPE_720P,
  dates: DATES.TRAVEL.MILAN,
  locations: [COUNTRIES.ITALY.cities.MILAN]
};

export const THAILAND_LAOS: ITravelVideo = {
  youtubeId: "s-On3_XV3Dg",
  ...LANDSCAPE_720P,
  dates: DATES.TRAVEL.THAILAND_LAOS,
  locations: [COUNTRIES.THAILAND, COUNTRIES.LAOS]
};
