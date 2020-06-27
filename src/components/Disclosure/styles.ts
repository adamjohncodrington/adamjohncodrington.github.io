import styled, { css } from "styled-components";

import { IBodyHeight } from "./";

interface IPanelContainer extends IThemeProp {
  bodyHeight: IBodyHeight;
}

export const PanelContainer = styled.div`
  ${({ bodyHeight, theme: { disclosure } }: IPanelContainer) =>
    css`
      transition: ${disclosure.transition};
      overflow: hidden;
      max-height: 0;

      &.initial-state {
        max-height: unset;
      }

      &.panel-visible {
        max-height: ${bodyHeight}px;
      }
    `}
`;

export const ClickableDiv = styled.div`
  cursor: pointer;
`;
