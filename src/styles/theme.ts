import { rgba } from "polished";

import { BREAKPOINTS } from "./breakpoints";
import * as COLORS from "./colors";
import { FONT_SIZES } from "./font-sizes";
import { fontFamily, scrollbarSize } from "./GlobalStyle";

const THEME_COUNTED_LIST_ITEM: IThemeMiniCard = {
  count: { margin: { left: "5px" }, width: "20px" }
};

const THEME_CARD: IThemeCard = {
  companySymbol: { color: COLORS.BOULDER, spaceBetweenSymbols: "5px" },
  notFirstChild: { margin: { top: "5px" } },
  photo: { size: "75px" }
};

const THEME_NAV_BAR: IThemeNavBar = {
  background: COLORS.BLACK,
  icon: {
    color: COLORS.WHITE,
    size: "32px",
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
  background: COLORS.GAINSBORO,
  borderRadius: "10px",
  boxShadow: `0 1px 2px ${rgba(COLORS.GRAY, 0.5)}`,
  comingSoon: { fontSize: FONT_SIZES.L },
  count: { margin: { left: "7px" } },
  header: { padding: { vertical: "12px" } },
  icon: { size: "32px" },
  margin: { bottom: "20px" },
  padding: { horizontal: "12px", bottom: "5px" },
  panelList: {
    border: { bottom: `1px dashed ${rgba("black", 0.25)}` },
    miniCards: { padding: { vertical: "5px" } },
    padding: { bottom: "5px" },
    recipes: {
      firstRecipe: { padding: { top: "10px" } },
      lastRecipe: { padding: { bottom: "15px" } },
      padding: { vertical: "10px" }
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

const THEME_RECIPE_CARD: IThemeRecipe = {
  panel: {
    children: { padding: { top: "10px" } },
    padding: { top: "5px" }
  },
  portionCost: { margin: { top: "3px" } }
};

const THEME_SYMBOL: IThemeSymbol = {
  borderRadius: "25%",
  fontSize: "75%",
  iconSize: "60%",
  size: "26px",
  textColor: COLORS.WHITE
};

const THEME_VINYL_CARD: IThemeAlbumCard = {
  artwork: { margin: { right: "10px" }, size: "100px" },
  notLastChild: { margin: { bottom: "5px" } }
};

export const THEME: ITheme = {
  breakpoints: BREAKPOINTS,
  MiniCard: THEME_COUNTED_LIST_ITEM,
  card: THEME_CARD,
  navBar: THEME_NAV_BAR,
  pageHeader: THEME_PAGE_HEADER,
  pageSection: THEME_PAGE_SECTION,
  pageLayout: THEME_PAGE_LAYOUT,
  recipe: THEME_RECIPE_CARD,
  roundedSymbol: THEME_SYMBOL,
  vinyl: THEME_VINYL_CARD,

  fadedOpacity: 0.5,
  fontFamily,
  listItemGroupVerticalSpacing: "10px",
  scrollbarSize
};
