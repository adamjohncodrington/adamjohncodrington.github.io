import { rgba } from "polished";

import { COLORS } from "./colors";

const countMarginLeft: PxValue = "5px";

const BORDER_GRAY_THIN: IBorder = `1px solid ${COLORS.gray}`;

const page: ITheme_Page = {
  count: { padding: `12px 0 0 ${countMarginLeft}` },
  header: { margin: { bottom: "30px" } },
  icon: { margin: { top: "15px" }, size: "60px" },
  shell: { padding: "15px 20px 25px" }
};

const countedList: ITheme_CountedList = {
  count: { width: "25px" },
  padding: { vertical: "5px" }
};

const eventCardList: ITheme_EventCardList = {
  padding: { vertical: "10px" },
  finalEventCardPaddingBottom: "5px"
};

const section: ITheme_PageSection = {
  background: COLORS.gainsboro,
  borderRadius: "10px",
  boxShadow: `0 1px 2px ${rgba(COLORS.gray, 0.5)}`,
  count: { margin: { left: countMarginLeft } },
  header: { padding: "12px 0" },
  icon: { padding: { top: "2px" }, size: "34px" },
  margin: { bottom: "20px" },
  padding: { horizontal: "12px", bottom: "5px" },
  transition: "all 0.4s ease"
};

const recipe: ITheme_Recipes = {
  image: { size: "300px" },
  dietIcon: { margin: { top: "4px" }, size: "24px" },
  title: { padding: { vertical: "15px" } },
  first: { padding: { top: "10px" } },
  last: { padding: { bottom: "20px" } }
};

const breakpoints: IBreakpoints = {
  tablet: { minWidth: "768px" },
  phone: { maxWidth: "480px" }
};

const pageSectionPanelList = {
  borderBottom: BORDER_GRAY_THIN
};

export const fontFamily: IFontFamily = "-apple-system, Helvetica, sans-serif";
export const scrollbarSize: IScrollbarSize = "0.7rem";

const navBar: ITheme_NavBar = {
  verticalPadding: "10px",
  iconSize: "50px"
};

export const THEME: ITheme = {
  // Surface level
  fadedOpacity: 0.5,
  fontFamily,
  listItemGroupVerticalSpacing: "10px",
  scrollbarSize,
  textColor: COLORS.black,

  // Nested level
  pageSectionPanelList,
  breakpoints,
  countedList,
  eventCardList,
  recipe,
  navBar,
  section,
  page
};
