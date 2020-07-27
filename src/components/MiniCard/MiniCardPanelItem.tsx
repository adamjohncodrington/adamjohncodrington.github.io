import React from "react";

import { getDatesText, isInFuture } from "utils";
import { DynamicFontWeightFlexRow } from "primitives";

import { Disclosure } from "../Disclosure";

import {
  StyledLi,
  StyledLevel1MainText,
  StyledIndex,
  StyledDateText
} from "./styles";
import { YouTubeVideo } from "../YouTubeVideo";

interface IMiniCardDetailIndexed extends IMiniCardDetail {
  index?: number;
}

export const MiniCardPanelItem: React.FC<IMiniCardDetailIndexed> = props => {
  const { index, mainText, dates, favourite, video } = props;
  const IS_IN_FUTURE: boolean = isInFuture(dates[0]);

  return (
    <StyledLi key={index} isInFuture={IS_IN_FUTURE}>
      <Disclosure
        isStatic={!video}
        Header={({ panelIsVisible }) => (
          <DynamicFontWeightFlexRow panelIsVisible={!!video && panelIsVisible}>
            {index && <StyledIndex>{index}.</StyledIndex>}
            {mainText && (
              <StyledLevel1MainText>{mainText[0]}</StyledLevel1MainText>
            )}
            <StyledDateText favourite={favourite} video={video}>
              {getDatesText(dates)}
            </StyledDateText>
          </DynamicFontWeightFlexRow>
        )}
        Panel={() => (
          <div>{video && <YouTubeVideo {...video} marginTop="5px" />}</div>
        )}
      />
    </StyledLi>
  );
};
