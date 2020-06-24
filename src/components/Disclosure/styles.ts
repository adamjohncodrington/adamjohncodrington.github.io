import styled, { css } from "styled-components";

import { IBodyHeight } from "./";

interface PanelContainerProps extends IThemeProp {
  bodyHeight: IBodyHeight;
}
export const PanelContainer = styled.div`
  &.initial-state {
    max-height: unset;
    opacity: 0;
  }

  ${({
    theme: {
      section: { transition }
    }
  }: PanelContainerProps) =>
    css`
      transition: ${transition};
    `}

  overflow: hidden;
  opacity: 0;
  max-height: 0;

  &.panel-visible {
    max-height: ${(props: PanelContainerProps) => props.bodyHeight}px;
    opacity: 1;
  }
`;

interface ClickableRegionProps {
  initiallyExpanded?: boolean;
}
export const ClickableRegion = styled.div`
  ${(props: ClickableRegionProps) =>
    !props.initiallyExpanded &&
    css`
      cursor: pointer;
    `}
`;
