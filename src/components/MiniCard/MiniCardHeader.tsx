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
  StyledSecondaryCount
} from "./styles";

export const MiniCardHeader: FC<IMiniCardHeader> = ({
  panelVisible,
  isStatic,
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

  const bold: boolean = !isStatic && panelVisible;

  return (
    <FlexRowDynamic
      italic={false}
      bold={bold}
      alignItems="center"
      firstDirectChildCss={css`
        margin-right: 0.25rem;
      `}
    >
      <Arrow panelVisible={panelVisible} size={"0.75rem"} />

      <StyledPrimaryTextContainer>
        <StyledPrimaryText faded={faded} favourite={favourite} star={star}>
          {moveTheSuffixToPrefix(primaryText)}
        </StyledPrimaryText>

        {primaryTextAlt && (
          <StyledPrimaryAltText>
            ({moveTheSuffixToPrefix(primaryTextAlt)})
          </StyledPrimaryAltText>
        )}
      </StyledPrimaryTextContainer>

      {showSecondaryCount && (
        <StyledSecondaryCount>{secondaryCount}</StyledSecondaryCount>
      )}

      {showPrimaryCount && (
        <StyledPrimaryCount greaterCountPadding={greaterCountPadding}>
          {primaryCount}
        </StyledPrimaryCount>
      )}

      {secondaryText}
    </FlexRowDynamic>
  );
};
