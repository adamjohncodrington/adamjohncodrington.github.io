import React from "react";

import { Disclosure } from "../Disclosure";

import {
  StyledLi,
  StyledOl,
  StyledMainText,
  StyledIndex,
  StyledDateText,
  StyledFlexRow
} from "./styles";
import { YouTubeVideo } from "components/YouTubeVideo";
import { SvgVideoCamera } from "resources";

export const CountedListItemDetail: React.FC<ICountedListItemDetail> = ({
  index,
  mainText,
  dateText,
  favourite,
  isInFuture,
  youtubeId
}) => (
  <StyledLi key={index} isInFuture={isInFuture}>
    <Disclosure
      isStatic={!youtubeId}
      Header={({ panelIsVisible }) => (
        <StyledFlexRow panelIsVisible={!!youtubeId && panelIsVisible}>
          {index && <StyledIndex>{index}.</StyledIndex>}
          {mainText && <StyledMainText>{mainText[0]}</StyledMainText>}
          <StyledDateText favourite={favourite}>{dateText}</StyledDateText>
          {youtubeId && <SvgVideoCamera />}
        </StyledFlexRow>
      )}
      Panel={<>{youtubeId && <YouTubeVideo youtubeId={youtubeId} />}</>}
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
