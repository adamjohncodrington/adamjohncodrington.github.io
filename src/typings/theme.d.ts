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
  companySymbol: { color: ColorValue; spaceBetweenSymbols: PxValue };
  notFirstChild: { margin: { top: PxValue } };
  photo: { size: PxValue };
}

interface IThemeNavBar {
  background: ColorValue;
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
  boxShadow: BoxShadowValue;
  comingSoon: { fontSize: PxValue };
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
  borderRadius: PercentageValue;
  fontSize: PercentageValue;
  iconSize: PxValue;
  size: PxValue;
  textColor: ColorValue;
}

interface IThemeAlbumCard {
  artwork: { margin: { right: PxValue }; size: PxValue };
  notLastChild: { margin: { bottom: PxValue } };
}

interface ITheme {
  breakpoints: IBreakpoints;
  MiniCard: IThemeMiniCard;
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
