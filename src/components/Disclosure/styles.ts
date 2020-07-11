import styled, { css } from "styled-components";

interface IPanelContainer {
  panelIsVisible: boolean;
}

export const PanelContainer = styled.div(
  ({ panelIsVisible }: IPanelContainer) =>
    !panelIsVisible &&
    css`
      overflow: hidden;
      max-height: 0;
    `
);

export const ClickableDiv = styled.div`
  cursor: pointer;
`;
