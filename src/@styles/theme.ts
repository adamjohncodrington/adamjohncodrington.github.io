import { rgba } from "polished";

import { COLORS } from "./colors";

const page: ITheme_Page = {
  count: { padding: `12px 0 0 5px` },
  header: { margin: { bottom: "30px" } },
  icon: { margin: { top: "15px" }, size: "60px" },
  shell: { padding: "15px 20px 25px" }
};

const THEME_COUNTED_LIST_ITEM: IThemeCountedListItem = {
  countedListItem: {
    count: { margin: { left: "5px" }, width: "20px" }
  }
};

const section: ITheme_PageSection = {
  background: COLORS.gainsboro,
  borderRadius: "10px",
  boxShadow: `0 1px 2px ${rgba(COLORS.gray, 0.5)}`,
  count: { margin: { left: "5px" } },
  header: { padding: "12px 0" },
  icon: { padding: { top: "2px" }, size: "34px" },
  margin: { bottom: "20px" },
  padding: { horizontal: "12px", bottom: "5px" },
  transition: "all 0.4s ease"
};

const THEME_NAV_BAR: IThemeNavBar = {
  navBar: {
    background: COLORS.black,
    icon: {
      color: COLORS.white,
      size: "40px",
      hoverColor: "#aaa",
      hoverShrinkSize: "3px"
    },
    padding: { vertical: "10px" }
  }
};

const THEME_BREAKPOINTS: IThemeBreakpoints = {
  breakpoints: {
    phone: { maxWidth: "767px" },
    tablet: { minWidth: "768px", maxWidth: "1279px" },
    desktop: { minWidth: "1280px" }
  }
};

const THEME_RECIPE_CARD: IThemeRecipeCard = {
  recipeCard: {
    dietSymbol: { margin: { top: "4px" }, size: "27px" },
    photo: { size: "300px" }
  }
};

const THEME_PAGE_SECTION_PANEL_LIST: IThemePageSectionPanelList = {
  pageSectionPanelList: {
    border: { bottom: `1px solid ${COLORS.gray}` },
    countedListItems: { padding: { vertical: "5px" } },
    padding: { bottom: "5px" },
    recipeCards: {
      firstRecipeCard: { padding: { top: "10px" } },
      lastRecipeCard: { padding: { bottom: "20px" } },
      padding: { vertical: "15px" }
    },
    regularCards: {
      lastRegularCard: { padding: { bottom: "5px" } },
      padding: { vertical: "10px" }
    }
  }
};

export const fontFamily: IFontFamily = "-apple-system, Helvetica, sans-serif";
export const scrollbarSize: IScrollbarSize = "0.7rem";

export const THEME: ITheme = {
  ...THEME_BREAKPOINTS,
  ...THEME_COUNTED_LIST_ITEM,
  ...THEME_NAV_BAR,
  ...THEME_RECIPE_CARD,
  ...THEME_PAGE_SECTION_PANEL_LIST,

  // Surface level
  fadedOpacity: 0.5,
  fontFamily,
  listItemGroupVerticalSpacing: "10px",
  scrollbarSize,
  textColor: COLORS.black,

  // Nested level
  section,
  page
};
