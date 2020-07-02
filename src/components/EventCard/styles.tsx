import styled, { css } from "styled-components";

import { FlexColumn, FlexRow } from "primitives";
import { CSS } from "styles";

export const EventCardNote = styled.div(() => CSS.FONT_SIZE_75_PERCENT);

export const EventCardCountdown = styled.div`
  font-weight: bold;
`;

export const EventCardMainContainer = styled(FlexColumn)(
  ({ theme: { eventCard } }: IThemeProp) => css`
    > *:not(:first-child) {
      margin-top: ${eventCard.notFirstChild.margin.top};
    }
  `
);

export const EventCardDateText = styled.div(() => CSS.FONT_SIZE_75_PERCENT);

export const EventCardCompanyContainer = styled(FlexRow)(
  ({ theme: { eventCard } }: IThemeProp) => css`
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: flex-end;

    > * {
      margin-left: ${eventCard.companySymbol.spaceBetweenSymbols};
      margin-bottom: ${eventCard.companySymbol.spaceBetweenSymbols};
    }
  `
);
