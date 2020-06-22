import React from "react";
import styled, { css } from "styled-components";

import { FlexLiGrow } from "primitives";

interface ICountedListItemPastCount extends IThemeProp {
  leaderboard?: boolean;
}
const CountedListItemPastCount = styled.span`
  ${({
    leaderboard,
    theme: {
      countedList: {
        count: { width },
        leaderboardAdditonalHorizontalSpace
      }
    }
  }: ICountedListItemPastCount) => css`
    font-weight: bold;
    text-align: right;
    width: ${width};
    margin-left: ${leaderboard ? leaderboardAdditonalHorizontalSpace : 0};
  `}
`;

const CountedListItemFutureCount = styled(CountedListItemPastCount)`
  opacity: ${(props: IThemeProp) => props.theme.fadedOpacity};
`;

interface CountedListItemTextProps extends IThemeProp {
  favourite?: boolean;
  star?: boolean;
  faded: boolean;
}

const CountedListItemText = styled.span`
  ${(props: CountedListItemTextProps) =>
    props.favourite &&
    css`
      ::before {
        content: "♥ ";
      }
    `}

  ${(props: CountedListItemTextProps) =>
    props.star &&
    css`
      ::before {
        content: "★ ";
      }
    `}

  flex: 1;
  ${(props: CountedListItemTextProps) =>
    props.faded && `opacity: ${props.theme.fadedOpacity};`}
`;

export const CountedListItem: React.FC<ICountedListItem> = ({
  text,
  favourite,
  star,
  futureCount,
  pastCount,
  ignoreCountInfo,
  leaderboard = false
}) => {
  const showFutureCount: boolean =
    futureCount > 0 && (pastCount > 0 || leaderboard);
  const showPastCount: boolean =
    (leaderboard && pastCount > 0) ||
    pastCount > 1 ||
    (futureCount > 0 && pastCount > 0);

  return (
    <FlexLiGrow>
      <CountedListItemText
        faded={!ignoreCountInfo && pastCount === 0}
        favourite={favourite}
        star={star}
      >
        {text}
      </CountedListItemText>

      {!ignoreCountInfo && showFutureCount && (
        <CountedListItemFutureCount>{futureCount}</CountedListItemFutureCount>
      )}

      {!ignoreCountInfo && showPastCount && (
        <CountedListItemPastCount leaderboard={leaderboard}>
          {pastCount}
        </CountedListItemPastCount>
      )}
    </FlexLiGrow>
  );
};
