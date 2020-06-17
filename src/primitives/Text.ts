import styled from "styled-components";

import { FONT_SIZES, CSS } from "../styles";

export const SeventyFivePercentSpan = styled.span`
  font-size: 75%;
`;

const H1 = styled.h1`
  ${CSS.ZERO_MARGIN_AND_PADDING}
  font-size: ${FONT_SIZES.XxL};
`;

const H2 = styled.h2`
  ${CSS.ZERO_MARGIN_AND_PADDING}
  font-size: ${FONT_SIZES.XL};
`;

const H3 = styled.h3`
  ${CSS.ZERO_MARGIN_AND_PADDING}
  font-size: ${FONT_SIZES.L};
`;

export const Headers = {
  PageTitle: H1,
  PageSectionTitle: H2,
  RecipeCardTitle: H3,
  EventCardTitle: H3
};
