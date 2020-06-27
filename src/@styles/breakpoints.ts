interface IBreakpoints {
  phoneSmall: { maxWidth: PxValue };
  phoneLarge: { minWidth: PxValue; maxWidth: PxValue };
  tabletSmall: { minWidth: PxValue; maxWidth: PxValue };
  tabletLarge: { minWidth: PxValue; maxWidth: PxValue };
  laptop: { minWidth: PxValue; maxWidth: PxValue };
  desktop: { minWidth: PxValue };
}

export const BREAKPOINTS: IBreakpoints = {
  phoneSmall: { maxWidth: "360px" },
  phoneLarge: { minWidth: "361px", maxWidth: "767px" },
  tabletSmall: { minWidth: "768px", maxWidth: "1000px" },
  tabletLarge: { minWidth: "1001px", maxWidth: "1279px" },
  laptop: { minWidth: "1280px", maxWidth: "1480px" },
  desktop: { minWidth: "1481px" }
};
