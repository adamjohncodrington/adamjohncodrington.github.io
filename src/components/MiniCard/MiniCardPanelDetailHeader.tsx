import React, { FC, ReactElement } from "react";

import { FlexRowDynamic, Link } from "primitives";
import { getDatesText, moveTheSuffixToPrefix } from "utils";

import {
  StyledLevel1MainText,
  StyledIndex,
  StyledPanelSecondaryText
} from "./styles";

export const MiniCardPanelDetailHeader: FC<IMiniCardPanelDetailHeader> = ({
  panelVisible,
  panelExists,
  index,
  mainText,
  dates,
  favourite,
  headerLink,
  video,
  secondaryText,
  year
}) => {
  const useTriangleAsBullet: boolean = !!headerLink;

  const HeaderContents: ReactElement = (
    <FlexRowDynamic bold={panelExists && panelVisible} italic={false}>
      {index && !useTriangleAsBullet && <StyledIndex>{index}.</StyledIndex>}

      {mainText && (
        <StyledLevel1MainText useTriangleAsBullet={useTriangleAsBullet}>
          {moveTheSuffixToPrefix(mainText[0])}
        </StyledLevel1MainText>
      )}

      {(dates || year || secondaryText) && (
        <StyledPanelSecondaryText
          favourite={favourite}
          showVideoSymbol={!!video}
        >
          {secondaryText ? secondaryText : dates ? getDatesText(dates) : year}
        </StyledPanelSecondaryText>
      )}
    </FlexRowDynamic>
  );

  return headerLink ? (
    <Link href={headerLink}>{HeaderContents}</Link>
  ) : (
    HeaderContents
  );
};
