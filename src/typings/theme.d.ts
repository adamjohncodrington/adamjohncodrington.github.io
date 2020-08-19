type PxValue = string;
type RemValue = string;
type ColorValue = string;
type FontWeightValue = string;
type BoxShadowValue = string;
type TransitionValue = string;
type PercentageValue = string;

interface IThemeMiniCard {
  count: { margin: { left: PxValue }; width: PxValue };
}

interface IThemeCard {
  notFirstChild: { margin: { top: PxValue } };
}

interface IThemeNavBar {
  background: { inactive: ColorValue; active: ColorValue };
  icon: {
    color: ColorValue;
    defaultHoverColor: ColorValue;
    hoverShrinkSize: PxValue;
    size: PxValue;
  };
  padding: { vertical: PxValue };
}

interface IThemePageHeader {
  count: { padding: { all: PxValue } };
  margin: { bottom: PxValue };
}

interface IThemePageSection {
  background: ColorValue;
  borderRadius: PxValue;
  headline: { fontSize: PxValue };
  count: { margin: { left: PxValue } };
  header: { padding: { vertical: PxValue } };
  icon: { size: PxValue };
  margin: { bottom: PxValue };
  padding: { horizontal: PxValue; bottom: PxValue };
  panelList: {
    border: { bottom: PxValue };
    miniCards: { padding: { vertical: PxValue } };
    padding: { bottom: PxValue };
    recipes: {
      firstRecipe: { padding: { top: PxValue } };
      lastRecipe: { padding: { bottom: PxValue } };
      padding: { vertical: PxValue };
    };
    cards: {
      lastRegularCard: { padding: { bottom: PxValue } };
      padding: { vertical: PxValue };
    };
  };
}

interface IThemePageLayout {
  columnGap: PxValue;
  padding: { all: PxValue };
}

interface IThemeRecipe {
  panel: {
    children: { padding: { top: PxValue } };
    padding: { top: PxValue };
  };
  portionCost: { margin: { top: PxValue } };
}

interface IThemeSymbol {
  fontSize: PercentageValue;
  iconSize: PxValue;
  size: PxValue;
  spaceBetweenSymbols: PxValue;
  textColor: ColorValue;
}

interface IThemeAlbumCard {
  photo: { margin: { right: PxValue }; size: PxValue };
  notLastChild: { margin: { bottom: PxValue } };
}

interface ITheme {
  breakpoints: IBreakpoints;
  boxShadow: BoxShadowValue;
  miniCard: IThemeMiniCard;
  card: IThemeCard;
  navBar: IThemeNavBar;
  pageHeader: IThemePageHeader;
  pageLayout: IThemePageLayout;
  pageSection: IThemePageSection;
  recipe: IThemeRecipe;
  symbol: IThemeSymbol;
  vinyl: IThemeAlbumCard;

  fadedOpacity: number;
  fontFamily: IFontFamily;
  listItemGroupVerticalSpacing: PxValue;
  scrollbarSize: IScrollbarSize;
}

interface I_Theme {
  theme: ITheme;
}
