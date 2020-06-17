import styled, { css } from "styled-components";

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

const ZERO_MARGIN_AND_PADDING = css`
  margin: 0;
  padding: 0;
`;

const H1 = styled.h1`
  font-size: ${FONT_SIZES.XL};
  ${ZERO_MARGIN_AND_PADDING}
`;

const H2 = styled.h2`
  font-size: ${FONT_SIZES.L};
  ${ZERO_MARGIN_AND_PADDING}
`;

const H3 = styled.h3`
  font-size: ${FONT_SIZES.M};
  ${ZERO_MARGIN_AND_PADDING}
`;

export const Headers = {
  H1,
  H2,
  H3
};

export const Text = {
  P: { M: P_M, S: P_S, XS: P_XS },
  Span: { M: Span_M, SM: Span_SM, S: Span_S }
};
