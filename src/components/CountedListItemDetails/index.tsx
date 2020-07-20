import React from "react";

import { DynamicFontWeightFlexRow } from "primitives";

import { Disclosure } from "../Disclosure";

import {
  StyledLi,
  StyledOl,
  StyledMainText,
  StyledIndex,
  StyledDateText
} from "./styles";
import { YouTubeVideo } from "components/YouTubeVideo";

export const CountedListItemDetail: React.FC<ICountedListItemDetail> = ({
  index,
  mainText,
  dateText,
  favourite,
  isInFuture,
  youtubeVideo
}) => (
  <StyledLi key={index} isInFuture={isInFuture}>
    <Disclosure
      isStatic={!youtubeVideo}
      Header={({ panelIsVisible }) => (
        <DynamicFontWeightFlexRow
          panelIsVisible={!!youtubeVideo && panelIsVisible}
        >
          {index && <StyledIndex>{index}.</StyledIndex>}
          {mainText && <StyledMainText>{mainText[0]}</StyledMainText>}
          <StyledDateText favourite={favourite} youtubeVideo={youtubeVideo}>
            {dateText}
          </StyledDateText>
        </DynamicFontWeightFlexRow>
      )}
      Panel={<>{youtubeVideo && <YouTubeVideo {...youtubeVideo} />}</>}
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
