import styled from "styled-components";

import { FlexRowDiv } from "../../primitives";

export const CentredOnPhone = styled(FlexRowDiv)`
  @media (max-width: ${props => props.theme.breakpoints.phone.maxWidth}) {
    justify-content: center;
    text-align: center;
  }
`;
