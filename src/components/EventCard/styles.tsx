import styled, { css } from "styled-components";

import { FlexColumn, FlexRow } from "primitives";
import { CSS } from "styles";

export const EventCardNote = styled.div(() => CSS.FONT_SIZE_75_PERCENT);

export const EventCardCountdown = styled.div`
  font-weight: bold;
`;

export const EventCardTextContainer = styled(FlexColumn)(
  ({ theme: { eventCard } }: IThemeProp) => css`
    > *:not(:first-child) {
      margin-top: ${eventCard.notFirstChild.margin.top};
    }
  `
);

export const EventCardSecondaryBody = styled.div`
  ${CSS.FONT_SIZE_75_PERCENT}
`;

export const EventCardSymbolsContainer = styled(FlexRow)(
  ({
    theme: {
      eventCard: {
        companySymbol: { spaceBetweenSymbols }
      }
    }
  }: IThemeProp) => css`
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-end;

    > * {
      margin-left: ${spaceBetweenSymbols};
      margin-bottom: ${spaceBetweenSymbols};
    }
  `
);
