type ColorValue = string;
type FontWeightValue = string;
type PxValue = string;
type RemValue = string;
type BoxShadowValue = string;
type TransitionValue = string;
type PercentageValue = string;

interface IThemeCountedListItem {
  count: { margin: { left: PxValue }; width: PxValue };
}

interface IThemeEventCard {
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
  comingSoon: { fontSize: PxValue; fontWeight: string };
  count: { margin: { left: PxValue } };
  header: { padding: { vertical: PxValue } };
  icon: { size: PxValue };
  margin: { bottom: PxValue };
  padding: { horizontal: PxValue; bottom: PxValue };
  panelList: {
    border: { bottom: PxValue };
    countedListItems: { padding: { vertical: PxValue } };
    padding: { bottom: PxValue };
    recipes: {
      firstRecipeCard: { padding: { top: PxValue } };
      lastRecipeCard: { padding: { bottom: PxValue } };
      padding: { vertical: PxValue };
    };
    regularCards: {
      lastRegularCard: { padding: { bottom: PxValue } };
      padding: { vertical: PxValue };
    };
  };
}

interface IThemePageLayout {
  columnGap: PxValue;
  padding: { all: PxValue };
}

interface IThemeRecipeCard {
  panel: {
    children: { padding: { top: PxValue } };
    padding: { top: PxValue };
  };
  portionCost: { margin: { top: PxValue } };
  title: { fontWeight: FontWeightValue };
}

interface IThemeRoundedSymbol {
  borderRadius: PercentageValue;
  color: {
    diet: ColorValue;
    friend: ColorValue;
    photo: ColorValue;
    video: ColorValue;
  };
  fontSize: PercentageValue;
  size: PxValue;
  textColor: ColorValue;
}

interface IThemeVinylCard {
  artwork: { margin: { right: PxValue }; size: PxValue };
  notLastChild: { margin: { bottom: PxValue } };
}

interface ITheme {
  breakpoints: IBreakpoints;
  countedListItem: IThemeCountedListItem;
  eventCard: IThemeEventCard;
  navBar: IThemeNavBar;
  pageHeader: IThemePageHeader;
  pageLayout: IThemePageLayout;
  pageSection: IThemePageSection;
  recipe: IThemeRecipeCard;
  roundedSymbol: IThemeRoundedSymbol;
  vinyl: IThemeVinylCard;

  fadedOpacity: number;
  fontFamily: IFontFamily;
  listItemGroupVerticalSpacing: PxValue;
  scrollbarSize: IScrollbarSize;
}

interface I_Theme {
  theme: ITheme;
}
