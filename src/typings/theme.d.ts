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
  XL: RemValue;
  L: RemValue;
  M: RemValue;
  SM: RemValue;
  S: RemValue;
  XS: RemValue;
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

interface ITheme_Section {
  body: {
    basicList: {
      border: { bottom: IBorder };
      count: { width: PxValue };
      padding: { vertical: PaddingValue };
    };
    eventCardList: { padding: { vertical: PaddingValue } };
    padding: { bottom: PxValue };
  };
  border: { bottom: IBorder };
  borderRadius: IBorderRadius;
  boxShadow: IBoxShadow;
  count: { margin: IMargin };
  header: { padding: PaddingValue };
  icon: { padding: { top: PaddingValue }; size: SvgSize };
  margin: IMargin;
  padding: { horizontal: PaddingValue };
}

interface ITheme_Recipes {
  border: { bottom: IBorder };
  image: { size: ImageSize };
  icon: { margin: IMargin; size: SvgSize };
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

type IBreakpoints = { phone: { maxWidth: PxValue } };

type ITheme = {
  animationDuration: number;
  fadedOpacity: number;
  circleBorder: IBorder;
  textColor: ColorValue;

  breakpoints: IBreakpoints;
  recipe: ITheme_Recipes;
  homePage: ITheme_Homepage;
  page: ITheme_Page;
  section: ITheme_Section;

  colors: IColors;
  scrollbarSize: IScrollbarSize;
  fontFamily: IFontFamily;
};

type ThemeProps = { theme: ITheme };
