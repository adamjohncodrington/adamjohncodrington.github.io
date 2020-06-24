import React from "react";
import styled, { css } from "styled-components";

import { FlexLiGrow } from "primitives";

const CountedListItemPastCount = styled.span`
  ${({
    theme: {
      countedList: {
        count: { width }
      }
    }
  }: IThemeProp) => css`
    font-weight: bold;
    text-align: right;
    width: ${width};
    margin-left: 5px;
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

export const CountedItem: React.FC<ICountedItem> = ({
  text,
  favourite,
  star,
  futureCount,
  pastCount,
  countInfoIrrelevant
}) => {
  const showFutureCount: boolean = futureCount > 0 && pastCount > 0;
  const showPastCount: boolean =
    pastCount > 1 || (futureCount > 0 && pastCount > 0);

  return (
    <FlexLiGrow>
      <CountedListItemText
        faded={!countInfoIrrelevant && pastCount === 0}
        favourite={favourite}
        star={star}
      >
        {text}
      </CountedListItemText>

      {!countInfoIrrelevant && showFutureCount && (
        <CountedListItemFutureCount>{futureCount}</CountedListItemFutureCount>
      )}

      {!countInfoIrrelevant && showPastCount && (
        <CountedListItemPastCount>{pastCount}</CountedListItemPastCount>
      )}
    </FlexLiGrow>
  );
};
