import React, { FC } from "react";
import { css } from "styled-components";

import { FlexRowDynamic } from "primitives";
import { moveTheSuffixToPrefix } from "utils";

import { Arrow } from "../Arrow";
import {
  StyledPrimaryText,
  StyledPrimaryAltText,
  StyledPrimaryTextContainer,
  StyledPrimaryCount,
  StyledSecondaryCount,
  StyledSecondaryText
} from "./styles";

export const MiniCardHeader: FC<IMiniCardHeader> = ({
  panelVisible,
  panelExists,
  primaryText,
  primaryTextAlt,
  secondaryText,
  favourite,
  star,
  primaryCount,
  secondaryCount,
  countInfoIrrelevant,
  greaterCountPadding
}) => {
  const faded: boolean = !countInfoIrrelevant && primaryCount === 0;

  const showPrimaryCount: boolean =
    !!primaryCount &&
    (primaryCount > 1 || (!!secondaryCount && secondaryCount > 0));

  const showSecondaryCount: boolean =
    !!primaryCount &&
    !!secondaryCount &&
    secondaryCount > 0 &&
    primaryCount > 0;

  const bold: boolean = panelExists && panelVisible;

  return (
    <FlexRowDynamic
      faded={faded}
      italic={false}
      bold={false}
      alignItems="center"
      svgCss={css`
        margin-left: ${showPrimaryCount ? "0.75rem" : "0.25rem"};
      `}
    >
      <StyledPrimaryTextContainer>
        <StyledPrimaryText bold={bold} favourite={favourite} star={star}>
          {moveTheSuffixToPrefix(primaryText)}
        </StyledPrimaryText>

        {primaryTextAlt && (
          <StyledPrimaryAltText>
            ({moveTheSuffixToPrefix(primaryTextAlt)})
          </StyledPrimaryAltText>
        )}
      </StyledPrimaryTextContainer>

      {showSecondaryCount && (
        <StyledSecondaryCount bold={bold}>
          {secondaryCount}
        </StyledSecondaryCount>
      )}

      {showPrimaryCount && (
        <StyledPrimaryCount
          bold={bold}
          greaterCountPadding={greaterCountPadding}
        >
          {primaryCount}
        </StyledPrimaryCount>
      )}

      {secondaryText && (
        <StyledSecondaryText>{secondaryText}</StyledSecondaryText>
      )}

      {panelExists && <Arrow panelVisible={panelVisible} size="0.75rem" />}
    </FlexRowDynamic>
  );
};
