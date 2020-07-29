import styled, { css } from "styled-components";

interface IPanelContainer {
  panelVisible: boolean;
}

export const PanelContainer = styled.div(
  ({ panelVisible }: IPanelContainer) =>
    !panelVisible &&
    css`
      overflow: hidden;
      max-height: 0;
    `
);

export const StyledDiv = styled.div`
  cursor: pointer;
`;

export const DisclosureContainer = styled.div``;
