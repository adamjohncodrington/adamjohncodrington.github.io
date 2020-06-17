import React from "react";
import styled, { css } from "styled-components";

import { FlexRow } from "../../primitives";

interface ICountedListItemPastCount extends ThemeProps {
  leaderboard: boolean;
}
const CountedListItemPastCount = styled.span`
  ${({
    leaderboard,
    theme: {
      section: {
        body: {
          countedList: {
            count: { width },
            leaderboardAdditonalHorizontalSpace
          }
        }
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
  opacity: ${(props: ThemeProps) => props.theme.fadedOpacity};
`;

interface ListEntryProps extends ThemeProps {
  favourite?: boolean;
  star?: boolean;
  faded: boolean;
}

const ListEntry = styled.span`
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

export const CountedListItem: React.FC<ICountedListItem> = ({
  listEntry,
  favourite,
  star,
  futureCount,
  pastCount,
  ignoreCountInfo,
  leaderboard = false
}) => {
  const showFutureCount = futureCount > 0 && (pastCount > 0 || leaderboard);
  const showPastCount =
    (leaderboard && pastCount > 0) ||
    pastCount > 1 ||
    (futureCount > 0 && pastCount > 0);

  return (
    <FlexRow>
      <ListEntry
        faded={!ignoreCountInfo && pastCount === 0}
        favourite={favourite}
        star={star}
      >
        {listEntry}
      </ListEntry>

      {!ignoreCountInfo && showFutureCount && (
        // @ts-ignore
        <CountedListItemPastCount>{futureCount}</CountedListItemPastCount>
      )}
      {!ignoreCountInfo && showPastCount && (
        <CountedListItemFutureCount leaderboard={leaderboard}>
          {pastCount}
        </CountedListItemFutureCount>
      )}
    </FlexRow>
  );
};
