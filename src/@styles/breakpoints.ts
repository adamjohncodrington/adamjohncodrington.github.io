interface IBreakpoint {
  maxWidth?: PxValue;
  minWidth?: PxValue;
  maxHeight?: PxValue;
  minHeight?: PxValue;
}

interface IBreakpoints {
  phoneSmall: IBreakpoint;
  phoneLarge: IBreakpoint;
  tablet: IBreakpoint;
  laptop: IBreakpoint;
  desktop: IBreakpoint;
  largeDesktop: IBreakpoint;
}

export const BREAKPOINTS: IBreakpoints = {
  phoneSmall: { maxWidth: "576px", maxHeight: "568px" },
  phoneLarge: {
    minWidth: "577px",
    maxWidth: "767px",
    minHeight: "569px",
    maxHeight: "667px"
  },
  tablet: { minWidth: "768px", maxWidth: "980px" },
  laptop: { minWidth: "981px", maxWidth: "1280px", maxHeight: "720px" },
  desktop: { minWidth: "1281px", maxWidth: "1689px", minHeight: "721px" },
  largeDesktop: { minWidth: "1690px" }
};
