import styled, { css } from "styled-components";

import { SvgIcon, FlexRow, H2 } from "primitives";

export const PageSectionTitle = styled(H2)`
  text-transform: lowercase;
`;

export const PageSectionContainer = styled.section`
  ${({
    theme: {
      section: { background, boxShadow, borderRadius, padding, margin }
    }
  }) => css`
    background: ${background};
    box-shadow: ${boxShadow};
    border-radius: ${borderRadius};
    padding: 0 ${padding.horizontal};
    margin-bottom: ${margin.bottom};
  `}
`;

export const PageSectionHeaderContainer = styled(FlexRow)`
  padding: ${({
    theme: {
      section: { header }
    }
  }: IThemeProp) => header.padding};
`;

export const PageSectionCount = styled.span`
  margin-left: ${({
    theme: {
      section: {
        count: { margin }
      }
    }
  }: IThemeProp) => margin.left};
`;

export const PageSectionStarredCount = styled(PageSectionCount)`
  opacity: ${({ theme: { fadedOpacity } }: IThemeProp) => fadedOpacity};
`;

export const StyledIcon = styled(SvgIcon)`
  padding-top: ${({
    theme: {
      section: {
        icon: { padding }
      }
    }
  }: IThemeProp) => padding.top};
`;
