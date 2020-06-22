import styled from "styled-components";

import { FlexRow } from "primitives";

export const CentredOnPhone = styled(FlexRow)`
  @media (max-width: ${props => props.theme.breakpoints.phone.maxWidth}) {
    justify-content: center;
    text-align: center;
  }
`;
