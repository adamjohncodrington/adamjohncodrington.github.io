import React, { FC } from "react";
import styled from "styled-components";

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

const StyledFlexRowDynamic = styled(FlexRowDynamic)`
  svg {
    margin-left: 0.5rem;
  }
`;

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

  return (
    <StyledFlexRowDynamic
      italic={false}
      bold={panelExists && panelVisible}
      alignItems="center"
    >
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

      {panelExists && <Arrow panelVisible={panelVisible} size={"0.75rem"} />}
    </StyledFlexRowDynamic>
  );
};
