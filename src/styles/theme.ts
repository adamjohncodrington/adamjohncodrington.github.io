import { rgba } from "polished";

import { BREAKPOINTS } from "./breakpoints";
import { COLORS } from "./colors";
import { FONT_SIZES } from "./font-sizes";
import { fontFamily, scrollbarSize } from "./GlobalStyle";

const thinFontWeight: string = "300";

const THEME_COUNTED_LIST_ITEM: IThemeCountedListItem = {
  count: { margin: { left: "5px" }, width: "20px" }
};

const THEME_EVENT_CARD: IThemeEventCard = {
  companySymbol: { color: COLORS.boulder, spaceBetweenSymbols: "5px" },
  notFirstChild: { margin: { top: "5px" } },
  photo: { size: "75px" }
};

const THEME_NAV_BAR: IThemeNavBar = {
  background: COLORS.black,
  icon: {
    color: COLORS.white,
    size: "40px",
    defaultHoverColor: "#aaa",
    hoverShrinkSize: "0"
  },
  padding: { vertical: "10px" }
};

const THEME_PAGE_HEADER: IThemePageHeader = {
  count: { padding: { all: "12px 0 0 5px" } },
  margin: { bottom: "25px" }
};

const THEME_PAGE_SECTION: IThemePageSection = {
  background: COLORS.gainsboro,
  borderRadius: "10px",
  boxShadow: `0 1px 2px ${rgba(COLORS.gray, 0.5)}`,
  comingSoon: { fontSize: FONT_SIZES.L, fontWeight: thinFontWeight },
  count: { margin: { left: "5px" } },
  header: { padding: { vertical: "12px" } },
  icon: { size: "32px" },
  margin: { bottom: "20px" },
  padding: { horizontal: "12px", bottom: "5px" },
  panelList: {
    border: { bottom: `1px solid ${COLORS.gray}` },
    countedListItems: { padding: { vertical: "5px" } },
    padding: { bottom: "5px" },
    recipes: {
      firstRecipeCard: { padding: { top: "15px" } },
      lastRecipeCard: { padding: { bottom: "20px" } },
      padding: { vertical: "15px" }
    },
    regularCards: {
      lastRegularCard: { padding: { bottom: "5px" } },
      padding: { vertical: "10px" }
    }
  }
};

const pageLayoutHorizontalSpacing: PxValue = "20px";
const THEME_PAGE_LAYOUT: IThemePageLayout = {
  columnGap: pageLayoutHorizontalSpacing,
  padding: { all: `15px ${pageLayoutHorizontalSpacing} 25px` }
};

const THEME_RECIPE_CARD: IThemeRecipeCard = {
  panel: {
    children: { padding: { top: "15px" } },
    padding: { top: "5px" }
  },
  portionCost: { margin: { top: "3px" } },
  title: { fontWeight: thinFontWeight }
};

const THEME_ROUNDED_SYMBOL: IThemeRoundedSymbol = {
  borderRadius: "25%",
  fontSize: "75%",
  size: "26px",
  textColor: COLORS.white
};

const THEME_VINYL_CARD: IThemeVinylCard = {
  artwork: { margin: { right: "10px" }, size: "100px" },
  notLastChild: { margin: { bottom: "5px" } }
};

export const THEME: ITheme = {
  breakpoints: BREAKPOINTS,
  countedListItem: THEME_COUNTED_LIST_ITEM,
  eventCard: THEME_EVENT_CARD,
  navBar: THEME_NAV_BAR,
  pageHeader: THEME_PAGE_HEADER,
  pageSection: THEME_PAGE_SECTION,
  pageLayout: THEME_PAGE_LAYOUT,
  recipe: THEME_RECIPE_CARD,
  roundedSymbol: THEME_ROUNDED_SYMBOL,
  vinyl: THEME_VINYL_CARD,

  fadedOpacity: 0.5,
  fontFamily,
  listItemGroupVerticalSpacing: "10px",
  scrollbarSize
};
