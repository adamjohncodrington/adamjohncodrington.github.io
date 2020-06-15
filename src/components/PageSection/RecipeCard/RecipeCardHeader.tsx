import React from "react";
import styled, { css } from "styled-components";

import { Circle, Headers } from "../../../primitives";

type IStyledH3 = { favourite: boolean };
const StyledH3 = styled(Headers.H3)`
  font-weight: 300;
  flex: 1;

  ${(props: IStyledH3) =>
    props.favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}
`;

const FlexRow = styled.div`
  display: flex;
`;

type Props = { title: string; diet: IRecipeDiet; favourite?: boolean };

export const RecipeCardHeader: React.FC<Props> = ({
  title,
  diet: { abbreviation, color },
  favourite = false
}) => (
  <FlexRow>
    <StyledH3 favourite={favourite}>{title}</StyledH3>(
    <Circle fontSize="13px" size="25px" invert color={color}>
      {abbreviation}
    </Circle>
    )
  </FlexRow>
);
