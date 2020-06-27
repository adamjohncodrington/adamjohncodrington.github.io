type RemValue = string;
type PxValue = string;
type VminVmaxValue = string;

type ColorValue = string;
type PaddingValue = string;
type IBorder = string;

type IMargin = { left?: PxValue; top?: PxValue; bottom?: PxValue };

type IBoxShadow = string;
type IBorderRadius = PxValue;
type IFontFamily = string;
type IScrollbarSize = RemValue;

interface ITheme_EventCardList {
  padding: { vertical: PaddingValue };
  finalEventCardPaddingBottom: PxValue;
}

interface ITheme_PageSection {
  background: ColorValue;
  borderRadius: IBorderRadius;
  boxShadow: IBoxShadow;
  count: { margin: IMargin };
  header: { padding: PaddingValue };
  icon: { padding: { top: PaddingValue }; size: PxValue };
  margin: IMargin;
  padding: { horizontal: PaddingValue; bottom: PaddingValue };
  transition: string;
}

type ITheme_Page = {
  count: { padding: PaddingValue };
  header: { margin: IMargin };
  icon: { margin: IMargin; size: PxValue };
  shell: { padding: PaddingValue };
};

interface IThemeBreakpoints {
  breakpoints: {
    phone: { maxWidth: PxValue };
    tablet: { minWidth: PxValue; maxWidth: PxValue };
    desktop: { minWidth: PxValue };
  };
}

interface IThemeCountedListItem {
  countedListItem: {
    count: {
      margin: { left: PxValue };
      width: PxValue;
    };
  };
}

interface IThemeRecipeCard {
  recipeCard: {
    dietSymbol: { margin: { top: PxValue }; size: PxValue };
    photo: { size: PxValue };
  };
}

interface IThemeNavBar {
  navBar: {
    background: ColorValue;
    icon: {
      color: ColorValue;
      hoverColor: ColorValue;
      hoverShrinkSize: PxValue;
      size: PxValue;
    };
    padding: { vertical: PxValue };
  };
}

interface IThemePageSectionPanelList {
  pageSectionPanelList: {
    border: { bottom: PxValue };
    countedListItems: {
      padding: { vertical: PxValue };
    };
    padding: { bottom: PxValue };
    recipeCards: {
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

interface ITheme
  extends IThemeBreakpoints,
    IThemeCountedListItem,
    IThemeNavBar,
    IThemePageSectionPanelList,
    IThemeRecipeCard {
  fadedOpacity: number;
  fontFamily: IFontFamily;
  listItemGroupVerticalSpacing: PxValue;
  scrollbarSize: IScrollbarSize;
  textColor: ColorValue;

  // Nested level
  page: ITheme_Page;
  section: ITheme_PageSection;
}

interface IThemeProp {
  theme: ITheme;
}
