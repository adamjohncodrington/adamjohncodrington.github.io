import styled, { css } from "styled-components";

import { FlexColumn, FlexRow, GridColumnDiv } from "primitives";
import { CSS } from "styles";

export const CardDisclaimer = styled.div`
  ${CSS.FONT_SIZE_65_PERCENT}
`;

export const CardTextContainer = styled(FlexColumn)(
  ({ theme: { card } }: I_Theme) => css`
    > *:not(:first-child) {
      margin-top: ${card.notFirstChild.margin.top};
    }
  `
);

export const CardSecondaryBody = styled.div`
  ${CSS.FONT_SIZE_75_PERCENT}
`;

export const CardSymbolsContainer = styled(FlexRow)(
  ({
    theme: {
      symbol: { spaceBetweenSymbols }
    }
  }: I_Theme) => css`
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-end;

    > * {
      margin-left: ${spaceBetweenSymbols};
      margin-bottom: ${spaceBetweenSymbols};
    }
  `
);

export const StyledCardHeaderContainer = styled(FlexRow)`
  a {
    margin-right: 10px;
  }
`;

export const StyledCardHeaderTextSymbolsContainer = styled(GridColumnDiv)`
  flex: 1;
  column-gap: 5px;
`;
