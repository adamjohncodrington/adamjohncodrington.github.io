import styled, { css } from "styled-components";

import { FlexRow, H2 } from "primitives";

export const PageSectionTitle = styled(H2)`
  text-transform: lowercase;
`;

export const PageSectionHeaderContainer = styled(FlexRow)(
  ({ theme: { pageSection } }: I_Theme) => css`
    padding: ${pageSection.header.padding.vertical} 0;
  `
);

export const PageSectionCount = styled.span(
  ({ theme: { pageSection } }: I_Theme) => css`
    margin-left: ${pageSection.count.margin.left};
  `
);

export const PageSectionStarredCount = styled(PageSectionCount)(
  ({ theme: { fadedOpacity } }: I_Theme) => css`
    opacity: ${fadedOpacity};
  `
);

export const PageSectionSvgContainer = styled.div(
  ({
    theme: {
      pageSection: {
        icon: { size }
      }
    }
  }: I_Theme) => css`
    display: flex;
    align-items: center;

    svg {
      height: ${size};
      width: ${size};
    }
  `
);
