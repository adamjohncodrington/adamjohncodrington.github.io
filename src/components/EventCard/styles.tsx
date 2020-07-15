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

export const EventCardSecondaryBody = styled.div(
  () => CSS.FONT_SIZE_75_PERCENT
);

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

// export const EventCardPhotosContainer = styled(FlexRow)`
//   margin-top: 10px;
//   justify-content: center;
// `;

export const EventCardPhotosContainer = styled.div(
  () => CSS.GRID_COLUMN_EQUAL_WIDTHS
);
