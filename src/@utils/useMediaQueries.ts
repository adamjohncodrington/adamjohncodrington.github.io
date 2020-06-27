import { useMediaQuery } from "react-responsive";

import { BREAKPOINTS } from "@styles";

interface IUseMediaQueries {
  isPhoneSmall: boolean;
  isPhoneLarge: boolean;
  isPhone: boolean;
  isTabletSmall: boolean;
  isTabletSmallOrLarger: boolean;
  isTabletLarge: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isLaptopOrDesktop: boolean;
  isRetina: boolean;
  isPortrait: boolean;
  isLandscape: boolean;

  displayPageSectionsIn1Column: boolean;
  displayPageSectionsIn2Columns: boolean;
}

export const useMediaQueries = (): IUseMediaQueries => {
  const isPhoneSmall: boolean = useMediaQuery({
    maxWidth: BREAKPOINTS.phoneSmall.maxWidth
  });

  const isPhoneLarge: boolean = useMediaQuery({
    minWidth: BREAKPOINTS.phoneLarge.minWidth,
    maxWidth: BREAKPOINTS.phoneLarge.maxWidth
  });

  const isPhone: boolean = isPhoneSmall || isPhoneLarge;

  const isTabletSmallOrLarger: boolean = useMediaQuery({
    minWidth: BREAKPOINTS.tabletSmall.minWidth
  });

  const isTabletSmall: boolean = useMediaQuery({
    minWidth: BREAKPOINTS.tabletSmall.minWidth,
    maxWidth: BREAKPOINTS.tabletSmall.maxWidth
  });

  const isTabletLarge: boolean = useMediaQuery({
    minWidth: BREAKPOINTS.tabletLarge.minWidth,
    maxWidth: BREAKPOINTS.tabletLarge.maxWidth
  });

  const isTablet: boolean = isTabletSmall || isTabletLarge;

  const isLaptop: boolean = useMediaQuery({
    minWidth: BREAKPOINTS.laptop.minWidth,
    maxWidth: BREAKPOINTS.laptop.maxWidth
  });

  const isDesktop: boolean = useMediaQuery({
    minWidth: BREAKPOINTS.desktop.minWidth
  });

  const isLaptopOrDesktop: boolean = isLaptop || isDesktop;

  const isPortrait: boolean = useMediaQuery({ orientation: "portrait" });

  const isLandscape: boolean = useMediaQuery({ orientation: "landscape" });

  const isRetina: boolean = useMediaQuery({ minResolution: "2dppx" });

  const displayPageSectionsIn1Column: boolean = !isTabletSmallOrLarger;
  const displayPageSectionsIn2Columns: boolean = isTabletSmallOrLarger;

  return {
    isPhoneSmall,
    isPhoneLarge,
    isPhone,
    isTabletSmall,
    isTabletSmallOrLarger,
    isTabletLarge,
    isTablet,
    isLaptop,
    isDesktop,
    isLaptopOrDesktop,
    isRetina,
    isPortrait,
    isLandscape,

    displayPageSectionsIn1Column,
    displayPageSectionsIn2Columns
  };
};
