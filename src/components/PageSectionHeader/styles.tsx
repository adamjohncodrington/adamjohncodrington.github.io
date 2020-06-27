import styled, { css } from "styled-components";

import { FlexRow, H2 } from "primitives";

export const PageSectionTitle = styled(H2)`
  text-transform: lowercase;
`;

export const PageSectionHeaderContainer = styled(FlexRow)`
  ${({ theme: { pageSection } }: IThemeProp) => css`
    padding: ${pageSection.header.padding.vertical} 0;
  `}
`;

export const PageSectionCount = styled.span`
  ${({ theme: { pageSection } }: IThemeProp) => css`
    margin-left: ${pageSection.count.margin.left};
  `}
`;

export const PageSectionStarredCount = styled(PageSectionCount)`
  ${({ theme: { fadedOpacity } }: IThemeProp) => css`
    opacity: ${fadedOpacity};
  `}
`;
