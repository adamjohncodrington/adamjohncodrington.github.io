import { rgba } from "polished";

import { COLORS } from "./colors";

const BORDER_BLACK_THIN: IBorder = `1px solid ${COLORS.black}`;
const BORDER_GRAY_THIN: IBorder = `1px solid ${COLORS.gray}`;

const HOME_PAGE_THEME: ITheme_Homepage = {
  icon: { padding: "1.5vmin", size: { desktop: "25vmin", phone: "42vmin" } }
};

const PAGE_THEME: ITheme_Page = {
  count: { padding: "12px 0 0 7px" },
  header: { margin: { bottom: "30px" } },
  icon: { margin: { top: "15px" }, size: "60px" },
  shell: { padding: "25px 20px" }
};

const SECTION_THEME: ITheme_Section = {
  body: {
    basicList: {
      border: { bottom: BORDER_GRAY_THIN },
      count: { width: "25px" },
      padding: { vertical: "5px" }
    },
    eventCardList: { padding: { vertical: "10px" } },
    padding: { bottom: "5px" }
  },
  border: { bottom: BORDER_BLACK_THIN },
  borderRadius: "10px",
  boxShadow: `0 1px 2px ${rgba(COLORS.gray, 0.5)}`,
  count: { margin: { left: "5px" } },
  header: { padding: "12px 0" },
  icon: { padding: { top: "2px" }, size: "34px" },
  margin: { bottom: "20px" },
  padding: { horizontal: "12px" }
};

const RECIPES_THEME: ITheme_Recipes = {
  border: { bottom: BORDER_GRAY_THIN },
  image: { size: "300px" },
  icon: { margin: { top: "4px" }, size: "24px" },
  title: { padding: { vertical: "15px" } },
  first: { padding: { top: "10px" } },
  last: { padding: { bottom: "20px" } }
};

const BREAKPOINTS: IBreakpoints = { phone: { maxWidth: "480px" } };

export const fontFamily: IFontFamily = "-apple-system, Helvetica, sans-serif";
export const scrollbarSize: IScrollbarSize = "0.7rem";

export const THEME: ITheme = {
  animationDuration: 0.35,
  fadedOpacity: 0.5,
  circleBorder: BORDER_BLACK_THIN,
  textColor: COLORS.black,

  breakpoints: BREAKPOINTS,
  recipe: RECIPES_THEME,
  homePage: HOME_PAGE_THEME,
  section: SECTION_THEME,
  page: PAGE_THEME,

  colors: COLORS,
  scrollbarSize,
  fontFamily
};
