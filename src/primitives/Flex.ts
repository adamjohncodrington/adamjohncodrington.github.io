import styled from "styled-components";

import { Li } from "./Lists";

export const FlexSpan = styled.span`
  display: flex;
`;

export const FlexSpanGrow = styled(FlexSpan)`
  flex: 1;
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const FlexRowGrow = styled(FlexRow)`
  flex: 1;
`;

export const FlexColumn = styled(FlexRow)`
  flex-direction: column;
`;

export const FlexLiGrow = styled(Li)`
  display: flex;
  flex: 1;
`;
