import React, { FC } from "react";

import { CardTitle, CardSubtitle } from "primitives";
import { moveTheSuffixToPrefix } from "utils";

import { CardDisclaimer, CardTextContainer, CardSecondaryBody } from "./styles";

export const CardHeaderText: FC<ICardHeader> = ({
  panelVisible,
  panelExists,
  title,
  subtitle,
  favourite,
  body,
  secondaryBody,
  disclaimer
}) => (
  <CardTextContainer data-test="card-container">
    <CardTitle
      bold={panelExists && panelVisible}
      data-test="card-title"
      favourite={favourite}
    >
      {moveTheSuffixToPrefix(title)}
    </CardTitle>
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
