import { useMediaQuery } from "react-responsive";

interface IScreenSizes {
  isDesktop: boolean;
  isPhone: boolean;
}

export const useScreenWidths = (): IScreenSizes => {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width: 1000px)"
  });

  const isPhone: boolean = !isDesktop;

  return { isDesktop, isPhone };
};
