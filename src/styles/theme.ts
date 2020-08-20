import { rgba } from "polished";

import { BREAKPOINTS } from "./breakpoints";
import { COLORS } from "./colors";
import * as FONT_SIZES from "./font-sizes";
import { fontFamily, scrollbarSize } from "./GlobalStyle";

const { BLACK, GRAY_LIGHT, GRAY_DARK, WHITE } = COLORS;

const pageMargin: RemValue = "1rem";

const THEME_MINI_CARD_ITEM: IThemeMiniCard = {
  count: { margin: { left: "5px" }, width: "20px" }
};

const THEME_CARD: IThemeCard = {
  notFirstChild: { margin: { top: "5px" } }
};

const THEME_NAV_BAR: IThemeNavBar = {
  background: BLACK,
  height: "3.25rem",
  navLink: {
    background: { inactive: BLACK, active: "red" },
    margin: "0.625rem"
  },
  icon: {
    color: GRAY_LIGHT,
    size: "32px",
    defaultHoverColor: "#aaa",
    hoverShrinkSize: "0"
  }
};

const THEME_PAGE_SECTION: IThemePageSection = {
  background: GRAY_LIGHT,
  headline: { fontSize: FONT_SIZES.ML },
  count: { margin: { left: "7px" } },
  header: { padding: { vertical: "12px" } },
  icon: { size: "32px" },
  margin: { bottom: "20px" },
  padding: { horizontal: "12px", bottom: "5px" },
  panelList: {
    border: { bottom: `1px solid ${rgba("black", 0.1)}` },
    miniCards: { padding: { vertical: "5px" } },
    padding: { bottom: "5px" },
    recipes: {
      firstRecipe: { padding: { top: "10px" } },
      lastRecipe: { padding: { bottom: "15px" } },
      padding: { vertical: "10px" }
    },
    cards: {
      lastRegularCard: { padding: { bottom: "5px" } },
      padding: { vertical: "10px" }
    }
  }
};

const pageLayoutHorizontalSpacing: PxValue = "20px";
const THEME_PAGE_LAYOUT: IThemePageLayout = {
  columnGap: pageLayoutHorizontalSpacing,
  padding: {
    all: `0 ${pageLayoutHorizontalSpacing} 35px`
  }
};

const THEME_RECIPE_CARD: IThemeRecipe = {
  panel: {
    children: { padding: { top: "10px" } },
    padding: { top: "5px" }
  },
  portionCost: { margin: { top: "3px" } }
};

const THEME_SYMBOL: IThemeSymbol = {
  fontSize: "70%",
  iconSize: "60%",
  size: "26px",
  spaceBetweenSymbols: "5px",
  textColor: WHITE
};

const THEME_VINYL_CARD: IThemeAlbumCard = {
  photo: { margin: { right: "10px" }, size: "85px" },
  notLastChild: { margin: { bottom: "5px" } }
};

export const THEME: ITheme = {
  pageMargin,
  boxShadow: {
    dark: `0 0 3px ${GRAY_DARK}`,
    light: `0 0 3px ${GRAY_LIGHT}`
  },
  borderRadius: "0.375rem",
  breakpoints: BREAKPOINTS,
  miniCard: THEME_MINI_CARD_ITEM,
  card: THEME_CARD,
  navBar: THEME_NAV_BAR,
  pageSection: THEME_PAGE_SECTION,
  pageLayout: THEME_PAGE_LAYOUT,
  recipe: THEME_RECIPE_CARD,
  symbol: THEME_SYMBOL,
  vinyl: THEME_VINYL_CARD,

  fadedOpacity: 0.6,
  fontFamily,
  listItemGroupVerticalSpacing: "10px",
  scrollbarSize
};
