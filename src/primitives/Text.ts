import styled, { css } from "styled-components";

import { FONT_SIZES } from "../styles";

const P = styled.p`
  margin: 0;
`;

const P_M = styled(P)`
  font-size: ${FONT_SIZES.M};
`;

const P_S = styled(P)`
  font-size: ${FONT_SIZES.S};
`;

const P_XS = styled(P)`
  font-size: ${FONT_SIZES.XS};
`;

const Span_M = styled.span`
  font-size: ${FONT_SIZES.M};
`;

const Span_S = styled.span`
  font-size: ${FONT_SIZES.S};
`;

const Span_SM = styled.span`
  font-size: ${FONT_SIZES.SM};
`;

const ZERO_MARGIN_AND_PADDING = css`
  margin: 0;
  padding: 0;
`;

const H1 = styled.h1`
  font-size: ${FONT_SIZES.XL};
  ${ZERO_MARGIN_AND_PADDING}
`;

const H2 = styled.h2`
  font-size: ${FONT_SIZES.L};
  ${ZERO_MARGIN_AND_PADDING}
`;

const H3 = styled.h3`
  font-size: ${FONT_SIZES.M};
  ${ZERO_MARGIN_AND_PADDING}
`;

export const Text = {
  P: { M: P_M, S: P_S, XS: P_XS },
  Span: { M: Span_M, SM: Span_SM, S: Span_S }
};

interface ICountedListItemPastCount extends ThemeProps {
  leaderboard: boolean;
}
const CountedListItemPastCount = styled(Text.P.S)`
  text-align: right;
  margin-left: ${(props: ICountedListItemPastCount) =>
    props.leaderboard ? "10px" : 0};
  width: ${(props: ICountedListItemPastCount) =>
    props.theme.section.body.basicList.count.width};
  font-weight: bold;
`;

const CountedListItemFutureCount = styled(CountedListItemPastCount)`
  opacity: ${(props: ThemeProps) => props.theme.fadedOpacity};
`;

interface ListEntryProps extends ThemeProps {
  favourite?: boolean;
  star?: boolean;
  faded: boolean;
}

const ListEntry = styled(Text.P.S)`
  ${(props: ListEntryProps) =>
    props.favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}

  ${(props: ListEntryProps) =>
    props.star &&
    css`
      ::before {
        content: "★ ";
      }
    `}

  flex: 1;
  ${(props: ListEntryProps) =>
    props.faded && `opacity: ${props.theme.fadedOpacity};`}
`;

type EventCardTitleProps = { favourite: boolean };
const EventCardTitle = styled(Text.P.M)`
  ${({ favourite }: EventCardTitleProps) =>
    favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}

  font-weight: bold;
  text-transform: uppercase;
`;

const EventCardSubtitle = styled(Text.P.S)`
  font-weight: bold;
  text-transform: uppercase;
`;

const EventCardBody = styled(Text.P.S)`
  padding: 1px 0 3px;
`;

const EventCardDates = styled(Text.P.XS)``;

const EventCardDisclaimer = styled(Text.P.XS)`
  margin: 8px 0 0 4px;
`;

const EventCardCountdown = styled(Text.P.S)`
  font-weight: bold;
  margin-top: 5px;
  text-align: left;
`;

const PageSectionPrimaryCount = styled(Text.Span.S)`
  margin-left: ${props => props.theme.section.count.margin.left};
`;

const PageSectionSecondaryCount = styled(PageSectionPrimaryCount)`
  opacity: ${props => props.theme.fadedOpacity};
`;

const PageTitlePrimaryCount = styled(Text.Span.SM)`
  padding: ${props => props.theme.page.count.padding};
`;

const PageTitleSecondaryCount = styled(PageTitlePrimaryCount)`
  opacity: ${props => props.theme.fadedOpacity};
`;

const PageTitle = H1;
const PageSectionTitle = H2;

type IRecipeCardTitle = { favourite?: boolean };
const RecipeCardTitle = styled(H3)`
  font-weight: 300;
  flex: 1;

  ${(props: IRecipeCardTitle) =>
    props.favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}
`;

export const GlobalText = {
  CountedListItemPastCount,
  CountedListItemFutureCount,
  EventCardTitle,
  EventCardSubtitle,
  EventCardDisclaimer,
  EventCardDates,
  EventCardBody,
  EventCardCountdown,
  ListEntry,
  PageSectionPrimaryCount,
  PageSectionSecondaryCount,
  PageTitlePrimaryCount,
  PageTitleSecondaryCount,
  PageSectionTitle,
  PageTitle,
  RecipeCardTitle
};
