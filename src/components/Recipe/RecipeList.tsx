import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Ul, Li, FlexRow } from "primitives";
import { UNICODE } from "@constants";

interface IStyledLi extends ThemeProp {
  addPaddingTop?: boolean;
}

const StyledRecipeListItem = styled(Li)(
  ({
    addPaddingTop,
    theme: { listItemGroupVerticalSpacing }
  }: IStyledLi) => css`
    font-size: 87.5%;

    ${addPaddingTop &&
    css`
      padding-top: ${listItemGroupVerticalSpacing};
    `}
  `
);

const StyledRecipeListItemRow = styled(FlexRow)`
  *:first-child {
    margin-right: 6px;
  }
`;

const StyledListTitle = styled.div`
  padding-bottom: 2px;
  font-weight: bold;
`;

interface IRecipeList {
  title: string;
  listItems: IRecipeListItem[];
  showBullets?: boolean;
}

export const List: FC<IRecipeList> = ({ title, listItems, showBullets }) => (
  <Ul>
    <StyledListTitle>{title}</StyledListTitle>

    {listItems.map(
      ({ listItemText, addPaddingTop }: IRecipeListItem, index: number) => (
        <StyledRecipeListItem key={index} addPaddingTop={addPaddingTop}>
          {showBullets ? (
            <StyledRecipeListItemRow>
              <span>{UNICODE.CIRCLE}</span>
              <span>{listItemText} </span>
            </StyledRecipeListItemRow>
          ) : (
            <span>{listItemText}</span>
          )}
        </StyledRecipeListItem>
      )
    )}
  </Ul>
);
