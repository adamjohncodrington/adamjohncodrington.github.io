import styled, { css } from "styled-components";

import { FlexColumn, FlexRow, GridColumnDiv } from "primitives";
import { CSS } from "styles";

export const CardNote = styled.div`
  ${CSS.FONT_SIZE_75_PERCENT}
`;

export const CardCountdown = styled.div`
  font-weight: bold;
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
      card: {
        companySymbol: { spaceBetweenSymbols }
      }
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

export const StyledCardHeaderContainer = styled(FlexRow)``;

export const StyledCardHeaderTextSymbolsContainer = styled(GridColumnDiv)`
  flex: 1;
`;
