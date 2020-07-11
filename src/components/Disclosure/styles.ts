import styled, { css } from "styled-components";

import { ENABLE_TRANSITIONS } from "config";

import { IBodyHeight } from "./";

interface IPanelContainer extends IThemeProp {
  bodyHeight: IBodyHeight;
}

export const PanelContainer = styled.div(
  ({ bodyHeight, theme: { disclosure } }: IPanelContainer) =>
    css`
      overflow: hidden;
      max-height: 0;

      &.initial-state {
        max-height: unset;
      }

      &.panel-visible {
        max-height: ${bodyHeight}px;
      }

      ${ENABLE_TRANSITIONS &&
      css`
        transition: ${disclosure.transition};
      `}
    `
);

export const ClickableDiv = styled.div`
  cursor: pointer;
`;
