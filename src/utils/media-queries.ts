import { useMediaQuery } from "react-responsive";

import { BREAKPOINTS } from "styles";

type UseMediaQueries = { pageUses2Columns: boolean };

export const useMediaQueries = (): UseMediaQueries => {
  const pageUses2Columns: boolean = useMediaQuery({
    minWidth: BREAKPOINTS.tablet.minWidth
  });

  return { pageUses2Columns };
};
