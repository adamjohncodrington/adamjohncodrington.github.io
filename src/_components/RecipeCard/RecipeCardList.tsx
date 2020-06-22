import React from "react";
import styled, { css } from "styled-components";

import { Ul, Li } from "_primitives";

interface StyledLiProps extends IThemeProp {
  addPaddingTop: boolean | undefined;
}

const StyledLi = styled(Li)`
  ${({
    addPaddingTop,
    theme: { listItemGroupVerticalSpacing }
  }: StyledLiProps) =>
    addPaddingTop &&
    css`
      padding-top: ${listItemGroupVerticalSpacing};
    `}
`;

interface RecipeCardListProps {
  title: string;
  items: Array<IListItemWithPaddingTopFlag>;
  showBullets?: boolean;
}

export const RecipeCardList: React.FC<RecipeCardListProps> = ({
  title,
  items,
  showBullets = false
}) => (
  <Ul showBullets={showBullets}>
    <strong>{title}</strong>

    {items.map(
      ({ text, addPaddingTop }: IListItemWithPaddingTopFlag, index: number) => (
        <StyledLi key={index} addPaddingTop={addPaddingTop}>
          {text}
        </StyledLi>
      )
    )}
  </Ul>
);
