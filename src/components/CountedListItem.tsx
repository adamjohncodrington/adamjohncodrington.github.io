import React from "react";
import styled, { css } from "styled-components";

import { FlexRow, Text } from "../primitives";

interface ListEntryProps extends ThemeProps {
  favourite?: boolean;
  star?: boolean;
  faded?: boolean;
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

interface PastCountProps extends ThemeProps {
  leaderboard: boolean;
}
const PastCount = styled(Text.P.S)`
  text-align: right;
  margin-left: ${(props: PastCountProps) => (props.leaderboard ? "10px" : 0)};
  width: ${(props: PastCountProps) =>
    props.theme.section.body.basicList.count.width};
  font-weight: bold;
`;

const FutureCount = styled(PastCount)`
  opacity: ${(props: ThemeProps) => props.theme.fadedOpacity};
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
        <FutureCount>{futureCount}</FutureCount>
      )}
      {!ignoreCountInfo && showPastCount && (
        <PastCount leaderboard={leaderboard}>{pastCount}</PastCount>
      )}
    </FlexRow>
  );
};
