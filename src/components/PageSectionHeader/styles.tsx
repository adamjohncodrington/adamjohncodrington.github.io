import styled, { css } from "styled-components";

import { FlexRow, H2 } from "primitives";

export const PageSectionTitle = styled(H2)`
  text-transform: lowercase;
`;

export const PageSectionHeaderContainer = styled(FlexRow)`
  ${({ theme: { section } }: IThemeProp) => css`
    padding: ${section.header.padding};
  `}
`;

export const PageSectionCount = styled.span`
  ${({ theme: { section } }: IThemeProp) => css`
    margin-left: ${section.count.margin.left};
  `}
`;

export const PageSectionStarredCount = styled(PageSectionCount)`
  ${({ theme: { fadedOpacity } }: IThemeProp) => css`
    opacity: ${fadedOpacity};
  `}
`;
