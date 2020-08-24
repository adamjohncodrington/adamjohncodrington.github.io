import React, { FC, ReactElement } from "react";
import { css } from "styled-components";

import { FlexRowDynamic, Link } from "primitives";
import { getDatesText, moveTheSuffixToPrefix } from "utils";

import { Arrow } from "../Arrow";

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
    <FlexRowDynamic
      alignItems="center"
      bold={panelExists && panelVisible}
      italic={false}
      svgCss={css`
        margin-left: 0.25rem;
      `}
    >
      {index && !useTriangleAsBullet && <StyledIndex>{index}.</StyledIndex>}

      {mainText && (
        <StyledLevel1MainText useTriangleAsBullet={useTriangleAsBullet}>
          {moveTheSuffixToPrefix(mainText[0])}
        </StyledLevel1MainText>
      )}

      {(dates || year || secondaryText) && (
        <StyledPanelSecondaryText favourite={favourite}>
          {secondaryText ? secondaryText : dates ? getDatesText(dates) : year}
        </StyledPanelSecondaryText>
      )}

      {panelExists && <Arrow panelVisible={panelVisible} size="0.625rem" />}
    </FlexRowDynamic>
  );

  return headerLink ? (
    <Link href={headerLink}>{HeaderContents}</Link>
  ) : (
    HeaderContents
  );
};
