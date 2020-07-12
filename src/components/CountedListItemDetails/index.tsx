import React from "react";

import { FlexRow } from "primitives";

import {
  StyledLi,
  StyledOl,
  StyledMainText,
  StyledIndex,
  StyledDateText
} from "./styles";

export const CountedListItemDetail: React.FC<ICountedListItemDetail> = ({
  index,
  mainText,
  dateText,
  isInFuture
}) => (
  <StyledLi key={index} isInFuture={isInFuture}>
    <FlexRow>
      {!!index && <StyledIndex>{index}.</StyledIndex>}
      <StyledMainText>{mainText}</StyledMainText>
      <StyledDateText>{dateText}</StyledDateText>
    </FlexRow>
  </StyledLi>
);

interface ICountedListItemDetails {
  details: Array<ICountedListItemDetail>;
}

export const CountedListItemDetails: React.FC<ICountedListItemDetails> = ({
  details
}) => (
  <StyledOl>
    {details.map((detail: ICountedListItemDetail, index: number) => (
      <CountedListItemDetail key={index} {...detail} />
    ))}
  </StyledOl>
);
