import styled, { css } from "styled-components";

import { SvgIcon, FlexRow, Ul } from "../../primitives";

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

interface SectionPanelListProps extends IThemeProp {
  isEventCards?: boolean;
}
export const SectionPanelList = styled(Ul)`
  ${({
    isEventCards,
    theme: {
      countedList,
      eventCardList,
      section: { padding }
    }
  }: SectionPanelListProps) => css`
    padding-bottom: ${padding.bottom};

    > * {
      border-bottom: ${countedList.border.bottom};
      padding: ${isEventCards
        ? `${eventCardList.padding.vertical} 0`
        : `${countedList.padding.vertical} 0`};
    }

    > *:last-child {
      ${isEventCards &&
      `padding-bottom: ${eventCardList.finalEventCardPaddingBottom};`}
      border-bottom: 0;
    }

    ${isEventCards &&
    css`
      > *:first-child {
        padding-top: 0;
      }
    `}
  `}
`;

export const RecipeGroupList = styled(Ul)`
  ${({
    theme: {
      recipe: { border, title, first, last }
    }
  }: IThemeProp) => css`
    > * {
      border-bottom: ${border.bottom};
      padding: ${title.padding.vertical} 0;
    }

    > *:first-child {
      padding-top: ${first.padding.top};
    }

    > *:last-child {
      border-bottom: 0;
      padding-bottom: ${last.padding.bottom};
    }
  `}
`;

export const PageSectionHeaderContainer = styled(FlexRow)`
  padding: ${({
    theme: {
      section: { header }
    }
  }: IThemeProp) => header.padding};
`;

export const PageSectionPrimaryCount = styled.span`
  margin-left: ${({
    theme: {
      section: {
        count: { margin }
      }
    }
  }: IThemeProp) => margin.left};
`;

export const PageSectionSecondaryCount = styled(PageSectionPrimaryCount)`
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
