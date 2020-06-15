import styled from "styled-components";

import { FONT_SIZES } from "../styles";

const P = styled.p`
  margin: 0;
`;

const P_M = styled(P)`
  font-size: ${FONT_SIZES.M};
`;

const P_S = styled(P)`
  font-size: ${FONT_SIZES.S};
`;

const P_XS = styled(P)`
  font-size: ${FONT_SIZES.XS};
`;

const Span_M = styled.span`
  font-size: ${FONT_SIZES.M};
`;

const Span_S = styled.span`
  font-size: ${FONT_SIZES.S};
`;

const Span_SM = styled.span`
  font-size: ${FONT_SIZES.SM};
`;

export const Text = {
  P: { M: P_M, S: P_S, XS: P_XS },
  Span: { M: Span_M, SM: Span_SM, S: Span_S }
};
