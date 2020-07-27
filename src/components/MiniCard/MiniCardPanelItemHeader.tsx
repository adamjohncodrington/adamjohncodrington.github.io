import React, { ReactElement } from "react";

import { DynamicFontWeightFlexRow, Link } from "primitives";
import { getDatesText } from "utils";

import { StyledLevel1MainText, StyledIndex, StyledDateText } from "./styles";

export const MiniCardPanelItemHeader: React.FC<IMiniCardPanelItemHeader> = ({
  index,
  mainText,
  dates,
  favourite,
  headerLink,
  video,
  panelVisible,
  year,
  isStatic
}) => {
  const isMediaListItem: boolean = !!headerLink;

  const HeaderContents: ReactElement = (
    <DynamicFontWeightFlexRow bold={!isStatic && panelVisible}>
      {index && !isMediaListItem && <StyledIndex>{index}.</StyledIndex>}

      {mainText && (
        <StyledLevel1MainText media={isMediaListItem}>
          {mainText[0]}
        </StyledLevel1MainText>
      )}

      {dates ||
        (year && (
          <StyledDateText favourite={favourite} media={!!video}>
            {dates ? getDatesText(dates) : year}
          </StyledDateText>
        ))}
    </DynamicFontWeightFlexRow>
  );

  if (!headerLink) return HeaderContents;

  return <Link href={headerLink}>{HeaderContents}</Link>;
};
