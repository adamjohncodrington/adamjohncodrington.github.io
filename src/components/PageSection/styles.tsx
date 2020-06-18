import styled, { css } from "styled-components";

import { SvgIcon, FlexRow, Ul } from "../../primitives";

export const PageSectionContainer = styled.section`
  ${({
    theme: {
      section: { background, boxShadow, borderRadius, padding, margin }
    }
  }: ThemeProps) => css`
    background: ${background};
    box-shadow: ${boxShadow};
    border-radius: ${borderRadius};
    padding: 0 ${padding.horizontal};
    margin-bottom: ${margin.bottom};
  `}
`;

interface SectionPanelListProps extends ThemeProps {
  isEventCards?: boolean;
}
export const SectionPanelList = styled(Ul)`
  ${({
    isEventCards,
    theme: {
      section: {
        body: { padding, countedList, eventCardList }
      }
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
  }: ThemeProps) => css`
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
  padding: ${props => props.theme.section.header.padding};
`;

export const PageSectionPrimaryCount = styled.span`
  margin-left: ${props => props.theme.section.count.margin.left};
`;

export const PageSectionSecondaryCount = styled(PageSectionPrimaryCount)`
  opacity: ${props => props.theme.fadedOpacity};
`;

export const StyledIcon = styled(SvgIcon)`
  padding-top: ${props => props.theme.section.icon.padding.top};
`;
