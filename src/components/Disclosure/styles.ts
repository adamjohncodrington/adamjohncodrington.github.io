import styled, { css } from "styled-components";

import { IBodyHeight } from "./";

interface PanelContainerProps extends IThemeProp {
  bodyHeight: IBodyHeight;
}
export const PanelContainer = styled.div`
  &.initial-state {
    max-height: unset;
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
  max-height: 0;

  &.panel-visible {
    max-height: ${(props: PanelContainerProps) => props.bodyHeight}px;
  }
`;

interface ClickableRegionProps {
  initiallyExpandedAlways?: boolean;
}
export const ClickableRegion = styled.div`
  ${(props: ClickableRegionProps) =>
    !props.initiallyExpandedAlways &&
    css`
      cursor: pointer;
    `}
`;
