import { LANDSCAPE_720P, COUNTRIES, DATES } from "@constants";

export const UGANDA: ITravelVideo = {
  dates: DATES.TRAVEL.UGANDA,
  locations: [COUNTRIES.UGANDA],
  youtubeId: "ennXFiXhoAw",
  ...LANDSCAPE_720P
};

export const ECUADOR_PERU: ITravelVideo = {
  dates: DATES.TRAVEL.ECUADOR_PERU,
  locations: [COUNTRIES.ECUADOR, COUNTRIES.PERU],
  youtubeId: "lteCbkamhcQ",
  ...LANDSCAPE_720P
};

export const RIO_ILHA_GRANDE: ITravelVideo = {
  dates: DATES.TRAVEL.RIO_ILHA_GRANDE,
  locations: [
    COUNTRIES.BRAZIL.cities.RIO_DE_JANEIRO,
    COUNTRIES.BRAZIL.islands.ILHA_GRANDE
  ],
  youtubeId: "EvCJY_bq6rk",
  ...LANDSCAPE_720P
};

export const MILAN: ITravelVideo = {
  youtubeId: "Dqq4RY6ZYF8",
  dates: DATES.TRAVEL.MILAN,
  locations: [COUNTRIES.ITALY.cities.MILAN],
  ...LANDSCAPE_720P
};

export const THAILAND_LAOS: ITravelVideo = {
  dates: DATES.TRAVEL.THAILAND_LAOS,
  locations: [COUNTRIES.THAILAND, COUNTRIES.LAOS],
  youtubeId: "s-On3_XV3Dg",
  ...LANDSCAPE_720P
};
