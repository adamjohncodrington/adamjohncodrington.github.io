type Breakpoint = {
  maxWidth?: PxValue;
  minWidth?: PxValue;
  maxHeight?: PxValue;
  minHeight?: PxValue;
};

type Breakpoints = {
  [size in
    | "phoneSmall"
    | "phoneLarge"
    | "tablet"
    | "laptop"
    | "desktop"
    | "largeDesktop"]: Breakpoint;
};

export const BREAKPOINTS: Breakpoints = {
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
