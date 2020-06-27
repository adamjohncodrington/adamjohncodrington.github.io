import { rgba } from "polished";

import { BREAKPOINTS } from "./breakpoints";
import { COLORS } from "./colors";
import { fontFamily, scrollbarSize } from "./GlobalStyle";

const THEME_BREAKPOINTS: IThemeBreakpoints = {
  breakpoints: BREAKPOINTS
};

const THEME_COUNTED_LIST_ITEM: IThemeCountedListItem = {
  countedListItem: { count: { margin: { left: "5px" }, width: "20px" } }
};

const THEME_DISCLOSURE: IThemeDisclosure = {
  disclosure: { transition: "all 0.4s ease" }
};

const THEME_EVENT_CARD: IThemeEventCard = {
  eventCard: { notFirstChild: { padding: { top: "3px" } } }
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

const THEME_PAGE_HEADER: IThemePageHeader = {
  pageHeader: {
    count: { padding: { all: "12px 0 0 5px" } },
    margin: { bottom: "25px" }
  }
};

const THEME_PAGE_SECTION: IThemePageSection = {
  pageSection: {
    background: COLORS.gainsboro,
    borderRadius: "10px",
    boxShadow: `0 1px 2px ${rgba(COLORS.gray, 0.5)}`,
    count: { margin: { left: "5px" } },
    header: { padding: { vertical: "12px" } },
    icon: { padding: { top: "2px" }, size: "34px" },
    margin: { bottom: "20px" },
    padding: { horizontal: "12px", bottom: "5px" },
    panelList: {
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
    },
    transition: "all 0.4s ease"
  }
};

const THEME_PAGE_SHELL: IThemePageShell = {
  pageShell: { padding: { all: "15px 20px 25px" } }
};

const THEME_RECIPE_CARD: IThemeRecipeCard = {
  recipeCard: {
    dietSymbol: { margin: { top: "4px" }, size: "27px" },
    panel: {
      children: { padding: { top: "10px", bottom: "5px" } },
      padding: { top: "5px" }
    },
    photo: { size: "300px" },
    title: { fontWeight: "300" }
  }
};

export const THEME: ITheme = {
  ...THEME_BREAKPOINTS,
  ...THEME_COUNTED_LIST_ITEM,
  ...THEME_DISCLOSURE,
  ...THEME_EVENT_CARD,
  ...THEME_NAV_BAR,
  ...THEME_PAGE_HEADER,
  ...THEME_PAGE_SECTION,
  ...THEME_PAGE_SHELL,
  ...THEME_RECIPE_CARD,

  fadedOpacity: 0.5,
  fontFamily,
  listItemGroupVerticalSpacing: "10px",
  scrollbarSize
};
