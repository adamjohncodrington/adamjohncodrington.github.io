import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Ul, Li } from "primitives";

interface IStyledLi extends IThemeProp {
  addPaddingTop?: boolean;
}

const StyledLi = styled(Li)(
  ({ addPaddingTop, theme: { listItemGroupVerticalSpacing } }: IStyledLi) =>
    addPaddingTop &&
    css`
      padding-top: ${listItemGroupVerticalSpacing};
    `
);

interface ListProps {
  title: string;
  listItems: Array<IListItemWithPaddingTopFlag>;
  showBullets?: boolean;
}

export const List: FC<ListProps> = ({ title, listItems, showBullets }) => (
  <Ul showBullets={showBullets}>
    <strong>{title}</strong>

    {listItems.map(
      ({ text, addPaddingTop }: IListItemWithPaddingTopFlag, index: number) => (
        <StyledLi key={index} addPaddingTop={addPaddingTop}>
          <span>{text}</span>
        </StyledLi>
      )
    )}
  </Ul>
);
