import styled, { css } from "styled-components";

import { Li } from "./Lists";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexSpan = styled.span`
  display: flex;
`;

export const FlexRowGrow = styled(FlexRow)`
  flex: 1;
`;

export const FlexSpanGrow = styled(FlexSpan)`
  flex: 1;
`;

export const FlexLiGrow = styled(Li)`
  display: flex;
  flex: 1;
`;

export const DynamicFontWeightFlexRow = styled(FlexRow)(
  ({ panelIsVisible }: IPanelIsVisible) =>
    panelIsVisible &&
    css`
      * {
        font-weight: bold;
      }
    `
);
