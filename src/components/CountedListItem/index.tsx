import React from "react";

import { FlexRow, GlobalText } from "../../primitives";

const {
  ListEntry,
  CountedListItemFutureCount,
  CountedListItemPastCount
} = GlobalText;

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
