import styled from "styled-components";

export const FlexRowSpan = styled.span`
  display: flex;
`;

export const FlexRowSpanGrow = styled(FlexRowSpan)`
  flex: 1;
`;

export const FlexRowDiv = styled.div`
  display: flex;
`;

export const FlexRowDivGrow = styled(FlexRowDiv)`
  flex: 1;
`;

export const FlexColDivumn = styled(FlexRowDiv)`
  flex-direction: column;
`;
