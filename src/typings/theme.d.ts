type ColorValue = string;
type FontWeightValue = string;
type PxValue = string;
type RemValue = string;
type BoxShadowValue = string;
type TransitionValue = string;
type PercentageValue = string;

interface IThemeBreakpoints {
  breakpoints: IBreakpoints;
}

interface IThemeCountedListItem {
  countedListItem: { count: { margin: { left: PxValue }; width: PxValue } };
}

interface IThemeEventCard {
  eventCard: {
    companySymbol: { color: ColorValue; spaceBetweenSymbols: PxValue };
    notFirstChild: { margin: { top: PxValue } };
    photo: { size: PxValue };
  };
}

interface IThemeNavBar {
  navBar: {
    background: ColorValue;
    icon: {
      color: ColorValue;
      defaultHoverColor: ColorValue;
      hoverShrinkSize: PxValue;
      size: PxValue;
    };
    padding: { vertical: PxValue };
  };
}

interface IThemePageHeader {
  pageHeader: {
    count: { padding: { all: PxValue } };
    margin: { bottom: PxValue };
  };
}

interface IThemePageSection {
  pageSection: {
    background: ColorValue;
    borderRadius: PxValue;
    boxShadow: BoxShadowValue;
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
  };
}

interface IThemePageLayout {
  pageLayout: { columnGap: PxValue; padding: { all: PxValue } };
}

interface IThemeRecipeCard {
  recipe: {
    dietSymbol: {
      margin: { top: PxValue };
    };
    panel: {
      children: { padding: { top: PxValue } };
      padding: { top: PxValue };
    };
    photo: { size: PxValue };
    portionCost: { margin: { top: PxValue } };
    title: { fontWeight: FontWeightValue };
  };
}

interface IThemeRoundedSymbol {
  roundedSymbol: {
    borderRadius: PercentageValue;
    fontSize: PercentageValue;
    size: PxValue;
    textColor: ColorValue;
  };
}

interface IThemeVinylCard {
  vinyl: {
    signed: { color: ColorValue };
    artwork: { margin: { right: PxValue }; size: PxValue };
    notLastChild: { margin: { bottom: PxValue } };
  };
}

interface ITheme
  extends IThemeBreakpoints,
    IThemeCountedListItem,
    IThemeEventCard,
    IThemeNavBar,
    IThemePageHeader,
    IThemePageLayout,
    IThemePageSection,
    IThemeRecipeCard,
    IThemeRoundedSymbol,
    IThemeVinylCard {
  fadedOpacity: number;
  fontFamily: IFontFamily;
  listItemGroupVerticalSpacing: PxValue;
  scrollbarSize: IScrollbarSize;
}

interface IThemeProp {
  theme: ITheme;
}
