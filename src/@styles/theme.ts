import { rgba } from "polished";

import { COLORS } from "./colors";

const countMarginLeft: PxValue = "5px";

const BORDER_BLACK_THIN: IBorder = `1px solid ${COLORS.black}`;
const BORDER_GRAY_THIN: IBorder = `1px solid ${COLORS.gray}`;

const THEME_homePage: ITheme_Homepage = {
  icon: { padding: "1.5vmin", size: { desktop: "25vmin", phone: "42vmin" } }
};

const THEME_page: ITheme_Page = {
  count: { padding: `12px 0 0 ${countMarginLeft}` },
  header: { margin: { bottom: "30px" } },
  icon: { margin: { top: "15px" }, size: "60px" },
  shell: { padding: "25px 20px" }
};

const THEME_countedList: ITheme_CountedList = {
  border: { bottom: BORDER_GRAY_THIN },
  count: { width: "25px" },
  padding: { vertical: "5px" }
};

const THEME_eventCardList: ITheme_EventCardList = {
  padding: { vertical: "10px" },
  finalEventCardPaddingBottom: "5px"
};

const THEME_pageSection: ITheme_PageSection = {
  background: COLORS.gainsboro,
  border: { bottom: BORDER_BLACK_THIN },
  borderRadius: "10px",
  boxShadow: `0 1px 2px ${rgba(COLORS.gray, 0.5)}`,
  count: { margin: { left: countMarginLeft } },
  header: { padding: "12px 0" },
  icon: { padding: { top: "2px" }, size: "34px" },
  margin: { bottom: "20px" },
  padding: { horizontal: "12px", bottom: "5px" },
  transition: "all 0.4s ease"
};

const THEME_recipe: ITheme_Recipes = {
  border: { bottom: BORDER_GRAY_THIN },
  image: { size: "300px" },
  dietIcon: { margin: { top: "4px" }, size: "24px" },
  title: { padding: { vertical: "15px" } },
  first: { padding: { top: "10px" } },
  last: { padding: { bottom: "20px" } }
};

const THEME_breakpoints: IBreakpoints = {
  tablet: { minWidth: "768px" },
  phone: { maxWidth: "480px" }
};

const THEME_pageSectionPanelList = {
  borderBottom: BORDER_GRAY_THIN
};

export const fontFamily: IFontFamily = "-apple-system, Helvetica, sans-serif";
export const scrollbarSize: IScrollbarSize = "0.7rem";

export const THEME: ITheme = {
  // Surface level
  circleBorder: BORDER_BLACK_THIN,
  fadedOpacity: 0.5,
  fontFamily,
  listItemGroupVerticalSpacing: "10px",
  scrollbarSize,
  textColor: COLORS.black,

  // Nested level
  pageSectionPanelList: THEME_pageSectionPanelList,

  breakpoints: THEME_breakpoints,
  countedList: THEME_countedList,
  eventCardList: THEME_eventCardList,
  recipe: THEME_recipe,
  homePage: THEME_homePage,
  section: THEME_pageSection,
  page: THEME_page
};
