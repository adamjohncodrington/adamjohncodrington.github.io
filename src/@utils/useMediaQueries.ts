import { useMediaQuery } from "react-responsive";

import { BREAKPOINTS } from "@styles";

interface IUseMediaQueries {
  pageUses2Columns: boolean;
}

export const useMediaQueries = (): IUseMediaQueries => {
  const pageUses2Columns: boolean = useMediaQuery({
    minWidth: BREAKPOINTS.tablet.minWidth
  });

  return { pageUses2Columns };
};
