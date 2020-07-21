import React from "react";

import { DynamicFontWeightFlexRow } from "primitives";

import { Disclosure } from "../Disclosure";

import {
  StyledLi,
  StyledOl,
  StyledMainText,
  StyledIndex,
  StyledDateText,
  StyledPanelContainer
} from "./styles";
import { YouTubeVideo } from "components/YouTubeVideo";

export const CountedListItemDetail: React.FC<ICountedListItemDetail> = ({
  index,
  mainText,
  dateText,
  favourite,
  isInFuture,
  video
}) => (
  <StyledLi key={index} isInFuture={isInFuture}>
    <Disclosure
      isStatic={!video}
      Header={({ panelIsVisible }) => (
        <DynamicFontWeightFlexRow panelIsVisible={!!video && panelIsVisible}>
          {index && <StyledIndex>{index}.</StyledIndex>}
          {mainText && <StyledMainText>{mainText[0]}</StyledMainText>}
          <StyledDateText favourite={favourite} video={video}>
            {dateText}
          </StyledDateText>
        </DynamicFontWeightFlexRow>
      )}
      Panel={
        <StyledPanelContainer>
          {video && <YouTubeVideo {...video} />}
        </StyledPanelContainer>
      }
    />
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
