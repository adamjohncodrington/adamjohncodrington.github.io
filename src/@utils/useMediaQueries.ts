import { useMediaQuery } from "react-responsive";

interface IUseMediaQueries {
  isDesktop: boolean;
  isPhone: boolean;
}

export const useMediaQueries = (): IUseMediaQueries => {
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width: 1000px)"
  });

  const isPhone: boolean = !isDesktop;

  return { isDesktop, isPhone };
};
