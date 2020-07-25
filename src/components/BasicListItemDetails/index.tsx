import React from "react";

import { getDatesText, isInFuture } from "utils";
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

interface IBasicListItemDetailIndexed extends IBasicListItemDetail {
  index?: number;
}

export const BasicListItemDetail: React.FC<IBasicListItemDetailIndexed> = ({
  index,
  mainText,
  dates,
  favourite,
  video
}) => {
  const IS_IN_FUTURE: boolean = isInFuture(dates[0]);

  return (
    <StyledLi key={index} isInFuture={IS_IN_FUTURE}>
      <Disclosure
        isStatic={!video}
        Header={({ panelIsVisible }) => (
          <DynamicFontWeightFlexRow panelIsVisible={!!video && panelIsVisible}>
            {index && <StyledIndex>{index}.</StyledIndex>}
            {mainText && <StyledMainText>{mainText[0]}</StyledMainText>}
            <StyledDateText favourite={favourite} video={video}>
              {getDatesText(dates)}
            </StyledDateText>
          </DynamicFontWeightFlexRow>
        )}
        Panel={
          <StyledPanelContainer>
            {video && <YouTubeVideo {...video} marginTop="5px" />}
          </StyledPanelContainer>
        }
      />
    </StyledLi>
  );
};

interface IBasicListItemDetails {
  details: Array<IBasicListItemDetail>;
}

export const BasicListItemDetails: React.FC<IBasicListItemDetails> = ({
  details
}) => (
  <StyledOl>
    {details.map((detail: IBasicListItemDetail, index: number) => (
      <BasicListItemDetail
        key={index}
        index={details.length > 1 ? index + 1 : undefined}
        {...detail}
      />
    ))}
  </StyledOl>
);
