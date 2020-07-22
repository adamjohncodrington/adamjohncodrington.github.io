import React, { FC } from "react";
import styled, { css } from "styled-components";

import { Ul, Li, FlexRow } from "primitives";
import { UNICODE } from "@constants";

interface IStyledLi extends I_Theme {
  addPaddingTop?: boolean;
}

const PaddedLi = styled(Li)(
  ({ addPaddingTop, theme: { listItemGroupVerticalSpacing } }: IStyledLi) =>
    addPaddingTop &&
    css`
      padding-top: ${listItemGroupVerticalSpacing};
    `
);

const PaddedSpan = styled.span`
  margin-right: 10px;
`;

interface IList {
  title: string;
  listItems: Array<IListItemWithPaddingTopFlag>;
  showBullets?: boolean;
}

export const List: FC<IList> = ({ title, listItems, showBullets }) => (
  <Ul>
    <strong>{title}</strong>

    {listItems.map(
      ({ text, addPaddingTop }: IListItemWithPaddingTopFlag, index: number) => (
        <PaddedLi key={index} addPaddingTop={addPaddingTop}>
          {showBullets ? (
            <FlexRow>
              <PaddedSpan>{UNICODE.CIRCLE}</PaddedSpan>
              <span>{text} </span>
            </FlexRow>
          ) : (
            <span>{text}</span>
          )}
        </PaddedLi>
      )
    )}
  </Ul>
);
