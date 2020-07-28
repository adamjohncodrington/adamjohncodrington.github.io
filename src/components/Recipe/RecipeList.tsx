import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Ul, Li, FlexRow } from "primitives";
import { UNICODE } from "@constants";

interface IStyledLi extends I_Theme {
  addPaddingTop?: boolean;
}

const StyledRecipeListItem = styled(Li)(
  ({ addPaddingTop, theme: { listItemGroupVerticalSpacing } }: IStyledLi) =>
    addPaddingTop &&
    css`
      padding-top: ${listItemGroupVerticalSpacing};
    `
);

const StyledRecipeListItemRow = styled(FlexRow)`
  *:first-child {
    margin-right: 6px;
  }
`;

interface IRecipeList {
  title: string;
  listItems: Array<IRecipeListItem>;
  showBullets?: boolean;
}

export const List: FC<IRecipeList> = ({ title, listItems, showBullets }) => (
  <Ul>
    <strong>{title}</strong>

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
