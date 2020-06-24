type RemValue = string;
type PxValue = string;
type VminVmaxValue = string;

type ColorValue = string;
type PaddingValue = string;
type IBorder = string;

type IColors = { [color: string]: ColorValue };

type IMargin = { left?: PxValue; top?: PxValue; bottom?: PxValue };

type ImageSize = PxValue;
type SvgSize = PxValue;

interface IFontSizes {
  XxL: RemValue;
  XL: RemValue;
  L: RemValue;
  M: RemValue;
  S: RemValue;
}

type IBoxShadow = string;
type IBorderRadius = PxValue;
type IFontFamily = string;
type IScrollbarSize = RemValue;

interface ITheme_Homepage {
  icon: {
    padding: VminVmaxValue;
    size: { desktop: VminVmaxValue; phone: VminVmaxValue };
  };
}

interface ITheme_CountedList {
  border: { bottom: IBorder };
  count: { width: PxValue };
  padding: { vertical: PaddingValue };
}

interface ITheme_EventCardList {
  padding: { vertical: PaddingValue };
  finalEventCardPaddingBottom: PxValue;
}

interface ITheme_PageSection {
  background: ColorValue;
  border: { bottom: IBorder };
  borderRadius: IBorderRadius;
  boxShadow: IBoxShadow;
  count: { margin: IMargin };
  header: { padding: PaddingValue };
  icon: { padding: { top: PaddingValue }; size: SvgSize };
  margin: IMargin;
  padding: { horizontal: PaddingValue; bottom: PaddingValue };
  transition: string;
}

interface ITheme_Recipes {
  border: { bottom: IBorder };
  image: { size: ImageSize };
  dietIcon: { margin: IMargin; size: SvgSize };
  title: { padding: { vertical: PaddingValue } };
  first: { padding: { top: PaddingValue } };
  last: { padding: { bottom: PaddingValue } };
}

type ITheme_Page = {
  count: { padding: PaddingValue };
  header: { margin: IMargin };
  icon: { margin: IMargin; size: SvgSize };
  shell: { padding: PaddingValue };
};

type IBreakpoints = {
  tablet: { minWidth: PxValue };
  phone: { maxWidth: PxValue };
};

type ITheme = {
  // Surface level
  circleBorder: IBorder;
  fadedOpacity: number;
  fontFamily: IFontFamily;
  listItemGroupVerticalSpacing: PxValue;
  scrollbarSize: IScrollbarSize;
  textColor: ColorValue;

  // Nested level
  breakpoints: IBreakpoints;
  recipe: ITheme_Recipes;
  homePage: ITheme_Homepage;
  eventCardList: ITheme_EventCardList;
  page: ITheme_Page;
  section: ITheme_PageSection;
  countedList: ITheme_CountedList;
};

interface IThemeProp {
  theme: ITheme;
}
