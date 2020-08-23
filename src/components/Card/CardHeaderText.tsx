import React from "react";

import { Arrow } from "../Arrow";

import { CardTitle, CardSubtitle, FlexRowDynamic } from "primitives";
import { moveTheSuffixToPrefix } from "utils";

import { CardDisclaimer, CardTextContainer, CardSecondaryBody } from "./styles";

export const CardHeaderText: React.FC<ICardHeader> = ({
  panelVisible,
  title,
  subtitle,
  favourite,
  body,
  secondaryBody,
  disclaimer,
  isStatic
}) => (
  <CardTextContainer data-test="card-container">
    <FlexRowDynamic bold={false} italic={false}>
      {false && <Arrow panelVisible={panelVisible} size="0.75rem" />}
      <CardTitle
        bold={!isStatic && panelVisible}
        data-test="card-title"
        favourite={favourite}
      >
        {moveTheSuffixToPrefix(title)}
      </CardTitle>
    </FlexRowDynamic>
    {subtitle && (
      <CardSubtitle bold={false} data-test="card-subtitle">
        {moveTheSuffixToPrefix(subtitle)}
      </CardSubtitle>
    )}
    {body && <span data-test="card-body">{moveTheSuffixToPrefix(body)}</span>}
    {secondaryBody && (
      <CardSecondaryBody data-test="card-secondary-body">
        {moveTheSuffixToPrefix(secondaryBody)}
      </CardSecondaryBody>
    )}
    {disclaimer && (
      <CardDisclaimer data-test="card-disclaimer">{`(${moveTheSuffixToPrefix(
        disclaimer
      )})`}</CardDisclaimer>
    )}
  </CardTextContainer>
);
